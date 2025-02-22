import Link from "next/link";

const WebHostingCta = () => {
  return (
    <>
      <div className="container">
        <div className="bg-dark pt-40 pb-40 px-8 px-md-14 rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
            <div className="row align-items-center g-4">
                <div className="col-xxl-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <img src="/img/cta-2-img.png" alt="image" className="img-fluid"/>
                </div>
                <div className="col-xxl-6 col-xl-8">
                    <h2 className="text-white mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Quality Hosting Service
                        Free 24/7 Support </h2>
                    <p className="text-white text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">With over two decades of experience in high-quality, secure web
                        hosting HostCity is the strategic partner for your online journey.</p>
                    <div className="mt-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded">
                            <span className="d-inline-block me-1 flex-shrink-0">
                                <i className="las la-comments"></i>
                            </span>
                            <span className="btn-arrow__text">
                                Live Chat Now
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default WebHostingCta
