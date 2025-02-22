import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Managed Performance",
    title: "Advanced Control Panel Integration",
    description: "Easily control your React.js hosting environment with an intuitive GUI and multiple control panel options. Have smooth access via a secure web interface, designed for React apps."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Unhindered Performance",
    title: "99.99% Uptime Guarantee",
    description: "Our React.js web hosting solutions ensure minimal downtime and optimized server performance, guaranteeing a 99.99% uptime for your apps."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Bandwidth",
    title: "Scale Your React.js App Without Limits",
    description: "Handle high workloads and surges in traffic with complete ease. With unlimited bandwidth, your React.js environment is geared for scalable growth."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Enterprise NVMe SSD Storage",
    description: "Accelerate Your React Apps with High Performance NVMe SSDs which reduce latency and improve speed in data retrieval. A perfect fit for hosting your React apps very efficiently."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Free Full Backup & Migration",
    title: "Easy Website Migration",
    description: "Automatic full backups for secure data. Hassle-free migration of your React.js projects with our services that ensure smooth transition to our hosting platform."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Advanced Security Protocols",
    description: "Protect your React.js hosting environment with advanced security measures, including DDoS protection, firewalls, and real-time monitoring for uptime and data integrity."
  }
];


const VpsHostingFeatures = () => {
  return (
    <div className="container extrasection">
      <div className="row">
        <div className="col-12">
          <div className="bg-dark pt-80 pb-80 px-5 px-md-8 px-xl-12 rounded-4 position-relative z-1">
            <div className="row g-4 align-items-start">
              <div className="col-md-10 col-lg-7 col-xl-12">
                <h3 className="text-white">Start Your Journey With Advance Features of ReactJS Hosting</h3>
                <p className="mb-8 text-white text-opacity-75">
                Our ReactJS hosting service has been designed to serve the needs of modern web developers. No matter if it is just a small portfolio or even a large enterprise application, our features guarantee that your ReactJS app will work at its best.
                </p>
              </div>
             
            </div>
            <div className='row'>
            <div className="col-xl-12">
                <div className="row g-4 g-xl-0 feature-card">
                  {vpsFeatures?.map((feature, index) => (
                    <div className="col-md-4 feature-card__list" key={index}>
                      <div className="feature-card__is  border-opacity-25 rounded-3">
                        <div className="mb-4">
                          <img src={feature.imgSrc} alt={feature.altText} className="img-fluid" />
                        </div>
                        <h6 className="mb-4 text-white">{feature.title}</h6>
                        <p className="mb-0 text-light text-opacity-50">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <img src="/img/shape/vps-feature-shape.png" alt="shape" className="img-fluid d-none d-xl-block position-absolute left-0 top-0 z-n1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VpsHostingFeatures;
