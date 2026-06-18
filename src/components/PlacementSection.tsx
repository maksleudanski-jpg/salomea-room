import { assetPaths } from "../data/siteContent";
import { backgroundImage } from "../utils/cssVars";

export function PlacementSection() {
  return (
    <section id="place" className="section-band placement-section">
      <div className="content-container">
        <div className="placement-section__layout">
          <div data-reveal>
            <p className="section-eyebrow section-eyebrow--brass">
              <span />
              Место размещения
            </p>
            <h2 className="placement-section__title">Статуя у входа в колледж</h2>
            <p className="placement-section__text">
              Так как именно входная зона каждый день встречает студентов, преподавателей и гостей, она подходит для размещения статуи лучше всего. Это место не случайное: через него проходит главный маршрут колледжа.
            </p>
          </div>

          <div data-reveal className="placement-frame">
            <div
              className="placement-frame__image image-fill"
              data-parallax="10"
              style={backgroundImage(assetPaths.finalFrame)}
              aria-hidden="true"
            />
            <div className="placement-frame__overlay" aria-hidden="true" />
            <div className="placement-pin" aria-hidden="true"><span /></div>
            <div className="placement-frame__line" aria-hidden="true" />
            <div className="placement-frame__card">
              <p className="placement-frame__label">Предлагаемая зона</p>
              <p className="placement-frame__card-text">Фасад колледжа, пространство рядом с главным входом.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
