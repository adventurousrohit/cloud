import React from 'react';
import Link from 'next/link'; // For navigation, if using react-router
import { FaLocationDot } from 'react-icons/fa6';

const Footertwo = () => {
  return (
    <>
    <footer className="footer-2-area pt-120 pb-5  position-relative z-1 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-white ">
            <img src="/img/logodark.png" alt="Logo" className="logo__img" />
            <p className="text-white text-opacity-75 mt-8">Founded in 2017, aims to deliver the best cloud web hosting in India with high speed, high security, 99.99% uptime and 24x7 support.</p>

            <h6 className="text-white">Contact us</h6>
            <span className="">
              <Link  href="tel:+918447755312" className="text-decoration-none text-white text-opacity-75">
                <i className="las la-phone"></i> +91-8447755312
              </Link >
            </span>
            <br />
            <br />
            <span>
              <Link  href="mailto:sales@cloudminister.com" className="text-decoration-none footer-2-link fs-14">
                sales@cloudminister.com
              </Link >
            </span>
            <br />
            <span>
              <Link  href="mailto:support@cloudminister.com" className="text-decoration-none footer-2-link fs-14">
                support@cloudminister.com
              </Link >
            </span>
            <br />
            <br />
            <h6 className="mt-2 text-white">Follow Us</h6>
            <div className="d-inline-flex align-items-center justify-content-center gap-2 mt-2">
              <Link 
                href="https://www.instagram.com/cloudminister/"
                className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ee9408' }}
              >
                <span className="text-body">
                  <i className="lab la-instagram text-white"></i>
                </span>
              </Link >
              <Link 
                href="https://www.facebook.com/Cloudminitech"
                className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ee9408' }}
              >
                <span className="text-body">
                  <i className="lab la-facebook-f text-white"></i>
                </span>
              </Link >

              <Link 
                href="https://linkedin.com/company/cloudminitech"
                className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ee9408' }}
              >
                <span className="text-body">
                  <i className="lab la-linkedin text-white"></i>
                </span>
              </Link >
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-10">
              <h6 className="fs-16 mt-3 mb-10 text-white">Web Hosting</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 ">
                <li>
                  <Link href="/shared-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/linux-shared-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Linux Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/windows-shared-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Windows Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/reseller-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Reseller Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/linux-reseller-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Linux Reseller Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/windows-reseller-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Window Reseller Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/reactjs-hosting/" className="text-decoration-none footer-2-link fs-14">
                    ReactJS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/nodejs-hosting/" className="text-decoration-none footer-2-link fs-14">
                    NodeJS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/python-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Python Hosting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10 text-white">Cloud Hosting</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/cloud-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Cloud Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/amazon-cloud-hosting/" className="text-decoration-none footer-2-link fs-14">
                    AWS Cloud Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/google-cloud/-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Google Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/akamai-cloud/" className="text-decoration-none footer-2-link fs-14">
                    Akamai Cloud Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/microsoft-azure-cloud/" className="text-decoration-none footer-2-link fs-14">
                    Microsoft Azure
                  </Link>
                </li>
                <li>
                  <Link href="/gpu-server/" className="text-decoration-none footer-2-link fs-14">
                    GPU Cloud Server
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-5 text-white">Email Solutions</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/microsoft-office365/" className="text-decoration-none footer-2-link fs-14">
                    Microsoft Office 365
                  </Link>
                </li>
                <li>
                  <Link href="/google-workspace/" className="text-decoration-none footer-2-link fs-14">
                    Google Workspace
                  </Link>
                </li>
                <li>
                  <Link href="/Iot/" className="text-decoration-none footer-2-link fs-14">
                    Internet of Things
                  </Link>
                </li>
                <li>
                  <Link href="/cyber-security/" className="text-decoration-none footer-2-link fs-14">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics/" className="text-decoration-none footer-2-link fs-14">
                    Data Analytics Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10 text-white">Company Info</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/about/" className="text-decoration-none footer-2-link fs-14">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link  href="https://cloudminister.com/blog/" className="text-decoration-none footer-2-link fs-14" target="_blank">
                    Blog
                  </Link >
                </li>
                <li>
                  <Link href="/team/" className="text-decoration-none footer-2-link fs-14">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="text-decoration-none footer-2-link fs-14">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/career/" className="text-decoration-none footer-2-link fs-14">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/payment-options/" className="text-decoration-none footer-2-link fs-14">
                    Payment Option
                  </Link>
                </li>
                <li>
                  <Link  href=" https://cloudminister.com/blog/case-study/" className="text-decoration-none footer-2-link fs-14" target="_blank">
                    Case Study
                  </Link >
                </li>
                <li>
                  <Link href="/news-media/" className="text-decoration-none footer-2-link fs-14">
                    News & Media
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate/" className="text-decoration-none footer-2-link fs-14" target="_blank">
                    Affiliate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6">
            <div className="">
              <h6 className="fs-16 mt-3 mb-10 text-white">Office Address</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link  className="text-decoration-none footer-2-link fs-14">
                    <FaLocationDot style={{ marginRight: '10px' }} />
                    Plot no. 2, 5th Floor, Ganga tower, Roop Nagar Colony, Ajmer Road, Chitrakoot Marg, <br /> Tagore Nagar, Jaipur, Rajasthan 302021
                  </Link >
                </li>
                <li className="mt-4">
                  <Link  className="text-decoration-none footer-2-link fs-14">
                    <FaLocationDot style={{ marginRight: '10px' }} />B 23, Ground Floor, Sector 63 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301
                  </Link >
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10 text-white">Servers</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/vps-hosting/" className="text-decoration-none footer-2-link fs-14">
                    VPS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/linux-vps-server/" className="text-decoration-none footer-2-link fs-14">
                    Linux VPS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/windows-vps-server/" className="text-decoration-none footer-2-link fs-14">
                    Window VPS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/dedicated-server/" className="text-decoration-none footer-2-link fs-14">
                    Dedicated Server
                  </Link>
                </li>
                <li>
                  <Link href="/linux-dedicated-server/" className="text-decoration-none footer-2-link fs-14">
                    Linux Dedicated Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/windows-dedicated-server/" className="text-decoration-none footer-2-link fs-14">
                    Window Dedicated Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/linux-gpu-server/" className="text-decoration-none footer-2-link fs-14">
                    Linux GPU Server
                  </Link>
                </li>
                <li>
                  <Link href="/windows-gpu-server/" className="text-decoration-none footer-2-link fs-14">
                    Window GPU Server
                  </Link>
                </li>
                <li>
                  <Link href="/forex-vps-hosting/" className="text-decoration-none footer-2-link fs-14">
                    Forex - VPS Hosting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10 text-white">Server Management</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/cpanel-servers" className="text-decoration-none footer-2-link fs-14">
                    cPanel
                  </Link>
                </li>
                <li>
                  <Link href="/plesk-servers" className="text-decoration-none footer-2-link fs-14">
                    Plesk
                  </Link>
                </li>
                <li>
                  <Link href="/aws-support/" className="text-decoration-none footer-2-link fs-14">
                    AWS Support
                  </Link>
                </li>
                <li>
                  <Link href="/directadmin-server/" className="text-decoration-none footer-2-link fs-14">
                    Direct Admin Support
                  </Link>
                </li>
                <li>
                  <Link href="/virtualizor-server/" className="text-decoration-none footer-2-link fs-14">
                    Virtualizor Support
                  </Link>
                </li>
                <li>
                  <Link href="/azure/" className="text-decoration-none footer-2-link fs-14">
                    Azure Management
                  </Link>
                </li>
                <li>
                  <Link href="/google-cloud/" className="text-decoration-none footer-2-link fs-14">
                    Google Cloud Management
                  </Link>
                </li>
                <li>
                  <Link href="/digital-ocean/" className="text-decoration-none footer-2-link fs-14">
                    Digital Ocean Management
                  </Link>
                </li>
                <li>
                  <Link href="/directadmin-server/" className="text-decoration-none footer-2-link fs-14">
                    DirectAdmin Server Management
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10 text-white">Legal & Support</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/refund-policy/" className="text-decoration-none footer-2-link fs-14">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy/" className="text-decoration-none footer-2-link fs-14">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions/" className="text-decoration-none footer-2-link fs-14">
                    Terms-conditions
                  </Link>
                </li>
                <li>
                  <Link href="/service-level-agreement/" className="text-decoration-none footer-2-link fs-14">
                    SLA
                  </Link>
                </li>
          
                <li>
                  <Link href="https://manage.cloudminister.com/index.php?rp=/knowledgebase" className="text-decoration-none footer-2-link fs-14" target="_blank" rel="noopener noreferrer">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="https://manage.cloudminister.com/submitticket.php?step=2&deptid=1" className="text-decoration-none footer-2-link fs-14" target="_blank" rel="noopener noreferrer">
                    Report Online
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer/" className="text-decoration-none footer-2-link fs-14">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 pt-5 border-top">
            <p className="mb-0 fs-14 text-white ">Copyright © 2025 CloudMinister | All Rights Reserved.</p>
            <div className="d-inline-flex align-items-center justify-content-center gap-2">
              <Link 
                href="https://www.instagram.com/cloudminister/"
                className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-body">
                  <i className="lab la-instagram text-white"></i>
                </span>
              </Link >
              <Link 
                href="https://www.facebook.com/Cloudminitech"
                className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-body">
                  <i className="lab la-facebook-f text-white"></i>
                </span>
              </Link >

              <Link 
                href="https://linkedin.com/company/cloudminitech"
                className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-body">
                  <i className="lab la-linkedin text-white"></i>
                </span>
              </Link >
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footertwo;
