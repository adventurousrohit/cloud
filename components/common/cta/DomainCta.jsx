import Link from "next/link";

const DomainCta = () => {
  return (
    <>
      <div className="container mb-10">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div
              className="text-center"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <h2 className="mb-4">
                Get Your Perfect Domain Registration Today
              </h2>
              <p
                className="mb-8 max-text-56 mx-auto"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Secure your brand’s online identity with a custom domain. Easy
                registration, fast setup, and reliable service to kickstart your
                digital presence today!
              </p>
              <Link
                href="/price"
                className="btn btn-lg btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded"
              >
                <span className="btn-arrow__text">
                  View Plan
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainCta;
