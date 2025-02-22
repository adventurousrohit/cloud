import { Link } from 'react-router-dom';

const ModernHomeFooter = () => {
  return (
    <>
       <section className="pt-120 gradient-bg-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <h2 className="text-white mb-4">Subscribe Our Newsletter</h2>
              <p className="text-white mb-6">
                Subscribe to our newsletter stay updated with the latest news, exclusive offers & exciting updates
                delivered right to your inbox!
              </p>
            </div>
            <form className="domain-form-one mx-auto position-relative mt-8">
              <input
                type="text"
                className="form-control bg-white p-4 border-0 text-black"
                placeholder="Subscribe for update"
              />
              <div className="domain-submit-box d-flex align-items-center gap-3 position-absolute">
                <button className="btn btn-warning rounded-2 fw-bold" type="submit">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-white px-10 py-16 rounded-4">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src="/img/logo-dark.png" alt="image" className="logo__img" />
                <p className="text-black text-opacity-75 mt-8">
                  Whether you run an e-commerce site or a web business, you want to attract as many visitors as possible.
                </p>
                <h6 className="text-black mt-6 mb-4 fs-16">Social Media</h6>
                <div className="d-inline-flex align-items-center justify-content-center gap-2">
                  <Link
                    href="#"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-dark border-opacity-10"
                  >
                    <span className="text-body">
                      <i className="lab la-twitter"></i>
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-dark border-opacity-10"
                  >
                    <span className="text-body">
                      <i className="lab la-facebook-f"></i>
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-dark border-opacity-10"
                  >
                    <span className="text-body">
                      <i className="lab la-dribbble"></i>
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border border-dark border-opacity-10"
                  >
                    <span className="text-body">
                      <i className="lab la-behance"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ps-xl-10">
                  <h6 className="text-black fs-16 mt-3 mb-8">Product &amp; Solutions</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    <li>
                      <Link href="/shared-hosting/" className="footer-2-link text-black">
                        Shared Hosting
                      </Link>
                    </li>
                    <li>
                      <Link href="/wordpres-hosting" className="footer-2-link text-black">
                        WordPress Hosting
                      </Link>
                    </li>
                    <li>
                      <Link href="/vps-hosting/" className="footer-2-link text-black">
                        VPS Hosting
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="footer-2-link text-black">
                        Cloud Servers
                      </Link>
                    </li>
                    <li>
                      <Link href="/dedicated-server/" className="footer-2-link text-black">
                        Dedicated Servers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ps-xl-5">
                  <h6 className="text-black fs-16 mt-3 mb-8">Hostcity Feature</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    <li>
                      <Link href="/" className="footer-2-link text-black">
                        Data Center
                      </Link>
                    </li>
                    <li>
                      <Link href="/control-panel" className="footer-2-link text-black">
                        Control Panel
                      </Link>
                    </li>
                    <li>
                      <Link href="/operating-system" className="footer-2-link text-black">
                        Operating System
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="footer-2-link text-black">
                        Uptime Guarantee
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="footer-2-link text-black">
                        DDOS Protection
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="ps-xl-5">
                  <h6 className="text-black fs-16 mt-3 mb-8">Company Info</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    <li>
                      <Link href="/about-us" className="footer-2-link text-black">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-2-link text-black">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="footer-2-link text-black">
                        Knowledgebase
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-2-link text-black">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="footer-2-link text-black">
                        News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 d-flex align-items-center justify-content-center justify-content-lg-between gap-5 flex-wrap flex-lg-nowrap">
          <p className="text-white mb-0">© 2022 Hostingard. All rights reserved</p>
          <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-4 flex-wrap flex-md-nowrap">
            <p className="text-white fw-semibold mb-0">We Accept Payment Gateway </p>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <img src="/img/shape/payment-8-1.png" alt="image" className="img-fluid" />
              <img src="/img/shape/payment-8-2.png" alt="image" className="img-fluid" />
              <img src="/img/shape/payment-8-3.png" alt="image" className="img-fluid" />
              <img src="/img/shape/payment-8-4.png" alt="image" className="img-fluid" />
              <img src="/img/shape/payment-8-5.png" alt="image" className="img-fluid" />
              <img src="/img/shape/payment-8-6.png" alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default ModernHomeFooter
