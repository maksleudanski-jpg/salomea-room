import { bentoFeatures } from "../data/siteContent";

export function BentoFeaturesSection() {
  return (
    <section className="section-band features-section">
      <div className="content-container">
        <div className="features-section__header">
          <div data-reveal>
            <p className="section-eyebrow section-eyebrow--brass">
              <span />
              Что это даст
            </p>

            <h2 className="features-section__title">
              Символ, который остаётся в памяти
            </h2>
          </div>

          <p data-reveal className="features-section__intro">
            Такая статуя может стать частью идентичности колледжа. Она будет
            напоминать студентам, что образование — это не формальность, а
            возможность изменить свою жизнь.
          </p>
        </div>

        <div className="features-grid">
          {bentoFeatures.map((feature, index) => (
            <article
              key={feature.title}
              data-reveal
              className="feature-card"
            >
              <span className="feature-card__number">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <div className="feature-card__top">
                <p className="feature-card__label">Преимущество</p>

                <h3 className="feature-card__title">
                  {feature.title}
                </h3>
              </div>

              <p className="feature-card__text">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}