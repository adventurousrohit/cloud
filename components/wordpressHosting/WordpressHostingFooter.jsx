import { Link } from 'react-router-dom';
const WordpressHostingFooter = () => {
  return (
    <>
       <footer className="footer-4 pb-5 bg-gray-900 position-relative z-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Link href="#" className="logo mb-10">
                            <img src="/img/logo-light.png" alt="logo" className="logo__img" />
                        </Link>
                        <p className="text-white text-opacity-75">
                            Whether you run an e-commerce site or a web business, you want to attract as many visitors as s or for when you no longer want to be limited by
                        </p>
                        <h6 className="text-white mt-6 mb-4 fs-16">We Accepted </h6>
                        <div className="d-inline-flex align-items-center justify-content-center gap-2">
                            <Link href="#" className="social-icon w-9 h-9 d-grid place-content-center rounded-circle border border-light border-opacity-10 text-white text-decoration-none">
                                <i className="lab la-twitter"></i>
                            </Link>
                            <Link href="#" className="social-icon w-9 h-9 d-grid place-content-center rounded-circle border border-light border-opacity-10 text-white text-decoration-none">
                                <i className="lab la-facebook-f"></i>
                            </Link>
                            <Link href="#" className="social-icon w-9 h-9 d-grid place-content-center rounded-circle border border-light border-opacity-10 text-white text-decoration-none">
                                <i className="lab la-dribbble"></i>
                            </Link>
                            <Link href="#" className="social-icon w-9 h-9 d-grid place-content-center rounded-circle border border-light border-opacity-10 text-white text-decoration-none">
                                <i className="lab la-behance"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ps-xl-10">
                            <h6 className="text-white fs-16 mt-3 mb-11">Product & Solutions</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link href="/shared-hosting/" className="footer-2-link">Shared Hosting</Link></li>
                                <li><Link href="/wordpress-hosting" className="footer-2-link">WordPress Hosting</Link></li>
                                <li><Link href="/vps-hosting/" className="footer-2-link">VPS Hosting</Link></li>
                                <li><Link href="/cloud-hosting/" className="footer-2-link">Cloud Servers</Link></li>
                                <li><Link href="/dedicated-server/" className="footer-2-link">Dedicated Servers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ps-xl-5">
                            <h6 className="text-white fs-16 mt-3 mb-11">Hostcity Feature</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link href="/data-center" className="footer-2-link">Data Center</Link></li>
                                <li><Link href="/control-panel" className="footer-2-link">Control Panel</Link></li>
                                <li><Link href="/operating-system" className="footer-2-link">Operating System</Link></li>
                                <li><Link href="/blog" className="footer-2-link">Uptime Guarantee</Link></li>
                                <li><Link href="/ddos" className="footer-2-link">DDOS Protection</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="ps-xl-5">
                            <h6 className="text-white fs-16 mt-3 mb-11">Company Info</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link href="/about-us" className="footer-2-link">About Us</Link></li>
                                <li><Link href="/blog" className="footer-2-link">Partners</Link></li>
                                <li><Link href="/blog" className="footer-2-link">Knowledgebase</Link></li>
                                <li><Link href="/contact/" className="footer-2-link">Contact Us</Link></li>
                                <li><Link href="/blog" className="footer-2-link">News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 pt-5 border-top border-light border-opacity-10">
                        <p className="text-white mb-0 fs-14">&copy; 2024 HostingGard. All rights reserved</p>
                        <div className="d-inline-flex align-items-center justify-content-center gap-4 flex-wrap">
                            <Link href="/terms" className="footer-2-link">Terms & Condition</Link>
                            <Link href="/privacy" className="footer-2-link">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
};

export default WordpressHostingFooter
