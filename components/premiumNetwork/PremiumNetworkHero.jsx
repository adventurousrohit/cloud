import Link from "next/link";

const PremiumNetworkHero = () => {
  return (
    <>
         <section className="banner bg-dark premium-network">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-8">
                    <div className="text-center">
                        <span className="fs-18 fw-bold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                            data-sal-delay="300" data-sal-easing="ease-in-out-sine">Premium Network</span>
                        <h1 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">High bandwidth Network
                            low-latency Delivery</h1>
                        <p className="text-white mb-0 max-text-60 mx-auto text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Consistently low
                            latency
                            times and zero packet
                            loss are the results of overprovisioned 
                            150+ Tbps network, real‑time network monitoring.</p>
                        <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap mt-8" data-sal="slide-up" data-sal-duration="700" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <Link href="/price" className="btn btn-primary btn-arrow btn-lg fs-14 fw-semibold rounded transition">
                                <span className="btn-arrow__text">
                                    Test Performance
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
    </section>
    </>
  )
};

export default PremiumNetworkHero
