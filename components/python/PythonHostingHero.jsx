import Link from "next/link";

const VpsHostingHero = () => {
  return (
    <>
       <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row g-4 align-items-lg-center">
                <div className="col-lg-7 col-xl-6">
                    <h4 className="mb-4 text-white">
                        Get Started with  <span className="text-success-new">Python Hosting</span>{" "}: Flexible Plans & Pricing     
                    </h4>
                    <p className="max-text-52 mb-6 fw-medium text-white">
                    Enjoy smooth Python hosting with high speeds, scalable cloud options, and strong security. CluodMinister hosting services are ideal for developers in India because they guarantee that your Python programs execute smoothly with unparalleled dependability and round-the-clock 24/7 professional assistance.
                    </p>
                    {/* <p className="mb-8 text-white">
                        Starting <a href="#" className="text-decoration-none fw-bold text-success-new">at ₹ 40,000.00</a>
                    </p> */}
                    <div className="hstack gap-4 flex-wrap">
                        <a href="https://manage.cloudminister.com/store/managed-cloud-windows-vps-india/win-vps-in-4?_gl=1*qcnhi7*_gcl_au*MTIzMTAyNzY3MS4xNzM5NTMwODUz*_ga*MTA1NDQyNDQ2Ni4xNzM5NTMwODU0*_ga_7D8KRKVGXR*MTczOTg2NTI2Mi45LjEuMTczOTg2NTkyMi4wLjAuMA.." target="_blank" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
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
