import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Managed Performance",
    title: "Lightning-Fast GPU Server Setup",
    description: "Set up your Windows GPU Server within 4 hours. With a pre-configured OS and control panel, our servers are created to easily support the more demanding deep learning, AI, and ML projects."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Unhindered Performance",
    title: "No Performance Hindrances & No Setup Fees",
    description: "We at CloudMinister believe in giving a seamless experience. So, we don't charge any setup fees for your Windows GPU server. Get free installation of the control panel, OS, and required software, and your server is ready to be optimized for performance right from the first day."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Unlimited Bandwidth",
    title: "Unmetered Bandwidth & Full Server Access",
    description: "Take full control with complete administrative access to your Windows GPU Server. Customize your server environment, install or remove applications, and manage network settings, all with unrestricted access for ultimate flexibility."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "",
    title: "High-Performance Processors for Demanding Applications",
    description: "Our Windows GPU Dedicated Servers come equipped with high-performance processors, offering superior processing power and multiple cores. These advanced processors are specifically engineered for high-demand tasks like running AI or deep learning models, ensuring exceptional performance and reliability."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "",
    title: "Blazing Fast Network Speeds (Up to 10Gbps)",
    description: "Experience unparalleled connectivity with our Windows GPU Dedicated Servers, featuring network speeds of up to 10Gbps. This high-speed network ensures smooth performance for your applications, including those running on AMD GPU or NVIDIA Windows GPU Servers, delivering a flawless user experience with zero lag."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "SSDs, Email, SSL",
    title: "Premium Resources for Intensive Workloads",
    description: "Our Windows GPU Dedicated Servers are powered by exclusive, high-performance hardware tailored for intensive workloads. Enjoy 100% dedicated resources that guarantee optimal performance for your critical applications, including AI and deep learning."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "",
    title: "Optimized for High-Performance Tasks",
    description: "Our Windows GPU Servers are designed for demanding applications such as AI, deep learning, ML, and data-heavy operations, which require the power of computational force to run complex projects efficiently. You can rely on our servers for maximum performance and scalability."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "",
    title: "State-of-the-Art Technology for Peak Performance",
    description: "Take advantage of cutting-edge technology with our Windows GPU Servers. Built to handle large datasets and high-performance workloads, including those on NVIDIA Windows GPU Servers or AMD GPU Windows Server, these servers provide exceptional performance to keep your applications running smoothly and effectively."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "",
    title: "Improved Security with SSL Encryption",
    description: "With every Windows GPU Server, we throw in free SSL encryption on your critical data. Our robust security feature allows the safe exchange of data and provides you with protection from malicious cyber threats to your servers."
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
                <h2 className="text-white" style={{fontSize:"2.3rem"}}>Supercharge Your Operations with Advanced Features Windows GPU Hosting</h2>
                <p className="mb-8 text-white text-opacity-75">
                Our Windows GPU Servers offer highly unique performance and dependability. Our plans, which are made to power your vital applications, provide smooth scalability, improved security, and cost-effective resource optimization, guaranteeing that your company grows with ease.
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
