import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tomorrow from './components/Tomorrow';
import HelpProgress from './components/HelpProgress';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Page load screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // 0.5s transition
      return () => clearTimeout(removeTimer);
    }, 800); // holds for 0.8 seconds
    return () => clearTimeout(timer);
  }, []);

  // Scroll handler for Progress, ScrollToTop, and Parallax
  useEffect(() => {
    let ticking = false;
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Scroll Progress Indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((scrollY / totalScroll) * 100);
      }

      // Scroll to Top visibility threshold (past Hero section)
      setShowScrollTop(scrollY > 450);

      // Desktop Parallax
      if (isDesktop && !ticking) {
        window.requestAnimationFrame(() => {
          // Hero Drop and Squiggle
          const heroDrop = document.querySelector('.hero__drop');
          const heroSquiggle = document.querySelector('.hero__squiggle');
          if (heroDrop) {
            heroDrop.style.transform = `translate3d(0, ${scrollY * 0.16}px, 0) rotate(${scrollY * 0.05}deg)`;
          }
          if (heroSquiggle) {
            heroSquiggle.style.transform = `translate3d(0, ${scrollY * -0.22}px, 0)`;
          }

          // Help Triangles
          const helpTriLarge = document.querySelector('.help__triangle--large');
          const helpTriSmall = document.querySelector('.help__triangle--small');
          if (helpTriLarge) {
            helpTriLarge.style.transform = `translate3d(0, ${scrollY * -0.08}px, 0) rotate(-12deg)`;
          }
          if (helpTriSmall) {
            helpTriSmall.style.transform = `translate3d(0, ${scrollY * 0.14}px, 0) rotate(28deg)`;
          }

          // Services Curve
          const servicesCurve = document.querySelector('.services__curve');
          if (servicesCurve) {
            servicesCurve.style.transform = `translate3d(0, ${scrollY * -0.12}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial run
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor movement with lag
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHidden = true;

    const onMouseMove = (e) => {
      const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (!isDesktop) return;

      if (isHidden) {
        cursor.style.opacity = '1';
        isHidden = false;
      }
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      isHidden = true;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const updateCursor = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(updateCursor);
    };

    const animId = requestAnimationFrame(updateCursor);

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.services__row') ||
        target.classList.contains('services__row') ||
        target.classList.contains('navbar__menu') ||
        target.closest('.navbar__menu');

      if (isInteractive) {
        cursor.classList.add('custom-cursor--hovered');
      } else {
        cursor.classList.remove('custom-cursor--hovered');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {loading && (
        <div className={`loader-screen${fadeOut ? ' loader-screen--fade-out' : ''}`}>
          <div className="loader-logo">Elementum</div>
        </div>
      )}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div id="custom-cursor" className="custom-cursor" />
      
      <button
        className={`scroll-to-top${showScrollTop ? ' scroll-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <div className="app">
        <Navbar />
        <main>
          <Hero />
          
          {/* Smooth wave divider: Hero to Tomorrow */}
          <div className="wave-divider wave-divider--to-tomorrow" aria-hidden="true">
            <svg viewBox="0 0 1440 74" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 C240,60 480,60 720,20 C960,-20 1200,-20 1440,20 L1440,74 L0,74 Z" fill="var(--color-pink)"/>
            </svg>
          </div>

          <Tomorrow />
          <HelpProgress />
          <Services />
          <Testimonials />
          <Newsletter />
          
          {/* Smooth wave divider: Newsletter to Footer */}
          <div className="wave-divider wave-divider--to-footer" aria-hidden="true">
            <svg viewBox="0 0 1440 74" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 C360,50 720,50 1080,0 L1440,40 L1440,74 L0,74 Z" fill="currentColor"/>
            </svg>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
