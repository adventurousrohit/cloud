import Link from "next/link";

const WebHostingModernHero = () => {
  return (
    <>
        <section className="bg-warning-2 pt-60 pb-60">
        <div className="px-8">
            <div className="home-9-hero pt-120 pb-120 px-2 rounded-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                                <img src="/img/shape/home-9-user.png" alt="image" className="img-fluid"/>
                                <h5 className="text-white fs-16 fw-normal">Trusted by over <span className="text-warning fw-semibold">+20k Hosting</span> <br/> <span className="fw-semibold">Users Connected</span></h5>
                            </div>
                            <h1 className="text-white mb-4">Top Notch <br/>
                                Domain & Hosting <br/> <span className="text-warning">Solutions</span></h1>
                           <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-5">
                                <span className="btn-arrow__text fw-bold text-black">
                                    Sign up - Free Trial
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-end d-none d-sm-block">
                        <img src="/img/shape/hero-arrow-11.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default WebHostingModernHero
