import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Managed Performance",
    title: "Smooth Performances with Windows VPS Server",
    description: "Enjoy uninterrupted performances in our Windows VPS server. The reason we provide high-speed servers for you is that our commitment to 99.99% uptime and reliability lets your site stay online, all the time."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Unhindered Performance",
    title: "Totally Managed VPS in Windows",
    description: "Our VPS on Windows comes with a graphic user interface that lets it manage your server very smoothly. With full control of the environment, enjoy unhampered server management"
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Bandwidth",
    title: "Tremendous Flexibility using VPS Hosting Windows",
    description: "Unlimited bandwidth and traffic for VPS hosting Windows. No limits, just smooth performance for your growing needs without worrying about overage charges."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Enterprise-Grade SSD Storage for Your Data",
    description: "Keep your data safe and sound with enterprise-grade SSDs. Unlike traditional shared hosting, our VPS Windows servers offer faster read/write speeds and improved data integrity."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Bandwidth",
    title: "Free Website Migration to Easy Transition",
    description: "Change to our Windows on a VPS server with free website migration. Our experts handle the migration process and allow you to concentrate on your business's growth."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Reliable Backup Services",
    description: "Keep your data with daily or weekly backups. It is a well-organized disaster recovery option that helps you in securing your critical information with VPS for Windows."
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
                <h2 className="text-white" style={{fontSize:"2.3rem"}}>Advance Features – Unlock the Power of Windows VPS Hosting</h2>
                <p className="mb-8 text-white text-opacity-75">
                At Cloudminister, we deliver multiple Windows VPS Hosting choices, each featuring distinctly different management groups and VPS features.
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
