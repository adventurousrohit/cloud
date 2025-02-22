import Link from "next/link";

const EnterpriseServer = () => {
  return (
    <>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="bg-dark px-sm-10 px-6 pt-80 pb-80 rounded-3">
                    <div className="pb-40">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                    <h2 className="h4 text-white mb-3">Enterprise Class Servers</h2>
                                    <p className="text-white max-text-60 mx-auto mb-0 text-opacity-75">Our global data centers
                                        mean you can host
                                        precisely where
                                        you need. Choose an provider and positively impact the environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="px-5 py-7 rounded-3 side-blog-item transition">
                                <img src="/img/e-server-1.png" alt="image" className="img-fluid mb-3"/>
                                <h6 className="text-white mb-3">Fast Environment Provisioning</h6>
                                <p className="text-white mb-0 text-opacity-75">Staging environment, managing backups, vertical
                                    scaling,
                                    or
                                    installing free SSL; every work done in less time.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                            <div className="px-5 py-7 rounded-3 side-blog-item transition bg-white bg-opacity-5">
                                <img src="/img/e-server-2.png" alt="image" className="img-fluid mb-3"/>
                                <h6 className="text-white mb-3">Continue Maintenance Services</h6>
                                <p className="text-white mb-0 text-opacity-75">Staging environment, managing backups, vertical
                                    scaling,
                                    or
                                    installing free SSL; every work done in less time.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                            <div className="px-5 py-7 rounded-3 side-blog-item transition"/>
                                <img src="/img/e-server-2.png" alt="image" className="img-fluid mb-3"/>
                                <h6 className="text-white mb-3">High Availability Infrastructure</h6>
                                <p className="text-white mb-0 text-opacity-75">Staging environment, managing backups, vertical
                                    scaling,
                                    or
                                    installing free SSL; every work done in less time.</p>
                            </div>
                        </div>
                        <div className="pt-40 text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <Link href="/" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="btn-arrow__text">
                                Deploy
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

export default EnterpriseServer
