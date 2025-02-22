import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Seamless Management",
    title: "Seamless Management",
    description: "CloudMinister VPS hosting in India comes with a very intuitive control panel to easily manage. Access everything via your browser, ensuring effortless control over your virtual server hosting."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Unbeatable Performance",
    title: "Unbeatable Performance",
    description: "Get a 99.99% uptime guarantee. Our VPS hosting server ensures your website runs smoothly, without any unnecessary interruptions or reboots."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Traffic & Bandwidth",
    title: "Free Backup & Website Migration",
    description: "Free daily backups and hassle-free website migration, so your transition to our VPS hosting is seamless."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "Free Backup & Website Migration",
    title: "Enterprise-Grade NVMe SSD Storage",
    description: "High-speed performance with enterprise-level NVMe SSD storage. This ensures your VPS in India is efficient and reliable."
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
                <h2 className="text-white" style={{fontSize:"2.441rem"}}>Advanced Features That Make Our Cloud VPS Hosting Stand Out</h2>
                <p className="mb-8 text-white text-opacity-75">
                Supercharge your business with Cloud VPS hosting advanced features: fast, reliable, secure, and fully managed for ultimate performance.
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
