"use client";
import React from "react";
import Link from "next/link";
const DataCenterServices = () => (
  <>
    <section className="service-area pt-60 mb-12" style={{ background: '#1062FE0D', paddingBottom: '30px' }}>
      <div className="pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <h2 className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                Checkout All of Best <br /> Services that We Provide for You
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-xl-4">
            <div className="card service-card-item shadow rounded-3 h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
              <div className="card-body px-md-7 py-md-8">
                <h6>Virtual Private Server</h6>
                <div className="d-flex flex-wrap flex-sm-nowrap gap-5 mt-6">
                  <div>
                    <img src="/img/service-icon-4.png" alt="" style={{ maxWidth: '200px' }} />
                  </div>
                  <div>
                    <p>
                    Enjoy allotted CPU, RAM, and storage space in a shared environment. Install and maintain your own operating systems, software, and customizations. Isolated environments provide data security and little interruption. Provides dedicated server benefits without the expensive cost. {" "}
                      <Link href="/vps-hosting/" class="text-decoration-none d-inline-flex align-items-center gap-2 fs-14 px-0 text-heading fw-semibold btn-arrow btn-arrow-sm">
                      <span class="d-inline-block btn-arrow__text">
                        Explore More
                        <span class="btn-arrow__icon">
                          <i class="las la-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4">
            <div className="card service-card-item shadow rounded-3 h-100" data-sal="slide-up" data-sal-duration="400" data-sal-delay="100" data-sal-easing="ease-in-out-sine">
              <div className="card-body px-md-7 py-md-8">
                <h6>Dedicated Hosting</h6>
                <div className="d-flex gap-5 flex-wrap flex-sm-nowrap mt-6">
                  <div>
                    <img src="/img/service-icon-1.png" alt="" style={{ maxWidth: '200px' }} />
                  </div>
                  <div>
                    <p>Your company enjoys exclusive server resources, ensuring maximum speed and efficiency. Full root access allows custom setups, while physical separation enhances data security. Ideal for high-traffic websites, large databases, and complex applications, this setup guarantees optimal performance and robust protection for your critical operations. {" "}
                    <Link href="/dedicated-server/" class="text-decoration-none d-inline-flex align-items-center gap-2 fs-14 px-0 text-heading fw-semibold btn-arrow btn-arrow-sm">
                      <span class="d-inline-block btn-arrow__text">
                        Explore More
                        <span class="btn-arrow__icon">
                          <i class="las la-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4">
            <div className="card service-card-item shadow rounded-3 h-100" data-sal="slide-up" data-sal-duration="450" data-sal-delay="150" data-sal-easing="ease-in-out-sine">
              <div className="card-body px-md-7 py-md-8">
                <h6>GPU Server</h6>
                <div className="d-flex gap-5 flex-wrap flex-sm-nowrap mt-6">
                  <div>
                    <img src="/img/service-icon-2.png" alt="" style={{ maxWidth: '200px' }} />
                  </div>
                  <div>
                    <p>
                    GPUs efficiently handle multiple tasks simultaneously, enabling faster calculations. This makes them ideal for artificial intelligence, deep learning, and scientific modeling, reducing processing time and boosting productivity. Their ability to adapt to growing data and workload demands ensures sustained performance, making them decisive for high-performance computing. {" "}
                      <Link href="/gpu-server/" class="text-decoration-none d-inline-flex align-items-center gap-2 fs-14 px-0 text-heading fw-semibold btn-arrow btn-arrow-sm">
                      <span class="d-inline-block btn-arrow__text">
                        Explore More
                        <span class="btn-arrow__icon">
                          <i class="las la-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6">
            <div className="card service-card-item shadow rounded-3 h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
              <div className="card-body px-md-7 py-md-8">
                <h6>IOT</h6>
                <div className="d-flex flex-wrap flex-sm-nowrap gap-5 mt-6">
                  <div>
                    <img src="/img/service-icon-3.png" alt="" style={{ maxWidth: '200px' }} />
                  </div>
                  <div>
                    <p>Smart devices and sensors can be seamlessly connected, enabling real-time data collection and analysis for informed decision-making. This streamlined process enhances efficiency, while remote management increases flexibility, allowing systems to be controlled from anywhere. Together, these capabilities optimize performance and improve overall operations. {" "}</p>
                    <Link href="/Iot/" class="text-decoration-none d-inline-flex align-items-center gap-2 fs-14 px-0 text-heading fw-semibold btn-arrow btn-arrow-sm">
                      <span class="d-inline-block btn-arrow__text">
                        Explore More
                        <span class="btn-arrow__icon">
                          <i class="las la-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6">
            <div className="card service-card-item shadow rounded-3 h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
              <div className="card-body px-md-7 py-md-8">
                <h6>Cyber Security</h6>
                <div className="d-flex flex-wrap flex-sm-nowrap gap-5 mt-6">
                  <div>
                    <img src="/img/service-icon-4.png" alt="" style={{ maxWidth: '200px' }} />
                  </div>
                  <div>
                    <p>Cybersecurity ensures protection against unauthorized access, viruses, and data breaches, keeping essential information safe and confidential. It maintains compliance with industry-specific security standards while enabling real-time threat identification and response to safeguard sensitive data and systems, ensuring continuous protection against evolving security risks.</p>
                    <Link href="/cyber-security/" class="text-decoration-none d-inline-flex align-items-center gap-2 fs-14 px-0 text-heading fw-semibold btn-arrow btn-arrow-sm">
                      <span class="d-inline-block btn-arrow__text">
                        Explore More
                        <span class="btn-arrow__icon">
                          <i class="las la-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 pb-10">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-12">
                <h2 className="h5 d-inline-flex align-items-center gap-2 mb-4 text-primary" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <span className="d-inline-block">Reliable and Secure Web Hosting Company in India
                  </span>
                  <span className="d-inline-block w-15 h-1 bg-primary"></span>
                </h2>
                <p className="mb-6 fw-medium" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                At CloudMinister, we offer high-quality web hosting services built for speed, security, and scalability. As a reliable web hosting provider in India, we guarantee 99.9% uptime, super-fast performance, and cutting-edge security features to ensure your website is always up and running. Whether you're a startup, enterprise, or eCommerce company, our hosting plans are customized to suit your requirements. With servers driven by SSD, strong DDoS protection, and free SSL certificates, we ensure a secure and problem-free online experience for your website visitors.
Our hosting plans cover Shared Hosting, VPS Hosting, Cloud Hosting, Dedicated Servers, and Managed WordPress Hosting, all engineered for optimal reliability. We boast of 24/7 expert technical support, ensuring that any technical issue is addressed at the earliest. At CloudMinister, we are committed to open pricing without any surprise costs, ensuring businesses of all shapes and sizes enjoy high-quality web hosting. If you're bringing a new site online or wish to upgrade your existing hosting, we have just the solution to drive your web success.
                </p>
                <div className="row g-4 justify-content-center">
                  <div className="col-md-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card">
                      <div className="card-body">
                        <div className="hstack gap-2">
                          <span className="d-inline-block flex-shrink-0">
                            <img src="/img/transaction.png" alt="image" className="img-fluid" style={{ maxHeight: '60px' }} />
                          </span>
                          <h6 className="mb-0 flex-grow-1 fs-16">7-days Money Back Guarantee</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card">
                      <div className="card-body">
                        <div className="hstack gap-2">
                          <span className="d-inline-block flex-shrink-0">
                            <img src="/img/quick.png" alt="image" className="img-fluid" style={{ maxHeight: '60px' }} />
                          </span>
                          <h6 className="mb-0 flex-grow-1 fs-16">Fast & Secure With 99% Uptime</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card">
                      <div className="card-body">
                        <div className="hstack gap-2">
                          <span className="d-inline-block flex-shrink-0">
                            <img src="/img/support.png" alt="image" className="img-fluid" style={{ maxHeight: '60px' }} />
                          </span>
                          <h6 className="mb-0 flex-grow-1 fs-16">24/7 Customer Support</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default DataCenterServices;
