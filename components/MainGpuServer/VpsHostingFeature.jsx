import React from 'react';
import { Link } from 'react-router-dom';

const vpsFeatures = [
  {
    imgSrc: "/img/icon-features-5.png",
    altText: "Lightning-Fast Provisioning",
    title: "Lightning-Fast Provisioning",
    description: "Within hours, get your GPU dedicated server up and running with a fully configured OS, control panel, and necessary software pre-installed for direct access to your applications."
  },
  {
    imgSrc: "/img/icon-features-6.png",
    altText: "Zero Setup Fees",
    title: "Zero Setup Fees",
    description: "Say goodbye to hidden fees. All setup costs, including panel installation and software configurations are covered so that your server is optimized for performance right from the start."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Full Control, Unlimited Potential",
    title: "Full Control, Unlimited Potential",
    description: "Complete control over your configurations and software with root access to the GPU server hosting. You may customize the server to match your exact needs."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "High-Performance Hardware",
    title: "High-Performance Hardware",
    description: "Powered by Intel Xeon processors and NVIDIA GPUs, our servers are equipped with superior computational power and parallel processing capabilities, ideal for resource-heavy applications like machine learning, AI, and deep learning."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Uninterrupted Speed and Reliability",
    title: "Uninterrupted Speed and Reliability",
    description: "Leverage 40Gbps network speed for flawless data transfer and lightning-fast connections, ensuring uninterrupted performance for critical applications and websites."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "Dedicated Resources",
    title: "Dedicated Resources",
    description: "Enjoy the benefits of 100% dedicated hardware and resources, providing consistent and optimized performance for your most demanding workloads without sharing resources with other users."
  },
  {
    imgSrc: "/img/icon-features-7.png",
    altText: "Security You Can Trust",
    title: "Security You Can Trust",
    description: "All data transferred to and from your GPU Linux servers is secure and protected through free SSL encryption certificates, safeguarding your sensitive information from potential threats."
  },
  {
    imgSrc: "/img/icon-features-8.png",
    altText: "Affordable and Scalable",
    title: "Affordable and Scalable",
    description: "Our cheap GPU server hosting in India is one excellent value proposition for businesses aiming to use strong infrastructure. Scale up your resources with the growing needs of your business using flexible GPU server plans."
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
                <h2 className="text-white" style={{fontSize:"2.441rem"}}>Transform Your Business with High-Performance GPU Hosting</h2>
                <p className="mb-8 text-white text-opacity-75">
                Experience the seamless performance, scalability, and latest technology with Dedicated NVIDIA GPU Servers. They are optimized for high-performance applications such as AI, ML, and deep learning and ensure your most demanding workloads run with ease.
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
