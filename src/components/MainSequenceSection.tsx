import { useRef } from "react";
import { assetPaths, mainSequenceBeats } from "../data/siteContent";
import { useCanvasSequence } from "../hooks/useCanvasSequence";
import { backgroundImage, sequenceBeatStyle } from "../utils/cssVars";

const FRAME_COUNT = 120;
const getFrameSrc = (index: number) => `/assets/seq/main/frame_${String(index).padStart(3, "0")}.webp`;

function getBeatOpacity(progress: number, range: readonly [number, number]) {
  const [start, end] = range;
  const fade = 0.06;

  if (progress < start || progress > end) return 0;
  if (progress < start + fade) return (progress - start) / fade;
  if (progress > end - fade) return (end - progress) / fade;

  return 1;
}

export function MainSequenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { hasSequence, progress } = useCanvasSequence({
    sectionRef,
    pinRef,
    canvasRef,
    frameCount: FRAME_COUNT,
    frameSrc: getFrameSrc,
    bottomCropRatio: 0.085,
    zoom: 1.04,
  });

  return (
    <section id="sequence" ref={sectionRef} className="sequence-section sequence-section--main">
      <div ref={pinRef} className="sequence-section__pin">
        {hasSequence ? (
          <canvas
            ref={canvasRef}
            className="sequence-section__canvas"
            aria-label="Скролл-сцена появления статуи у входа"
          />
        ) : (
          <div
            className="sequence-section__fallback image-fill"
            style={backgroundImage(assetPaths.sequenceFallback)}
            aria-hidden="true"
          />
        )}

        <div className="sequence-section__overlay sequence-section__overlay--main" aria-hidden="true" />
        <div className="sequence-section__side-line sequence-section__side-line--left" aria-hidden="true" />
        <div className="sequence-section__side-line sequence-section__side-line--right" aria-hidden="true" />

        {mainSequenceBeats.map((beat) => {
          const opacity = getBeatOpacity(progress, beat.range);
          const beatClassName = beat.align === "right" ? "sequence-beat sequence-beat--right" : "sequence-beat";

          return (
            <article
              key={beat.title}
              className={beatClassName}
              style={sequenceBeatStyle(opacity, 30, 10)}
            >
              <div className="sequence-beat__line sequence-beat__line--brass" />
              <h2 className="sequence-beat__title">{beat.title}</h2>
              <p className="sequence-beat__text">{beat.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
