import { useState } from "react";
import VideoModal from "../common/others/VideoModal";

const features = [
  {
    title: "Microsoft Azure",
    description: "Our crew of experts is ready to tackle the issues of deploying scaled apps and instances on the Azure cloud platform.",
    imgSrc: "/img/azure.png",
    delay: 400
  },
    {
      title: "AWS Support",
      description: "Our experts will take care of your daily operations, providing business-level management and service for the AWS instances.",
      imgSrc: "/img/AwsSmall.png",
      delay: 300
    },

    {
      title: "cPanel Support",
      description: "Our most popular Cpanel server management program is the most effective industry. Our certified experts from Cpanel will handle your Cpanel server with professionalism.",
      imgSrc: "/img/cpannal.png",
      delay: 800
    },
   
    {
      title: "Linode Support",
      description: "The Linode server maintenance plans that we offer are made focusing on data security. You need not fear the data getting lost at any point in time or any intrusion.",
      imgSrc: "/img/linod.png",
      delay: 500
    },
    {
      title: "Plesk Support",
      description: "The best-designed Plesk server administration program with Plesk onyx certified technicians would keep your server running all day.",
      imgSrc: "/img/Plesk.png",
      delay: 600
    },
    {
      title: "DirectAdmin Support",
      description: "One of the industry's top control panels, the Directadmin server management program makes administration easier for servers.",
      imgSrc: "/img/admind.png",
      delay: 700
    },
    {
      title: "SolusVM Support",
      description: "With our server management solutions, solusVM allows us to manage your virtual machines using a powerful GUI built on virtualization software.",
      imgSrc: "/img/SolusVM Support.png",
      delay: 900
    },
    {
      title: "Virtualizor Support",
      description: "Virtualizor has launched a new server management plan, and we will handle all of your Openvz, Xen, and KVM nodes around the clock effortlessly.",
      imgSrc: "/img/Virtualizor.png",
      delay: 1000
    },
    {
      title: "Microsoft Hyper-v Support",
      description: "Windows server virtualization programs improve system performance using an intelligent allocation system and a secure virtualization solution.",
      imgSrc: "/img/Hyper.png",
      delay: 1200
    },
    // {
    //   title: "Microsoft Hyper-v Support",
    //   description: "Windows server virtualization programs improve system performance using an intelligent allocation system and a secure virtualization solution.",
    //   imgSrc: "/img/Virtualizor.png",
    //   delay: 700
    // },
    {
      title: "Digital Ocean",
      description: "We handle the entire OpenStack infrastructure using various strategies to provide comprehensive assistance.",
      imgSrc: "/img/digitalo.png",
      delay: 1300
    },
    {
      title: "Google Cloud",
      description: "Google Cloud is enterprise cloud platform for the deployment of high traffic apps in secured manner , Our team is having expertise on google cloud instances and infrastructure management.",
      imgSrc: "/img/cloud.png",
      delay: 1400
    },
    {
      title: "ISPConfig",
      description: "ISPConfig is a free hosting control panel for managing server, we do provide support for ISPconfig panel based servers.",
      imgSrc: "/img/isp.png",
      delay: 1500
    },
    {
      title: "Rackspace",
      description: "Rackspace cloud servers management , clusters management and setup is being managed by our cloud experts.",
      imgSrc: "/img/rack.png",
      delay: 1600
    },
    {
      title: "Webmin Servers",
      description: "Webmin serves its purpose for ease on servers and can be installed on mostly used Operating system. We do provide webmin server management in efficient way.",
      imgSrc: "/img/webmin.png",
      delay: 1700
    },
  ];
const CpanelHostingFeature = () => {
  const [isOpen,setOpen]=useState(false)
  return (
    <>
        <section className=" position-relative z-1 overflow-hidden mb-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="card rounded-4">  
       <div className="pt-60 pb-60 ">
      <div className="pb-60">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-xl-between">
            <div className="col-lg-12 text-center text-dark" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <h2 className="mb-4">Our <span className="text-success-new">Support</span> Service</h2>
              {/* <p className="max-text-56 mb-0 fw-semibold">
              24/7 Premium Server Management: Hosting, Server & Cloud Support, Admin & NOC Services
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row g-4 g-md-0 feature-list">
        {features.map((feature, index) =>  <div key={index}
      className="col-sm-6 col-md-4 feature-list__item"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay={feature.delay}
      data-sal-easing="ease-in-out-sine"
    >
      <div className="feature-list__card border text-center">
        <div className="mb-8">
          <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
        </div>
        <h6 className="mb-5">{feature.title}</h6>
        <p className="mb-0">{feature.description}</p>
      </div>
    </div>)}
      </div>
    </div>
    </div>
    </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default CpanelHostingFeature
