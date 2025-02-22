import Link from "next/link";

const VpsHostingHero = () => {
  return (
    <>
       <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row g-4 align-items-lg-center">
                <div className="col-lg-7 col-xl-6">
                    <h4 className="mb-4 text-white">
                        
                        Ready for the World with One-Click Hosting – <span className="text-success-new"> ReactJS Web Hosting</span>
                   
                    </h4>
                    <p className="max-text-52 mb-6 fw-medium text-white">
                    Our ReactJS cloud servers, developed for developers, guarantee high performance so you can focus on creating amazing apps while we take care of the grunt work. 
                    </p>
                    {/* <p className="mb-8 text-white">
                        Starting <a href="#" className="text-decoration-none fw-bold text-success-new">at ₹ 40,000.00</a>
                    </p> */}
                    <div className="hstack gap-4 flex-wrap">
                        <a href="https://manage.cloudminister.com/store/managed-cloud-windows-vps-india/win-vps-in-4?_gl=1*w8zpjt*_gcl_au*MTIzMTAyNzY3MS4xNzM5NTMwODUz*_ga*MTA1NDQyNDQ2Ni4xNzM5NTMwODU0*_ga_7D8KRKVGXR*MTczOTg2NTI2Mi45LjEuMTczOTg2NTc1My4wLjAuMA.." target="_blank" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                            <span className="btn-arrow__text">
                                Get Started
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                    </div>
                    {/* <ul className="list-unstyled p-0 d-flex flex-xl-column align-items-center flex-wrap gap-3 mt-8 mt-xl-0 vertical-social-media">
                        <li>
                            <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                                <i className="lab la-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                                <i className="lab la-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                                <i className="lab la-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-inline-block text-body hover:text-primary fs-24 transition">
                                <i className="lab la-discord"></i>
                            </a>
                        </li>
                        <li>
                            <span
                                className="vertical-social-media__text d-inline-flex align-items-center gap-2 fw-semibold">Follow
                                on <span className="vertical-social-media__text-stroke"></span> </span>
                        </li>
                    </ul> */}
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
