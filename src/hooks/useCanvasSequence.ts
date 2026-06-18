import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type UseCanvasSequenceOptions = {
  sectionRef: RefObject<HTMLElement | null>;
  pinRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  frameCount: number;
  frameSrc: (index: number) => string;
  bottomCropRatio?: number;
  zoom?: number;
};

type SequenceState = {
  ready: boolean;
  hasSequence: boolean;
  loaded: number;
  progress: number;
  currentFrame: number;
};

export function useCanvasSequence({
  sectionRef,
  pinRef,
  canvasRef,
  frameCount,
  frameSrc,
  bottomCropRatio = 0.08,
  zoom = 1.03,
}: UseCanvasSequenceOptions): SequenceState {
  const imagesRef = useRef<Array<HTMLImageElement | undefined>>(new Array(frameCount));
  const rafRef = useRef<number | null>(null);
  const pendingFrameRef = useRef(0);
  const lastFrameRef = useRef(-1);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [state, setState] = useState<SequenceState>({
    ready: false,
    hasSequence: true,
    loaded: 0,
    progress: 0,
    currentFrame: 0,
  });

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index];
      if (!canvas || !img?.complete || !img.naturalWidth) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width <= 0 || height <= 0) return;

      const targetWidth = Math.round(width * dpr);
      const targetHeight = Math.round(height * dpr);
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#101316";
      ctx.fillRect(0, 0, width, height);

      const sourceWidth = img.naturalWidth;
      const sourceHeight = img.naturalHeight * (1 - bottomCropRatio);

      // Object-fit: cover math: choose the bigger scale so the frame fills the canvas.
      // This may crop left/right or top/bottom, but never distorts the sequence.
      const scale = Math.max(width / sourceWidth, height / sourceHeight) * zoom;
      const drawWidth = sourceWidth * scale;
      const drawHeight = sourceHeight * scale;
      const dx = (width - drawWidth) / 2;
      const dy = (height - drawHeight) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, dx, dy, drawWidth, drawHeight);
    },
    [bottomCropRatio, canvasRef, zoom],
  );

  const scheduleDraw = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(frameCount - 1, index));
      pendingFrameRef.current = clamped;
      if (rafRef.current !== null) return;

      // requestAnimationFrame batches fast scroll updates into the browser paint cycle.
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const frame = pendingFrameRef.current;
        if (frame === lastFrameRef.current) return;
        lastFrameRef.current = frame;
        drawFrame(frame);
      });
    },
    [drawFrame, frameCount],
  );

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    let success = 0;
    imagesRef.current = new Array(frameCount);

    const update = (ok: boolean) => {
      loaded += 1;
      if (ok) success += 1;
      if (cancelled) return;

      setState((current) => ({
        ...current,
        loaded,
        hasSequence: success > 0 || loaded < Math.min(6, frameCount),
        ready: success > 0,
      }));

      if (loaded === frameCount) {
        ScrollTrigger.refresh();
      }
    };

    const loadFrame = (i: number, immediateDraw = false) => {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i + 1);
      img.onload = () => {
        imagesRef.current[i] = img;
        if (immediateDraw) scheduleDraw(0);
        update(true);
      };
      img.onerror = () => update(false);
    };

    loadFrame(0, true);

    // Load the rest after the first frame request so the page can paint quickly.
    const idle = window.setTimeout(() => {
      for (let i = 1; i < frameCount; i += 1) loadFrame(i);
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(idle);
    };
  }, [frameCount, frameSrc, scheduleDraw]);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return undefined;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin,
      pinSpacing: false,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        // Progress 0..1 maps to frame index 0..frameCount-1.
        // Math.floor keeps each image stable until the next frame threshold.
        const frame = Math.min(frameCount - 1, Math.max(0, Math.floor(progress * frameCount)));
        setState((current) => ({ ...current, progress, currentFrame: frame }));
        scheduleDraw(frame);
      },
    });

    triggerRef.current = trigger;

    const resize = () => {
      lastFrameRef.current = -1;
      const frame = Math.min(frameCount - 1, Math.max(0, Math.floor(trigger.progress * frameCount)));
      scheduleDraw(frame);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      trigger.kill();
      triggerRef.current = null;
    };
  }, [frameCount, pinRef, scheduleDraw, sectionRef]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return state;
}
