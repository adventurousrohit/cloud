import Link from "next/link";

const CpanelNoIncreased = () => {
  return (
    <>
      <div className="pt-60 pb-10">
        <div className="pb-60">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div
                className="col-lg-6"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <img
                  src="/Middle/Akamai Cloud (1).png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-8 pe-xxl-12">
                  <span
                    className="d-block mb-2 text-primary fs-18 fw-semibold"
                    data-sal="slide-up"
                    data-sal-duration="1500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                   Power your site, and we’ll manage the rest!
                  </span>
                  <h2
                    className="mb-6"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                  Akamai: Secure Cloud Computing Solutions for Businesses
                  </h2>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                   Experience the new generation of cloud hosting at Akamai, where innovation meets simplicity. Advanced management tools for smooth performance, unmatched scalability, and security on rock-solid ground ensure that the size of the business doesn't become a hurdle. From optimized workflows to global expansion, Akamai's leading solutions empower you to lead ahead in the digital landscape. Experience effortless and efficient cloud hosting today with Akamai!
                  </p>
                  <p
                    className="mb-0"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    {/* Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host. */}
                  </p>
                  <a
                    href="https://wa.me/+918233040013"
                    target="_blank"
                    className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5"
                  >
                    <span className="btn-arrow__text">
                    Talk to Akamai Cloud Expert
                      <span className="btn-arrow__icon">
                        <i className="las la-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CpanelNoIncreased;
