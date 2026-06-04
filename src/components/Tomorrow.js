import './Tomorrow.css';

function Tomorrow() {
  return (
    <section
      className="tomorrow section-shell"
      id="studio"
      aria-label="Tomorrow section"
      data-animate="section"
    >
      <div className="tomorrow__blob" aria-hidden="true" />
      <div className="tomorrow__content" data-animate="slide-left">
        <h2 className="tomorrow__title">
          <span className="tomorrow__italic">Tomorrow/</span> should be better than{' '}
          <span className="tomorrow__marked">
            today
            <svg className="decorative-underline" viewBox="0 0 150 24" aria-hidden="true">
              <path
                d="M4 16C31 4 58 25 86 13C108 4 128 8 146 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>
          </span>
        </h2>
        <p className="tomorrow__copy">
          We help organizations make smarter decisions, sharper stories, and more useful digital
          experiences through a collaborative strategy process.
        </p>
        <a className="accent-link tomorrow__link" href="#services">
          Read more ---
        </a>
      </div>
      <div className="tomorrow__visual" data-animate="slide-right">
        <div className="tomorrow__square" aria-hidden="true" />
        <div className="tomorrow__rectangle" aria-hidden="true" />
        <div className="tomorrow__diamond" aria-hidden="true" />
        <div className="tomorrow__image-container">
          <img
            className="tomorrow__image"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"
            alt="Professional business meeting with a team discussing strategy"
          />
        </div>
      </div>
    </section>
  );
}

export default Tomorrow;
