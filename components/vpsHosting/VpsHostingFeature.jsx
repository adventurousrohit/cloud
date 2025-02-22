import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Managed Performance",
    title: "Advanced Control Panel Integration",
    description: "Easily control your Linux VPS server with a user-friendly GUI and multiple control panel options, accessible via a secure web interface."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Unhindered Performance",
    title: "99.99% Uptime Guarantee",
    description: "Our VPS hosting Linux solutions minimize unnecessary reboots and optimize server performance to provide 99.99% uptime."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Bandwidth",
    title: "Unlimited Bandwidth & Traffic",
    description: "Scale smoothly with no traffic limits. Our Linux VPS servers can handle high workloads and high-traffic sites without any issues."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Enterprise NVMe SSD Storage",
    description: "High-performance NVMe SSD accelerates applications to reduce latency and speed up data retrieval for your VPS Linux server."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Free Full Backup & Migration",
    title: "Free Website Migration",
    description: "Guarantee your data by scheduling automatic full backups. Hassle-free website migration will add more value to your experience of Linux VPS hosting."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Advanced Security Protocols",
    description: "Protect your VPS for Linux with DDoS protection, firewalls, and real-time monitoring that guarantees data integrity and uptime."
  },
  
  
];

const VpsHostingFeatures = () => {
  return (
    <div className="container extrasection">
      <div className="row">
        <div className="col-12">
          <div className="bg-dark pt-80 pb-80 px-5 px-md-8 px-xl-12 rounded-4 position-relative z-1">
            <div className="row g-4 align-items-start">
              <div className="col-md-10 col-lg-7 col-xl-12">
                <h2 className="text-white">Advanced Features of Cloud Linux VPS Hosting in India  </h2>
                <p className="mb-8 text-white text-opacity-75">
                Experience unconventional Linux VPS hosting with CloudMinister, developed to meet your technical needs with unmatched efficiency and effectiveness.
                </p>
              </div>
             
            </div>
            <div className='row'>
            <div className="col-xl-12">
                <div className="row g-4 g-xl-0 feature-card">
                  {vpsFeatures.map((feature, index) => (
                    <div className="col-md-4 feature-card__list" key={index}>
                      <div className="feature-card__is  border-opacity-25 rounded-3">
                        <div className="mb-4">
                          <img src={feature.imgSrc} alt={feature.altText} className="img-fluid" />
                        </div>
                        <h3 className="mb-4 text-white">{feature.title}</h3>
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
