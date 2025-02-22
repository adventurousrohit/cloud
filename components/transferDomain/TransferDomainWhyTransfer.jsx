import { Link } from 'react-router-dom';

const TransferDomainWhyTransfer = () => {
  return (
    <>
      <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <span className="d-inline-block fs-18 fw-semibold text-primary mb-2" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Technology Overview
                </span>
                <h2 className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Why Choose CloudMinister for Transfer Domain?
                </h2>
                <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Choose CloudMinister for a painless domain transfer experience. With our team of experts, quick, secure, and headache-free transitions ensure zero downtime.
                </p>
                <p className="mb-8" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Enjoy 24/7 support, competitive pricing, and security measures designed specifically to protect your domain. CloudMinister allows you to step back and leave the technical aspects to
                  us. Switch today!
                </p>
                {/* <Link
                  href=""
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span className="btn-arrow__text">
                    Pricing Plan
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </Link> */}
              </div>
              <div className="col-lg-6">
                <div className="text-center">
                  <img src="/img/why-transfer-img.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <div className="card">
                <div className="card-body p-xl-8">
                  <div className="hstack gap-3 mb-4">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/requirements.png" alt="Simple management" className="img-fluid" />
                    </span>
                    <h6 className="mb-0 flex-grow-1">Simple Management</h6>
                  </div>
                  <p className="mb-0">
                    It's not difficult to transfer domain names. It's also easy to manage them, too. Cloudminister's checkout and the Account Panel are free of clutter and upsells, making managing
                    domains simple and allowing you to focus on the important things.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
              <div className="card">
                <div className="card-body p-xl-8">
                  <div className="hstack gap-3 mb-4">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/support.png" alt="24*7/365 Support available" className="img-fluid"  style={{width:"64px",height:"64px"}}/>
                    </span>
                    <h6 className="mb-0 flex-grow-1">24*7/365 Support Available</h6>
                  </div>
                  <p className="mb-0">
                    Transferring a domain from one registry has never been more simple! Receive assistance and advice from our experts at the Help Center anytime you require it. It includes support
                    for the Concierge throughout the process of transferring.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
              <div className="card h-100">
                <div className="card-body p-xl-8">
                  <div className="hstack gap-3 mb-4">
                    <span className="d-inline-block flex-shrink-0">
                      <img src="/img/logical-thinking.png" alt="No tech skills required" className="img-fluid" />
                    </span>
                    <h6 className="mb-0 flex-grow-1">No Tech Skills Required</h6>
                  </div>
                  <p className="mb-0">
                    The transfer process is automated, rapid, and secure, so you'll get up and running in no time. Transferring your domain generally takes place behind the scenes, giving you more
                    time to focus on your next great idea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferDomainWhyTransfer;
