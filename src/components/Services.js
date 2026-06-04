import './Services.css';

const services = [
  {
    label: 'Office of multiple interest content',
    name: 'Collaborative & partnership'
  },
  {
    label: 'The hanger US Air force digital experimental',
    name: 'We talk about our weight'
  },
  {
    label: 'Delta faucet content, social, digital',
    name: 'Piloting digital confidence'
  }
];

function ServiceRow({ label, name, num }) {
  return (
    <article className="services__row" data-animate="slide-left">
      <div className="services__ghost-num" aria-hidden="true">{num}</div>
      <p className="services__label">{label}</p>
      <h3 className="services__name">
        <span className="services__name-inner">{name}</span>
      </h3>
      <span className="services__arrow" aria-hidden="true">
        {'→'}
      </span>
    </article>
  );
}

function Services() {
  return (
    <section
      className="services section-shell"
      id="services"
      aria-label="Services section"
      data-animate="section"
    >
      <svg className="services__curve" viewBox="0 0 210 100" aria-hidden="true">
        <path
          d="M5 72C36 18 80 103 115 42C148 -14 172 79 205 20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="6"
        />
      </svg>
      <div className="services__heading-box">
        <h2 className="services__title">
          What we <span className="services__green">can</span> offer you!
        </h2>
      </div>
      <div className="services__list">
        {services.map((service, index) => (
          <ServiceRow
            label={service.label}
            name={service.name}
            num={index < 9 ? `0${index + 1}` : `${index + 1}`}
            key={service.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
