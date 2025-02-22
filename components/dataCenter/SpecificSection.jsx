import Link from "next/link";
const EcommerceHostingNoIncreased = () => {
  return (
    <>
      <div className="pt-10 pb-10">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 " data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <img src="/img/Cloud-security.jpg" alt="image" className="img-fluid rounded-4" style={{ height: '350px', width: '100%' }} />
            </div>
            <div className="col-lg-7">
              <div className="ps-xl-12">
                <h3 className="mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Your Data, Your Power – Secure It with Cloudminister’s Expertise
                </h3>
                <p className="mb-6 " data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Protect your data with Cloudminister’s expert solutions. Secure, backup, and recover seamlessly—because your data is your power, and we help you safeguard it.{' '}
               
                </p>
                <Link href="/cyber-security/" class="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded">
                    <span class="d-inline-block btn-arrow__text">
                    Learn More
                      <span class="btn-arrow__icon">
                        <i class="las la-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceHostingNoIncreased;
