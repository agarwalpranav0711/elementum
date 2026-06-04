import './Testimonials.css';

const sidePhotos = [
  {
    src: 'https://randomuser.me/api/portraits/women/22.jpg',
    alt: 'Customer portrait from a nonprofit team',
    className: 'testimonials__photo testimonials__photo--one'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/15.jpg',
    alt: 'Customer portrait from a product studio',
    className: 'testimonials__photo testimonials__photo--two'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/36.jpg',
    alt: 'Customer portrait from a communications team',
    className: 'testimonials__photo testimonials__photo--three'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/41.jpg',
    alt: 'Customer portrait from a brand team',
    className: 'testimonials__photo testimonials__photo--four'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/59.jpg',
    alt: 'Customer portrait from a design organization',
    className: 'testimonials__photo testimonials__photo--five'
  }
];

function TestimonialCard({ quote, author, role }) {
  return (
    <article className="testimonials__card" data-animate="scale">
      <span className="testimonials__quote testimonials__quote--open" aria-hidden="true">
        “
      </span>
      <p className="testimonials__text">{quote}</p>
      <div className="testimonials__author">
        <strong>{author}</strong>
        <span>{role}</span>
      </div>
      <span className="testimonials__quote testimonials__quote--close" aria-hidden="true">
        ”
      </span>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="testimonials section-shell" aria-label="Testimonials section" data-animate="section">
      <h2 className="testimonials__title">
        What our customer says{' '}
        <span className="testimonials__marked">
          About Us
          <svg className="decorative-underline" viewBox="0 0 185 24" aria-hidden="true">
            <path
              d="M4 15C32 3 59 23 90 13C119 4 146 18 181 8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="5"
            />
          </svg>
        </span>
      </h2>
      {sidePhotos.map((photo) => (
        <img className={photo.className} src={photo.src} alt={photo.alt} key={photo.src} />
      ))}
      <div className="testimonials__stage">
        <TestimonialCard
          quote="Elementum gave our leadership team the language, visual system, and confidence to launch with clarity. The process felt rigorous, generous, and beautifully organized."
          author="Maya Stone"
          role="Founder, Northline Studio"
        />
        <img
          className="testimonials__featured"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Featured reviewer Maya Stone"
        />
      </div>
    </section>
  );
}

export default Testimonials;
