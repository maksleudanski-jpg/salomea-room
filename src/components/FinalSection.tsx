import { assetPaths } from "../data/siteContent"
import { backgroundImage } from "../utils/cssVars"

export function FinalSection() {
  return (
    <section className="final-section">
      <div
        className="final-section__background image-fill"
        style={backgroundImage(assetPaths.finalFrame)}
        aria-hidden="true"
      />
      <div className="final-section__overlay" aria-hidden="true" />

      <div className="final-section__content">
        <h2 data-reveal className="final-section__title">
          Статуя
          <br />
          <span>Саломеи Русецкой</span>
          <br />
          <small>— знак будущего, построенного на знаниях</small>
        </h2>
        <p data-reveal className="final-section__text">
          Мы хотим, чтобы у входа в колледж появилось место, которое вдохновляет студентов не бояться выбора, развиваться и идти дальше. Образ Саломеи Русецкой подходит для этого, потому что её история говорит о главном: образование даёт человеку силу, а смелость помогает превратить эту силу в путь.
        </p>
        <p data-reveal className="final-section__quote">
          Колледж может стать местом, где история не просто вспоминается — она продолжает вдохновлять.
        </p>
      </div>
    </section>
  )
}
