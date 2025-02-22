import Link from "next/link";

const VpsHostingHero = () => {
  return (
    <>
       <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row g-4 align-items-lg-center">
                <div className="col-lg-7 col-xl-6">
                    <h4 className="mb-4 text-white">
                        Trade Smarter, Faster, and Safer with <span className="text-success-new"> Forex VPS</span> Hosting
                    </h4>
                    <p className="max-text-52 mb-6 fw-medium text-white">
                    Get ahead in your trading game with our Forex VPS Hosting service, which is meant to give you an edge in the fast-paced Forex markets. Experience lightning-fast execution, minimal latency, and unrivaled uptime, ensuring that your trades are executed at the perfect moment.
                    </p>
                    {/* <p className="mb-8 text-white">
                        Starting <a href="#" className="text-decoration-none fw-bold text-success-new">at ₹ 40,000.00</a>
                    </p> */}
                    <div className="hstack gap-4 flex-wrap">
                        <a href="https://manage.cloudminister.com/store/managed-cloud-windows-vps-india/win-vps-in-4" target="_blank" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                       
                    </div>   
                </div>
                <div className="col-lg-5 col-xl-6">
                    <div className="text-center">
                        <img src="/img/vps.webp" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default VpsHostingHero
