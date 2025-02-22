const pricingData = [
    {
      id: 1,
      imgSrc: "/img/price-list-img-3.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 2,
      imgSrc: "/img/price-list-img-2.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 3,
      imgSrc: "/img/price-list-img-3.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 4,
      imgSrc: "/img/price-list-img-4.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 5,
      imgSrc: "/img/price-list-img-5.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 6,
      imgSrc: "/img/price-list-img-6.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 7,
      imgSrc: "/img/price-list-img-7.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
    {
      id: 8,
      imgSrc: "/img/price-list-img-8.png",
      description: "Build trust with the best-known domain names",
      originalPrice: "$15.99",
      discountedPrice: "$15.99",
      currentPrice: "$18.30",
    },
  ];
const TransferDomainSearchPrice = () => {
  return (
    <>
       <div className="container pb-120">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-6">
                    <div className="text-center pb-60" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="d-block fw-semibold text-primary">
                            Pricing list
                        </span>
                        <h2 className="mb-0">
                            Pricing list
                        </h2>
                    </div>
                </div>
            </div>
            <section className="row g-4">
      {pricingData.map((item) => (
        <div
          key={item.id}
          className="col-md-6 col-lg-4 col-xl-3"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <div className="card">
            <div className="card-body p-xl-6">
              <div className="mb-4">
                <img
                  src={item.imgSrc}
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <p className="mb-6 fs-14">
                {item.description}
              </p>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="d-inline-block text-decoration-line-through fs-14">
                  {item.originalPrice}
                </span>
                <span
                  className="d-inline-block bg-primary-subtle text-primary-emphasis fs-14 py-1 px-4 rounded-pill"
                >
                  {item.discountedPrice}
                </span>
              </div>
              <h3 className="mt-4 mb-4">
                <sup className="fw-normal fs-14">$</sup>
                {item.currentPrice.split('.')[0]}
                <span className="fs-24">
                  .{item.currentPrice.split('.')[1]}
                </span>
                <span className="fs-14 text-body fw-medium"> /year</span>
              </h3>
              <a
                href="#"
                className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded w-100"
              >
                <span className="btn-arrow__text">
                  Register
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
            <div className="pt-60" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h6 className="fs-18 text-center">
                            Free Setup & Installation*
                        </h6>
                        <p className="mb-0 text-center">
                            Need help? We will set up and install your SSL
                            certificate free of charge!*
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="fs-18 text-center">
                            Best in Class Encryption
                        </h6>
                        <p className="mb-0 text-center">
                            Need help? We will set up and install your SSL
                            certificate free of charge!*
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="fs-18 text-center">
                            24x7 Support
                        </h6>
                        <p className="mb-0 text-center">
                            Need help? We will set up and install your SSL
                            certificate free of charge!*
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default TransferDomainSearchPrice
