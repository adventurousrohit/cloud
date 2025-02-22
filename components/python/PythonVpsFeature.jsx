import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Developer Friendly",
    title: "Developer Friendly",
    description: "Python's website hosting is the very feature that makes development processes for deploying apps seamless without fuss."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Perpetual Security",
    title: "Perpetual Security",
    description: "Free SSL certificate provision in addition to advanced features keeps your Python apps always at security."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Bandwidth and Traffic",
    title: "Bandwidth and Traffic",
    description: "Be scaled higher with our Linux VPS services that can handle tremendous loads easily."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "High-Speed SSD Storage",
    title: "High-Speed SSD Storage",
    description: "Powering our servers with enterprise NVMe SSDs, accelerates application performance, cuts latency, and speeds up data retrieval."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Free Site Transfer & Backup",
    title: "Free Site Transfer & Backup",
    description: "Migrate your website without an extra cost, and for peace of mind, receive free full backups."
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
                <h3 className="text-white">Advanced Python Web Hosting Features for Developers</h3>
                <p className="mb-8 text-white text-opacity-75">
                Are you trying to find suitable Python hosting that can grow with you? Our Python web hosting options offer unparalleled scalability, security, and speed. Our Python web hosting guarantees top speed whether you're developing a web application or managing a busy website.
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
