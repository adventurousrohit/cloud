import Link from "next/link";

const ControlPanelHero = () => {
  return (
    <>
      <section className="banner-bg bg-dark control-panel-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <span className="fs-18 fw-semibold text-primary mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Best Control Panel</span>
                    <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Powerful, yet User-Friendly Control Panel</h1>
                    <p className="mb-6 text-white max-text-60 text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        With worldwide annual spend on digital advertising surpassing $325 billion, it’s no ache's to online marketing are becoming available.
                    </p>
                    <Link href="/" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="btn-arrow__text">
                            See Demo
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-end mt-10" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="d-inline-flex align-items-center gap-4 flex-wrap pb-10">
                            <img src="/img/control-user.png" alt="image" className="img-fluid"/>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/img/trustpilot.png" alt="image" className="img-fluid"/>
                                    <span className="text-white fs-18 fw-bold">4.7/5</span>
                                </div>
                                <p className="mb-0 text-white">Reviewed by more than <span className="text-warning fw-bold">200K
                                        Users</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ControlPanelHero
