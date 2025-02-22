import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Ultra-Fast Deployment",
    title: "Ultra-Fast Deployment",
    description: "Get your Linux GPU server up and running within 4 hours. Our servers are pre-installed with operating systems and control panels, designed for resource-intensive tasks such as deep learning, AI, ML, and big data processing."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Performance Without Limits",
    title: "Performance Without Limits",
    description: "Experience unparalleled performance with Intel Xeon processors and SSD storage, optimized for the most demanding workloads. Servers have a lightning-fast 40Gbps network to ensure smooth operations of applications, websites, and high-compute tasks."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Total Control, No Setup Fee",
    title: "Total Control, No Setup Fee",
    description: "Enjoy full root access to customize your server to your exact needs. With no setup fees, we install the control panel, operating system, and essential software, saving you time and money."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "Dedicated Hardware for Peak Efficiency",
    title: "Dedicated Hardware for Peak Efficiency",
    description: "Our GPU servers provide exclusive hardware resources, guaranteeing no sharing and optimal performance. From AI training to big data analytics, our infrastructure is built to excel under pressure."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Advanced Security Features",
    title: "Advanced Security Features",
    description: "Keep your data safe with free SSL encryption and robust security measures. This will allow you to focus on your projects while keeping sensitive information safe."
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
                <h2 className="text-white" style={{fontSize:"2.3rem"}}>Fuel Your Demanding Applications with Robust GPU-Powered Linux Servers</h2>
                <p className="mb-8 text-white text-opacity-75">
                Unlock unmatched power with high-performance GPUs, scalable resources, seamless multitasking, and optimized processing speeds.
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
