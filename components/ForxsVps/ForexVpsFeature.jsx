import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Seamless Control Panel Integration",
    title: "Seamless Control Panel Integration",
    description: "Easily manage your Forex VPS with an intuitive control panel. Enjoy user-friendly GUI and multiple panel options, all accessible via a secure web interface."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Unmatched Performance",
    title: "Unmatched Performance & 99.99% Uptime",
    description: "Our Forex VPS servers are optimized for uninterrupted trading. With a 99.99% uptime guarantee, experience reliable performance for smooth and consistent trading."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Bandwidth & Scalability",
    title: "Unlimited Bandwidth & Scalability",
    description: "No traffic limits with our Forex VPS hosting. Scale your server easily, because our Forex VPS hosting solutions handle heavy workloads and massive traffic without performance drops."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "High-Speed NVMe SSD Storage",
    title: "High-Speed NVMe SSD Storage",
    description: "Access data with enterprise-grade NVMe SSDs that have lightning-fast access times. Our high-performance storage reduces latency to make trading executions on your Forex VPS server much faster."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Free Backup & Easy Migration",
    title: "Free Backup & Easy Migration",
    description: "Protect your data with automatic backups and get hassle-free website migration with our best Forex VPS solutions, which ensure secure and stable trading."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "State-of-the-Art Security",
    title: "State-of-the-Art Security for Greater Peace of Mind",
    description: "Keep your Forex VPS hosting safe with built-in DDoS protection, firewalls, and real-time monitoring that protects the server from potential threats, ensuring high uptime."
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
                <h3 className="text-white">Top Advanced Features of Forex VPS Hosting in India</h3>
                {/* <p className="mb-8 text-white text-opacity-75">
                Experience unconventional Linux VPS hosting with CloudMinister, developed to meet your technical needs with unmatched efficiency and effectiveness.
                </p> */}
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
