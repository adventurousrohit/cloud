const TransferDomainHero = () => {
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <span
                className="fs-18 fw-semibold text-primary mb-2"
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Transfer Your Domain to CloudMinister
              </span>
              <h1
                className="text-white mb-4"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Switch Domains with Confidence—CloudMinister Makes It Easy!
              </h1>
              <p
                className="mb-0 text-white max-text-72 text-opacity-75"
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Transfer your domain effortlessly with CloudMinister—reliable,
                secure, and fast service every time!
              </p>
            </div>
            <div className="col-lg-5 col-xl-6">
              <img
                src="/img/transfer-domain-banner-img.png"
                alt="image"
                className="img-fluid"
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransferDomainHero;
