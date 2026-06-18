import { assetPaths } from "../data/siteContent";
import { backgroundImage } from "../utils/cssVars";

export function WhyCollegeSection() {
  return (
    <section className="section-band college-section">
      <div className="content-container">
        <div className="college-section__layout">
          <div data-reveal>
            <p className="section-eyebrow section-eyebrow--brass">
              <span />
              Почему колледж
            </p>
            <h2 className="college-section__title">Колледж — это место, где начинается выбор</h2>
            <div className='combineGrid'>
            <div className="college-section__text-grid">
              <p>Колледж — это не только аудитории, занятия и расписание. Это пространство, где студенты формируют характер, профессию и отношение к будущему.</p>
            </div>
            <div className="college-section__text-grid">
              <p>Поэтому в колледже важны не только учебные кабинеты, но и символы, которые напоминают: образование открывает возможности.</p>
            </div>
            </div>
            <blockquote className="college-section__quote">
              Статуя Саломеи Русецкой может стать таким символом — тихим, сильным и понятным каждому студенту.
            </blockquote>
          </div>

          <div data-reveal className="college-frame">
            <div
              className="college-frame__image"
              data-parallax="16"
              style={backgroundImage(assetPaths.college)}
              aria-hidden="true"
            />
            <div className="college-frame__caption">
              <p className="college-frame__label">Главный визуальный якорь</p>
              <p className="college-frame__text">Фасад колледжа — не фон, а пространство, где идея статуи становится конкретной.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
