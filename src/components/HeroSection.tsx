import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assetPaths, heroContent } from "../data/siteContent";
import { backgroundImage } from "../utils/cssVars";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const statueRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 44,
        autoAlpha: 0,
        filter: "blur(12px)",
        duration: 1.25,
        ease: "power3.out",
        stagger: 0.11,
      });

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.11,
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (statueRef.current) {
        gsap.to(statueRef.current, {
          yPercent: -8,
          rotate: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="hero-section">
      <div
        ref={bgRef}
        className="hero-section__background image-fill"
        style={backgroundImage(assetPaths.heroFrame)}
        aria-hidden="true"
      />
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="hero-section__fade" aria-hidden="true" />
      <div className="hero-section__circle" aria-hidden="true" />

      <div className="hero-section__content">
        <div className="hero-section__copy">
          <p data-hero-reveal className="section-eyebrow section-eyebrow--brass">
            <span />
            {heroContent.label}
          </p>

          <h1 data-hero-reveal className="hero-section__title">
            {heroContent.title}
          </h1>

          <p data-hero-reveal className="hero-section__subtitle">
            {heroContent.subtitle}
          </p>

          <p data-hero-reveal className="hero-section__text">
            {heroContent.body}
          </p>

          <div data-hero-reveal className="hero-section__actions">
            <a className="premium-button" href="#sequence">Смотреть концепцию</a>
            <a className="premium-button premium-button--secondary" href="#place">Показать место</a>
          </div>
        </div>

        <aside ref={statueRef} className="hero-card" data-hero-reveal>
          <div className="hero-card__inner">
            <div className="hero-card__glow" aria-hidden="true" />
            <img
              src={assetPaths.salomeaEmblem}
              alt="Саломея Русецкая с эмблемой колледжа"
              className="hero-card__image"
            />
            <div className="hero-card__caption">
              <p className="hero-card__caption-title">{heroContent.ideaTitle}</p>
              <p className="hero-card__caption-text">{heroContent.ideaBody}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero-section__scroll-hint" aria-hidden="true" />
    </section>
  );
}
