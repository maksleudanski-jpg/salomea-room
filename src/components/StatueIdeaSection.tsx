import { assetPaths } from "../data/siteContent";
import { backgroundImage } from "../utils/cssVars";

export function StatueIdeaSection() {
  return (
    <section className="section-band statue-section">
      <div className="statue-section__layout">
        <div data-reveal>
          <p className="section-eyebrow section-eyebrow--brass">
            <span />
            Идея статуи
          </p>
          <h2 className="statue-section__title">Не памятник ради формы, а образ со смыслом</h2>
          <p className="statue-section__text">
            Мы видим статую Саломеи Русецкой как часть образовательной среды. Она должна не просто украшать пространство, а создавать точку внимания: место, рядом с которым можно остановиться, задуматься и почувствовать связь между историей, знаниями и личным будущим.
          </p>
          <p className="statue-section__quote">
            Образ Саломеи соединяет прошлое и настоящее: историю медицины, силу образования и путь современного студента.
          </p>
        </div>

        <div data-reveal className="statue-frame">
          <div
            className="statue-frame__image image-fill"
            data-parallax="12"
            style={backgroundImage(assetPaths.statue)}
            aria-hidden="true"
          />
          <div className="statue-frame__overlay" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
