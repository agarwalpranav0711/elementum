import { useEffect, useState } from 'react';
import './Hero.css';

const heroPhotos = [
  {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'Smiling creative director portrait',
    className: 'hero__photo hero__photo--one'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'Brand strategist portrait',
    className: 'hero__photo hero__photo--two'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/65.jpg',
    alt: 'Communications specialist portrait',
    className: 'hero__photo hero__photo--three'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/21.jpg',
    alt: 'Design lead portrait',
    className: 'hero__photo hero__photo--four'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/12.jpg',
    alt: 'Marketing consultant portrait',
    className: 'hero__photo hero__photo--five'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/76.jpg',
    alt: 'Product thinker portrait',
    className: 'hero__photo hero__photo--six'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/28.jpg',
    alt: 'Agency partner portrait',
    className: 'hero__photo hero__photo--seven'
  }
];

function Hero() {
  const fullText = "Elementum blends strategy, design, and communications to help ambitious teams move from complex ideas to unmistakable brand momentum.";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, 1600); // Start typing after title animations complete

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 25); // 25ms per character

    return () => clearInterval(timer);
  }, [isTyping]);

  return (
    <section className="hero" id="home" aria-label="Elementum hero">
      <div className="hero__shell section-shell">
        <svg className="hero__squiggle" viewBox="0 0 42 214" aria-hidden="true">
          <path
            d="M23 2C-2 28 46 47 20 74C-6 101 47 122 21 151C-4 179 45 189 18 212"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
        <div className="hero__blob" aria-hidden="true" />
        <div className="hero__drop" aria-hidden="true" />
        <div className="hero__headline-frame">
          <div className="hero__watermark" aria-hidden="true">ELEMENTUM</div>
          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__word hero__word--one">The</span>
              <span className="hero__word hero__word--two hero__word--marked">
                thinkers
                <svg className="hero__word-underline" viewBox="0 0 190 16" aria-hidden="true">
                  <path
                     d="M3 10C24 2 41 15 62 8C83 1 98 14 119 8C140 2 158 13 187 6"
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeWidth="5"
                  />
                </svg>
              </span>
              <span className="hero__word hero__word--three">and</span>
            </span>
            <span className="hero__line">
              <span className="hero__word hero__word--four">doers</span>
              <span className="hero__word hero__word--five">were</span>
              <span className="hero__word hero__word--six">changing</span>
            </span>
            <span className="hero__line">
              <span className="hero__word hero__word--seven">the</span>
              <span className="hero__word hero__word--eight hero__word--green">status</span>
              <span className="hero__word hero__word--nine">Quo</span>
              <span className="hero__word hero__word--ten">with</span>
            </span>
          </h1>
          <p className="hero__copy">
            {typedText}
            {isTyping && <span className="typewriter-cursor">|</span>}
          </p>
          <div className="hero__photo-cloud" aria-label="Elementum team portraits">
            {heroPhotos.map((photo) => (
              <img className={photo.className} src={photo.src} alt={photo.alt} key={photo.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
