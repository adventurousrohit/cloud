import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-1.png",
    altText: "Control Panel Integration",
    title: "Advanced Control Panel Integration",
    description: "Manage your Node.js server with ease through an intuitive control panel. Get access to a user-friendly GUI and multiple control options through a secure web interface, which makes the management of servers smooth and efficient."
  },
  {
    imgSrc: "/img/icon-features-2.png",
    altText: "Uptime Guarantee",
    title: "Uninterrupted Performance & 99.99% Uptime Guarantee",
    description: "Have uninterrupted service with 99.99% uptime. Cloud Minister's Node.js hosting is designed for consistent performance, ensuring that your apps run smoothly without frequent reboots."
  },
  {
    imgSrc: "/img/icon-features-3.png",
    altText: "Unlimited Bandwidth",
    title: "Unlimited Bandwidth & Traffic",
    description: "Scale effortlessly with unlimited bandwidth and traffic. You would be running high-traffic websites or handling a high workload, and in those cases, Cloud Minister has Node.js hosting such that your server will never become limited by bandwidth."
  },
  {
    imgSrc: "/img/icon-features-4.png",
    altText: "Enterprise SSD",
    title: "Enterprise-Grade SSD Storage",
    description: "Experience high-speed data retrieval with lesser latency using NVMe SSDs. Cloud Minister Node.js server hosting uses leading technology to enhance performance and accelerate your applications."
  },
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Backup and Migration",
    title: "Free Full Backup & Migration",
    description: "Automatic full backups and effortless website migration are ensured by our free migration services that make it easy and risk-free to migrate to our Node.js hosting in India."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Advanced Security",
    title: "Advanced Security Protocols",
    description: "Ensure maximum security for your Node.js server with DDoS protection and other advanced security measures, keeping your applications and data safe from cyber threats."
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
                <h3 className="text-white">Experience the Best in Node.js Hosting Services with Advance Features</h3>
                <p className="mb-8 text-white text-opacity-75">
                With exceptional performance with CloudMinsiter’s Node.js hosting services and effective solutions. Our hosting for Node.js advanced features ensures seamless operation.
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
