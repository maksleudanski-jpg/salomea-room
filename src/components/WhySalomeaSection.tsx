import { assetPaths, salomeaCards } from "../data/siteContent";
import { backgroundImage } from "../utils/cssVars";

export function WhySalomeaSection() {
  return (
    <section id="concept" className="section-band salomea-section">
      <div className="content-container">
        <div className="salomea-section__header">
          <div data-reveal>
            <p className="section-eyebrow section-eyebrow--brass">
              <span />
              Почему Саломея
            </p>
            <h2 className="salomea-section__title">Личность, которая опередила свое время</h2>
          </div>

          <div data-reveal className="editorial-note">
            <p>
              Саломея Русецкая стала известна как женщина-врач в эпоху, когда такой профессиональный путь был почти недоступен для женщин. Она училась, путешествовала, работала с людьми разных культур и доказала, что знания и решительность способны изменить судьбу человека.
            </p>
          </div>
        </div>

        <div className="salomea-section__content">
          <div data-reveal className="salomea-frame">
            <div
              className="salomea-frame__image"
              style={backgroundImage(assetPaths.salomea)}
              aria-hidden="true"
            />
            <div className="salomea-frame__caption">
              <p className="salomea-frame__label">Исторический образ</p>
              <p className="salomea-frame__text">Не биография ради даты, а пример человека, который выбрал знание и движение.</p>
            </div>
          </div>

          <div className="salomea-card-list">
            {salomeaCards.map((card) => (
              <article key={card.title} data-reveal className="editorial-card salomea-card">
                <p className="salomea-card__eyebrow">{card.eyebrow}</p>
                <div>
                  <h3 className="salomea-card__title">{card.title}</h3>
                  <p className="salomea-card__text">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
