import { Link } from 'react-router-dom';

const VpsHostingHero = () => {
  return (
    <>
      <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
          <div className="row g-4 align-items-lg-center mb-20">
            <div className="col-lg-7 col-xl-6">
              <h1 className="mb-4 text-white">
                <span className="text-success-new">Linux VPS Hosting : </span> The Ultimate Choice for Speed, Flexibility, and Security
              </h1>
              <p className="max-text-52 mb-6 fw-medium text-white">
                Linux VPS Hosting You Can Trust! Boost your website’s performance with our premium Linux VPS servers built for businesses ready to succeed.
              </p>

              <div className="d-flex align-items-center gap-5 flex-wrap" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <a
                  href="https://manage.cloudminister.com/store/cloud-vps-india-new/cloud-vps-in-32"
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                  target="_blank"
                >
                  <span className="btn-arrow__text">
                    Get Started
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
                <h4 className="text-white mb-0">
                  60% OFF <small style={{ fontSize: '15px' }}>/On 5 Year Billing</small>
                </h4>
                <ul className="list-unstyled m-0 p-0">
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                      <i className="las la-check"></i>
                    </span>
                    <span className="d-block text-white  fs-14">
                      Easy Setup<span className="d-inline-block config-info-1"></span>
                    </span>
                  </li>

                  <li className="d-flex align-items-center gap-2 mb-3">
                    <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                      <i className="las la-check"></i>
                    </span>
                    <span className="d-block text-white  fs-14">
                      <span className="d-inline-block config-info-2"></span>
                      24/7 Expert Support
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                      <i className="las la-check"></i>
                    </span>
                    <span className="d-block text-white  fs-14">
                      <span className="d-inline-block config-info-3"></span>
                      Dedicated CPU and RAM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                      <i className="las la-check"></i>
                    </span>
                    <span className="d-block text-white  fs-14">
                      <span className="d-inline-block config-info-3"></span>
                      NVME SSD storage
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                      <i className="las la-check"></i>
                    </span>
                    <span className="d-block text-white  fs-14">
                      <span className="d-inline-block config-info-3"></span>
                      Root Access
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="text-center">
                <img src="/img/Offers page image.png" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VpsHostingHero;
