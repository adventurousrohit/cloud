
const GameHostingCta = () => {
  return (
    <>
        <div className="pt-60 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="game-cta-wrapper px-8 rounded-3 position-relative" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <img src="/img/game-cta.png" alt="image" className="img-fluid position-absolute bottom-0 start-0 d-none d-lg-block"/>
                            </div>
                            <div className="col-lg-7">
                                <div className="py-20">
                                    <h2 className="text-white mb-2">Manage your Server from
                                        Mobile Device</h2>
                                    <p className="text-white mb-8 max-text-56">Hostcity offers the largest worldwide network,
                                        enabling you to spin up and no matter where you or your customers may be!</p>
                                    <div className="d-flex align-items-center gap-5 flex-wrap">
                                        <a href="#" className="btn btn-primary d-flex align-items-center gap-2">
                                            <span className="d-inline-block flex-shrink-0">
                                                <img src="/img/g-play.png" alt="icon" className="img-fluid"/>
                                            </span>
                                            <span className="text-start">
                                                <span className="fs-10 d-block">Get it on</span>
                                            <span className="d-inline-block fw-bold">
                                                    Google Play
                                                </span>
                                            </span>
                                        </a>
                                        <a href="#" className="btn btn-light d-flex align-items-center gap-2">
                                            <span className="d-inline-block flex-shrink-0">
                                                <img src="/img/ios.png" alt="icon" className="img-fluid"/>
                                            </span>
                                            <span className="text-start">
                                                <span className="fs-10 d-block">Get it on</span>
                                            <span className="d-inline-block fw-bold">
                                                    App Store
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default GameHostingCta
