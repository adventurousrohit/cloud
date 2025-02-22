
const WordpressHostingBrand = () => {
    const brandLogos = [
        { src: "/img/hero-logo-1-dark.png", alt: "Brand 1", delay: 300 },
        { src: "/img/hero-logo-3-dark.png", alt: "Brand 2", delay: 400 },
        { src: "/img/hero-logo-2-dark.png", alt: "Brand 3", delay: 500 },
        { src: "/img/hero-logo-3-dark.png", alt: "Brand 4", delay: 600 },
        { src: "/img/hero-logo-4-dark.png", alt: "Brand 5", delay: 700 },
        { src: "/img/hero-logo-2-dark.png", alt: "Brand 6", delay: 800 },
      ];
  return (
    <>
        <div className="pt-120 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <p
              className="mb-6 fw-bold text-center"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              See how over 7,700+ Customers{' '}
              <a href="#" className="text-decoration-none">Help the world work</a>
            </p>
            <div className="d-flex justify-content-center align-items-center gap-6 flex-wrap flex-lg-nowrap">
              {brandLogos.map((logo, index) =>   <a key={index}
      href="#"
      className="d-inline-block"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay={logo.delay}
      data-sal-easing="ease-in-out-sine"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="img-fluid transition opacity-50 brand-img"
      />
    </a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default WordpressHostingBrand
