import { Link } from 'react-router-dom';
const CloudHostingFooter = () => {
  return (
    <>
       <footer className="footer-5">
      <div className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hstack justify-content-lg-end gap-2 flex-wrap">
                <img src="/img/pg-1.png" alt="Partner 1" className="img-fluid" />
                <img src="/img/pg-2.png" alt="Partner 2" className="img-fluid" />
                <img src="/img/pg-3.png" alt="Partner 3" className="img-fluid" />
                <img src="/img/pg-4.png" alt="Partner 4" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <img src="/img/cloudlogo-footer.webp" alt="Logo" className="logo__img" />
              <p className="text-white text-opacity-75 mt-8">
                Whether you run an e-commerce site or a web business, you want to attract as many visitors as possible.
              </p>
              <h6 className="text-white mt-6 mb-4 fs-16">Social Media</h6>
              <div className="d-inline-flex align-items-center justify-content-center gap-2">
                <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-light border-opacity-10">
                  <span className="text-white"><i className="lab la-twitter"></i></span>
                </a>
                <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-light border-opacity-10">
                  <span className="text-white"><i className="lab la-facebook-f"></i></span>
                </a>
                <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-light border-opacity-10">
                  <span className="text-white"><i className="lab la-dribbble"></i></span>
                </a>
                <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-light border-opacity-10">
                  <span className="text-white"><i className="lab la-behance"></i></span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ps-xl-10">
                <h6 className="text-white fs-16 mt-3 mb-8">Product & Solutions</h6>
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link href="/shared-hosting/" className="footer-2-link">Shared Hosting</Link></li>
                  <li><Link href="/wordpres-hosting" className="footer-2-link">WordPress Hosting</Link></li>
                  <li><Link href="/vps-hosting/" className="footer-2-link">VPS Hosting</Link></li>
                  <li><Link href="/cloud-hosting/" className="footer-2-link">Cloud Servers</Link></li>
                  <li><Link href="/dedicated-server/" className="footer-2-link">Dedicated Servers</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ps-xl-5">
                <h6 className="text-white fs-16 mt-3 mb-8">Hostcity Feature</h6>
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link href="/data-center" className="footer-2-link">Data Center</Link></li>
                  <li><Link href="/control-panel" className="footer-2-link">Control Panel</Link></li>
                  <li><Link href="/operating-system" className="footer-2-link">Operating System</Link></li>
                  <li><Link href="/blog" className="footer-2-link">Uptime Guarantee</Link></li>
                  <li><Link href="/blog" className="footer-2-link">DDOS Protection</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="ps-xl-5">
                <h6 className="text-white fs-16 mt-3 mb-8">Company Info</h6>
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link href="/about-us" className="footer-2-link">About Us</Link></li>
                  <li><Link href="/ddos" className="footer-2-link">Partners</Link></li>
                  <li><Link href="/ddos" className="footer-2-link">Knowledgebase</Link></li>
                  <li><Link href="/contact/" className="footer-2-link">Contact Us</Link></li>
                  <li><Link href="/blog" className="footer-2-link">News</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <p className="mb-0 fs-14">&copy; 2024 HostingGard. All rights reserved</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-4 flex-wrap">
                <Link href="/terms" className="footer-2-link">Terms & Condition</Link>
                <Link href="/privacy" className="footer-2-link">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
};

export default CloudHostingFooter
