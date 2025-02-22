import React from 'react';
import { Link } from 'react-router-dom'; // For navigation, if using react-router

const DataCenterFooter = () => {
  return (
    <footer className="pt-120 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <img src="/img/logo-light.webp" alt="Logo" className="logo__img" />
            <p className="mt-10 mb-8">Founded in 2017, aims to deliver the best cloud web hosting in India with high speed, high security, 99.99% uptime and 24x7 support.</p>

            <h6 className="">Toll Free Number</h6>
            <span className="">
              <a href="tel:+918447755312" className="text-decoration-none">
                <i className="las la-phone"></i> +91-8447755312
              </a>
            </span>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-10">
              <h6 className="fs-16 mt-3 mb-10">Product & Solutions</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/shared-hosting/" className="text-decoration-none text-body hover:text-primary fs-14">
                    Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/wp-hosting" className="text-decoration-none text-body hover:text-primary fs-14">
                    Reseller Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/vps-hosting/" className="text-decoration-none text-body hover:text-primary fs-14">
                    VPS Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/dedicated-server/" className="text-decoration-none text-body hover:text-primary fs-14">
                    Dedicated Servers
                  </Link>
                </li>
                <li>
                  <Link href="/game-hosting" className="text-decoration-none text-body hover:text-primary fs-14">
                    Linux GPU Server
                  </Link>
                </li>
                <li>
                  <Link href="/dedicated-server/" className="text-decoration-none text-body hover:text-primary fs-14">
                    Low-Latency-Server
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10">Windows Hosting</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/server-location" className="text-decoration-none text-body hover:text-primary fs-14">
                    Windows Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/control-panel" className="text-decoration-none text-body hover:text-primary fs-14">
                    Windows Reseller Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/operating-system" className="text-decoration-none text-body hover:text-primary fs-14">
                    Windows VPS Server
                  </Link>
                </li>
                <li>
                  <Link href="/premium-network" className="text-decoration-none text-body hover:text-primary fs-14">
                    Windows Dedicated Server
                  </Link>
                </li>
                <li>
                  <Link href="/ddos" className="text-decoration-none text-body hover:text-primary fs-14">
                    Windows GPU Server
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10">Company Info</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/about-us" className="text-decoration-none text-body hover:text-primary fs-14">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/ddos" className="text-decoration-none text-body hover:text-primary fs-14">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/ddos" className="text-decoration-none text-body hover:text-primary fs-14">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    Case Study
                  </Link>
                </li>
                <li>
                  <Link href="/blog-listing" className="text-decoration-none text-body hover:text-primary fs-14">
                    AWS Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    News & Media
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    Affiliate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    AWS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="">
              <h6 className="fs-16 mt-3 mb-10">Contact us</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/shared-hosting/" className="text-decoration-none text-body hover:text-primary fs-14">
                    Skype : Tanuj.Chugh
                  </Link>
                </li>
                <li>
                  <Link href="/wp-hosting" className="text-decoration-none text-body hover:text-primary fs-14">
                    (+91)8447755312
                  </Link>
                </li>
                <li>
                  <Link href="/vps-hosting/" className="text-decoration-none text-body hover:text-primary fs-14">
                    (+91)9413987365
                  </Link>
                </li>
                <li>
                  <Link href="/dedicated-server/" className="text-decoration-none text-body hover:text-primary fs-14">
                    (+91)7737300012
                  </Link>
                </li>
                <li>
                  <Link href="/game-hosting" className="text-decoration-none text-body hover:text-primary fs-14">
                    sales@cloudminister.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-10">
              <h6 className="fs-16 mt-3 mb-10">Server Management</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/shared-hosting/" className="text-decoration-none text-body hover:text-primary fs-14">
                    cPanel Support
                  </Link>
                </li>
                <li>
                  <Link href="/wp-hosting" className="text-decoration-none text-body hover:text-primary fs-14">
                    Plesk Support
                  </Link>
                </li>
                <li>
                  <Link href="/vps-hosting/" className="text-decoration-none text-body hover:text-primary fs-14">
                    Webmin Servers
                  </Link>
                </li>
                <li>
                  <Link href="/dedicated-server/" className="text-decoration-none text-body hover:text-primary fs-14">
                    ISPConfiq
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10">Legal</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/server-location" className="text-decoration-none text-body hover:text-primary fs-14">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/control-panel" className="text-decoration-none text-body hover:text-primary fs-14">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/operating-system" className="text-decoration-none text-body hover:text-primary fs-14">
                    Terms-conditions
                  </Link>
                </li>
                <li>
                  <Link href="/premium-network" className="text-decoration-none text-body hover:text-primary fs-14">
                    SLA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ps-xl-5">
              <h6 className="fs-16 mt-3 mb-10">Help</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="/about-us" className="text-decoration-none text-body hover:text-primary fs-14">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/ddos" className="text-decoration-none text-body hover:text-primary fs-14">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="/ddos" className="text-decoration-none text-body hover:text-primary fs-14">
                    Report Online
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/blog-listing" className="text-decoration-none text-body hover:text-primary fs-14">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    Payment Option
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none text-body hover:text-primary fs-14">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 pt-5 border-top">
            <p className="mb-0 fs-14">
              Copyright &copy; 2024 CloudMinister Developed by{' '}
              <a href="https://www.3edgetechnologies.com/" target="_blank">
                3 Edge Technologies
              </a>{' '}
              All rights reserved.
            </p>
            <div className="d-inline-flex align-items-center justify-content-center gap-2">
              <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border">
                <span className="text-body">
                  <i className="lab la-twitter"></i>
                </span>
              </a>
              <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border">
                <span className="text-body">
                  <i className="lab la-facebook-f"></i>
                </span>
              </a>
             
              <a href="#" className="social-icon w-9 h-9 d-inline-flex align-items-center justify-content-center rounded-circle border">
                <span className="text-body">
                  <i className="lab la-linkedin"></i>
                </span>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DataCenterFooter;
