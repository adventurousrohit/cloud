import Link from "next/link";

const FeatureList = ({title,des,img}) => {
  return (
    <>
      <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <span className="d-inline-block fs-18 fw-semibold text-primary mb-2" data-sal="slide-up"
                            data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Featured list
                        </span>
                        <h2 className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Feature-Rich Reseller Hosting
                        </h2>
                        <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Transferring your domain is a straightforward process that typically involves verifying your
                            domain ownership, entering the EPP code,
                        </p>
                        <p className="mb-8" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Approving the transfer. Once the transfer is initiated, it may take a few days to complete. If
                            you encounter any issues, our support team is available to assist you.
                        </p>
                        <Link href="/price" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="btn-arrow__text">
                                Pricing Plan
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src={img} alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-md-6 p-xl-8">
                            <div className="mb-8">
                                <img src="/img/icon-feat-1.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6 className="mb-4">
                                Private Nameservers
                            </h6>
                            <p className="mb-0">
                                Use your own private and custom DNS nameservers to remain anonymous and look like you’re the
                                boss!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-md-6 p-xl-8">
                            <div className="mb-8">
                                <img src="/img/icon-feat-2.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6 className="mb-4">
                                Free Billing Software
                            </h6>
                            <p className="mb-0">
                                Automate your web hosting business with WHMCS or Blesta. Quickly get started without coding
                                skills required.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-md-6 p-xl-8">
                            <div className="mb-8">
                                <img src="/img/icon-feat-3.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6 className="mb-4">
                                100% White Labeled
                            </h6>
                            <p className="mb-0">
                                Offer hosting under your own brand name but let us handle all of the server maintenance and
                                management.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-md-6 p-xl-8">
                            <div className="mb-8">
                                <img src="/img/icon-feat-4.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6 className="mb-4">
                                Cloud Infrastructure
                            </h6>
                            <p className="mb-0">
                                Fast, reliable, and secure. Our cloud-powered hosting plans are great for businesses of all
                                sizes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-md-6 p-xl-8">
                            <div className="mb-8">
                                <img src="/img/icon-feat-5.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6 className="mb-4">
                                Effortless WordPress Management
                            </h6>
                            <p className="mb-0">
                                Fast, reliable, and secure. Our cloud-powered hosting plans are great for businesses of all
                                sizes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-md-6 p-xl-8">
                            <div className="mb-8">
                                <img src="/img/icon-feat-6.png" alt="image" className="img-fluid"/>
                            </div>
                            <h6 className="mb-4">
                                Reliable Email Service
                            </h6>
                            <p className="mb-0">
                                Fast, reliable, and secure. Our cloud-powered hosting plans are great for businesses of all
                                sizes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default FeatureList
