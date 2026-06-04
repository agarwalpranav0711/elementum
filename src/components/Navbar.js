import { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const updateNavbar = () => {
      const hero = document.querySelector('.hero');
      const scrollThreshold = hero ? hero.offsetHeight - 90 : 240;

      setIsScrolled(window.scrollY > scrollThreshold);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar${isScrolled ? ' navbar--scrolled' : ''}${
          isMenuOpen ? ' navbar--open' : ''
        }`}
        aria-label="Primary navigation"
      >
        <div className="navbar__inner">
          <a className="navbar__logo" href="#home" aria-label="Elementum home" onClick={handleLinkClick}>
            Elementum
          </a>
          <div className="navbar__links" aria-label="Main menu">
            {navItems.map((item) => (
              <a className="navbar__link" href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className="navbar__right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <div className={`theme-toggle__icon-wrapper ${theme === 'dark' ? 'theme-toggle__icon-wrapper--dark' : ''}`}>
                <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
            </button>
            <button
              className={`navbar__menu${isMenuOpen ? ' navbar__menu--active' : ''}`}
              type="button"
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
            >
              <span className="navbar__menu-line" />
              <span className="navbar__menu-line" />
              <span className="navbar__menu-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in Mobile Menu Drawer */}
      <div className={`navbar__drawer${isMenuOpen ? ' navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-links">
          {navItems.map((item) => (
            <a
              className="navbar__drawer-link"
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay to click outside and close */}
      {isMenuOpen && <div className="navbar__overlay" onClick={handleLinkClick} />}
    </>
  );
}

export default Navbar;
