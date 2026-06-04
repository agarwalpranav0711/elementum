import './Footer.css';

const footerGroups = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Services', 'Blog']
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility']
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter']
  }
];

function FooterGroup({ title, links }) {
  return (
    <div className="footer__group">
      <h2 className="footer__heading">{title}</h2>
      <ul className="footer__list">
        {links.map((link) => {
          const className = `footer__link footer__link--${link.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <li className="footer__item" key={link}>
              <a className={className} href="#home">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__inner section-shell">
        <hr className="footer__divider" />
        <div className="footer__grid">
          {footerGroups.map((group) => (
            <FooterGroup title={group.title} links={group.links} key={group.title} />
          ))}
          <div className="footer__group">
            <h2 className="footer__heading">Contact</h2>
            <address className="footer__address">
              1498w Fluton ate STE 2D Chicago IL 63867
              <br />
              <a className="footer__link" href="tel:+1123456789000">
                (123) 456789000
              </a>
              <br />
              <a className="footer__link" href="mailto:info@elementum.com">
                info@elementum.com
              </a>
            </address>
          </div>
        </div>
        <p className="footer__copyright">©2023 Elementum. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
