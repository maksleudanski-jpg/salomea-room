import { useRef } from "react";
import { archiveSequenceBeats, assetPaths } from "../data/siteContent";
import { useCanvasSequence } from "../hooks/useCanvasSequence";
import { backgroundImage, sequenceBeatStyle } from "../utils/cssVars";

const FRAME_COUNT = 180;
const getFrameSrc = (index: number) => `/assets/seq/archive/frame_${String(index).padStart(3, "0")}.webp`;

function getBeatOpacity(progress: number, range: readonly [number, number]) {
  const [start, end] = range;
  const fade = 0.065;

  if (progress < start || progress > end) return 0;
  if (progress < start + fade) return (progress - start) / fade;
  if (progress > end - fade) return (end - progress) / fade;

  return 1;
}

export function ArchiveSequenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { hasSequence, progress } = useCanvasSequence({
    sectionRef,
    pinRef,
    canvasRef,
    frameCount: FRAME_COUNT,
    frameSrc: getFrameSrc,
    bottomCropRatio: 0.065,
    zoom: 1.02,
  });

  return (
    <section ref={sectionRef} className="sequence-section sequence-section--archive">
      <div ref={pinRef} className="sequence-section__pin">
        {hasSequence ? (
          <canvas
            ref={canvasRef}
            className="sequence-section__canvas"
            aria-label="Историческая скролл-сцена Саломеи"
          />
        ) : (
          <div
            className="sequence-section__fallback image-fill"
            style={backgroundImage(assetPaths.archiveFallback)}
            aria-hidden="true"
          />
        )}

        <div className="sequence-section__overlay sequence-section__overlay--archive" aria-hidden="true" />

        {archiveSequenceBeats.map((beat) => {
          const opacity = getBeatOpacity(progress, beat.range);
          const beatClassName = beat.align === "right" ? "sequence-beat sequence-beat--right" : "sequence-beat";

          return (
            <article
              key={beat.title}
              className={beatClassName}
              style={sequenceBeatStyle(opacity, 28, 8)}
            >
              <div className="sequence-beat__line sequence-beat__line--rose" />
              <h2 className="sequence-beat__title">{beat.title}</h2>
              <p className="sequence-beat__text sequence-beat__text--soft">{beat.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
