import './HelpProgress.css';

function HelpProgress() {
  return (
    <section className="help section-shell" aria-label="Help progress section" data-animate="section">
      <div className="help__visual" data-animate="slide-left">
        <div className="help__triangle help__triangle--small" aria-hidden="true" />
        <div className="help__image-container">
          <img
            className="help__image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
            alt="Two colleagues working together at a laptop"
          />
        </div>
        <div className="help__triangle help__triangle--large" aria-hidden="true" />
      </div>
      <div className="help__content" data-animate="slide-right">
        <h2 className="help__title">
          See how we can help you{' '}
          <span className="help__marked">
            progress
            <svg className="decorative-underline" viewBox="0 0 190 24" aria-hidden="true">
              <path
                d="M5 16C34 5 62 23 94 13C126 4 151 19 186 8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>
          </span>
        </h2>
        <p className="help__copy">
          From positioning and audience research to launch-ready creative systems, our team builds
          practical momentum around the work that matters.
        </p>
        <a className="accent-link help__link" href="#contact">
          Read more ---
        </a>
      </div>
    </section>
  );
}

export default HelpProgress;
