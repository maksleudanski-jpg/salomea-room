export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="#top" className="site-header__brand">
          <span className="site-header__logo">S</span>
          <span className="site-header__title">Саломея · Колледж бизнеса и права</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#sequence" className="site-nav__link">Сцена</a>
          <a href="#place" className="site-nav__link">Место</a>
          <a href="#map" className="site-nav__link">Карта</a>
        </nav>
      </div>
    </header>
  );
}
