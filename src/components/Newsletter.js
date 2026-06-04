import { useEffect, useRef } from 'react';
import './Newsletter.css';

function Newsletter() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distanceX = e.clientX - buttonCenterX;
      const distanceY = e.clientY - buttonCenterY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < 100) {
        // Smoothly pull up to 12px
        const power = (100 - distance) / 100; // 0 to 1
        const targetX = distanceX * 0.12 * power;
        const targetY = distanceY * 0.12 * power;

        button.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        button.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)';
      } else {
        // Smooth spring back
        button.style.transform = 'translate3d(0, 0, 0)';
        button.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate3d(0, 0, 0)';
      button.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="newsletter" id="contact" aria-label="Newsletter section" data-animate="section">
      <div className="newsletter__inner section-shell">
        <svg className="newsletter__arrow" viewBox="0 0 190 120" aria-hidden="true">
          <path
            d="M8 28C54 -2 68 91 125 54C155 35 174 54 183 84"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <path
            d="M166 78L184 91L190 69"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
        <div className="newsletter__drop" aria-hidden="true" />
        <div className="newsletter__content" data-animate="scale">
          <h2 className="newsletter__title">
            Subscribe to <span>our newsletter</span>
          </h2>
          <p className="newsletter__copy">
            Get concise thinking on brand strategy, design systems, and communications craft
            delivered with the right amount of useful.
          </p>
          <a
            ref={buttonRef}
            className="newsletter__button"
            href="mailto:info@elementum.com"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
