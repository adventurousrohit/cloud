import Link from "next/link";

const SolusvmNoIncreased = () => {
  return (
    <>
       <div className="pt-60 pb-10">
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <img src="/server-managemnt-middle-image/SolusVM-Support.png" alt="SolusVM Support" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-8 pe-xxl-12">
                            <span className="d-block mb-2 text-primary fs-18 fw-semibold" data-sal="slide-up"
                                data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                              Power your site, and we’ll manage the rest!
                            </span>
                            <h2 className="mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Your Trusted Server Management Company for SolusVM Server Management
                            </h2>
                            <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Simplify your VPS hosting with our expert SolusVM server management services. As a trusted server management company, CloudMinister ensures seamless setup, maintenance, and optimization of your SolusVM infrastructure. Experience enhanced performance, security, and reliability with our tailored solutions designed to support your hosting needs effortlessly.
                            </p>
                            {/* <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                Our Web Hosting plans to meet the Loading Speed requirements of every website
                                out-of-the-box. Of course, that is not always optimal due to the website optimization for
                                every website that we host.
                            </p> */}
                            <a  href="https://wa.me/+918233040013"
                    target="_blank" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded mt-5">
                                <span className="btn-arrow__text">
                                 Order Solusvm Server Management
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
  )
};

export default SolusvmNoIncreased
