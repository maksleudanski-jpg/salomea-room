import { assetPaths } from "../data/siteContent";

const collegeMapEmbedUrl =
  "https://www.google.com/maps?q=%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B8%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B0%2C%20%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%203%2C%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&output=embed";

const collegeMapDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B8%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B0%2C%20%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%203%2C%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA";

export function InteractiveMapSection() {
  return (
    <section id="map" className="section-band map-section">
      <div className="map-section__layout">
        <div data-reveal>
          <p className="section-eyebrow section-eyebrow--brass">
            <span />
            Карта
          </p>
          <h2 className="map-section__title">Где может появиться статуя</h2>
          <p className="map-section__text">
            Здесь встроена реальная Google-карта с точкой Колледжа бизнеса и права в Минске. По ней можно открыть маршрут и сразу увидеть место проекта рядом с главным входом.
          </p>
          <a
            className="premium-button premium-button--map"
            href={collegeMapDirectionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Открыть маршрут
          </a>
        </div>

        <div data-reveal className="google-map-panel">
          <iframe
            className="google-map-frame"
            title="Google-карта: Колледж бизнеса и права, Минск, улица Колесникова, 3"
            src={collegeMapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="google-map-card">
            <img src={assetPaths.finalFrame} alt="Фасад Колледжа бизнеса и права" />
            <div>
              <p>Колледж бизнеса и права</p>
              <span>Минск, ул. Колесникова, 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
