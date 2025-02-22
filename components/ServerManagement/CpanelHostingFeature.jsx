import { useState } from "react";
import VideoModal from "../common/others/VideoModal";
import { useNavigate,Link } from "react-router-dom";

const features = [
  {
    title: "Microsoft Azure",
    description:
      "Microsoft Azure Support and Server Management Services will help you optimize your cloud infrastructure. To ensure that operations run smoothly, we offer 24/7 monitoring, proactive maintenance, security compliance, and performance optimization. Our professionals handle server configurations, updates, troubleshooting, and cost management, allowing you to fully leverage Azure's capabilities. We provide personalized solutions for your business needs, such as scalability, disaster recovery, and security advancements. Stay ahead with effective cloud management, minimal downtime, and skilled support. Enhance your Azure experience by securing, optimizing, and managing with confidence.  ",
    imgSrc: "/img/Azureserver.png",
    delay: 400,
  },
  {
    title: "Amazon AWS Support",
    description:
      "Empower your business with the support of CloudMinister's services for Amazon AWS. We ensure efficient operations of the cloud, from designing architecture to deployment. Scaling, monitoring, and troubleshooting are managed by our certified experts for optimal cost and performance within your AWS environment. Enjoy 24/7 support, proactive security, and custom solutions by partnering with us in innovating and growing with AWS.",
    imgSrc: "/img/AwsServer.png",
    delay: 500,
    href: "/aws-support/",
  },

  {
    title: "cPanel Server Management",
    description:
      "One of the top web hosting control panels, it offers easy-to-use tools for managing domains, emails, and websites. Maintaining the best possible performance, security, and dependability of the servers running cPanel is part of server management. This service covers cPanel setup and configuration, server resource monitoring, backup automation, and server security against malware and illegal access. Businesses may focus on their core competencies while professionals handle the technical intricacies of server administration using cPanel server management.",
    imgSrc: "/img/cpannal.png",
    delay: 600,
    href: "/cpanel-servers",
  },

  {
    title: " Linode Server Management",
    description:
      "Linode scalable cloud hosting solutions, Linode server management ensures the smooth running of these environments. This service includes setting up Linode instances, configuring software, and monitoring server health. Performance optimization, implementing security measures like firewalls, and quick response to incidents are all covered. Linode server management caters to businesses requiring high availability and robust cloud infrastructure, ensuring smooth operations with minimal downtime.",
    imgSrc: "/img/linod.png",
    delay: 700,
    href: "/linode-support/",
  },
  {
    title: "Plesk Server Management",
    description:
      "Plesk is a strong web hosting control panel that is specifically designed for managing websites and applications. Plesk server management focuses on maintaining and optimizing servers with this help of this platform. The service covers installation, configuration, security updates, and performance tuning to provide a seamless hosting experience. It also includes setting up domains, email services, and SSL certificates and automating backup processes. Plesk server management ensures that your server is secure, reliable, and running at peak efficiency, making it an ideal choice for businesses with multiple websites or complex hosting needs.",
    imgSrc: "/img/Plesk.png",
    delay: 800,
    href: "/plesk-servers",
  },
  {
    title: "DirectAdmin Server Management",
    description:
      "This control panel hosting is lightweight, and quite powerful. Servicing for a DirectAdmin server may include installation of and configures the direct administration into and maintains the operating server environment and services. Optimization, setup configuration to backup, maintain user up-to-date about different new software, among many things related to security using anti-malware products including having firewalls incorporated for any website. Directadmin control hosting providers and businesses ensures proper effective use without any hassle so making use of it more reasonable is ideal.",
    imgSrc: "/img/admind.png",
    delay: 900,
    href: "/directadmin-server/",
  },
  {
    title: "SolusVM Server Management",
    description:
      "SolusVM is a powerful control panel for virtualized server management. SolusVM server management involves setting up and maintaining virtual servers with the help of platforms like KVM, OpenVZ, or Xen. Services include managing node configurations, optimizing performance, and ensuring high availability. Security updates and backup automation are integral parts of the service, enabling hosting providers and businesses to manage virtual environments efficiently.",
    imgSrc: "/img/SolusVM Support.png",
    delay: 1000,
    href: "/solusvm-server/",
  },
  {
    title: "Virtualizor Server Management",
    description:
      "Virtualizor is an advanced Web-based VPS management solution. Its administration involves VM creation, performance optimization as well as safety and reliability of infrastructures. It offers all the configurations regarding backup activities, health checkups and troubleshooting about servers. So, its ideal service for those hosting companies or enterprises who may need scalability in efficient virtualized environment.",
    imgSrc: "/img/Virtualizor.png",
    delay: 1100,
    href: "/virtualizor-server/",
  },
  {
    title: "Hyper-V Server Management",
    description:
      "Microsoft Hyper-V is one of the leading virtualization platforms for businesses. Hyper-V server management is focused on the creation and management of virtual machines, optimization of resource usage, and security. Services offered include performance monitoring, storage management, and disaster recovery configuration. With Hyper-V server management, businesses can use virtualization to its fullest potential in terms of scalability and cost-effectiveness.",
    imgSrc: "/img/Hyper.png",
    delay: 1200,
    href: "/hyper-v-server/",
  },
  {
    title: "Digital Ocean",
    description:
      "DigitalOcean server management simplifies cloud hosting with user-friendly control panels and robust tools. It offers scalable solutions for deploying, managing, and monitoring applications on virtual private servers (droplets). Automated backups, monitoring, load balancing, and one-click app installations provide for easy management of infrastructure. The intuitive interface supports developers and businesses, thus ensuring high performance, security, and reliability. DigitalOcean’s API allows automation, while its community and support ensure assistance at every step. Ideal for startups, developers, and enterprises, it empowers users to focus on innovation without worrying about server complexities.",
    imgSrc: "/img/digitalo.png",
    delay: 1300,
    href: "/digital-ocean/",
  },
  {
    title: "Google Cloud Server",
    description:
      "Take your business to the next level with Google Cloud Servers, designed for unmatched speed, scalability, and security. Effortlessly handle workloads with cutting-edge infrastructure that adapts to your needs, ensuring seamless performance. Enjoy top-tier data protection and global network reliability, empowering your business to innovate and grow without limits. From startups to enterprises, Google Cloud delivers the tools you need to thrive in a digital-first world.",
    imgSrc: "/img/cloud.png",
    delay: 1400,
    href: "/google-cloud/",
  },
  {
    title: "ISPConfig Server Management",
    description:
      "ISPConfig is a versatile open-source hosting control panel. ISPConfig server management involves configuring web servers, email systems, and DNS settings. The service also includes optimizing server performance, securing the environment, and automating routine tasks. ISPConfig server management is ideal for small to medium-sized businesses seeking a flexible and affordable hosting solution.",
    imgSrc: "/img/isp.png",
    delay: 1500,
    href: "/ispconfig-server/",
  },
  {
    title: "Rackspace Server Management",
    description:
      "Rackspace is known to offer managed cloud solutions designed for all businesses irrespective of their size. The scope of Rackspace server management encompasses provisioning servers, maintaining uptime, and optimizing resource usage. Proactive monitoring, updating the system regularly, and adopting advanced security measures form an integral part of this service. With 24/7 support, Rackspace server management ensures a reliable hosting experience for mission-critical applications and services.",
    imgSrc: "/img/rack.png",
    delay: 1600,
    href: "/rackspace",
  },
  {
    title: "Webmin Server Management",
    description:
      "CloudMinister provides professional Webmin server management services. We simplify server tasks with precision and security. Our team ensures smooth installations, updates, and configurations, making server management easy. Whether it is hosting, system monitoring, or user management, we customize solutions to your needs, ensuring peak performance and reliability. With round-the-clock support and proactive maintenance, trust us to optimize your Webmin server for uninterrupted operations.",
    imgSrc: "/img/webmin.png",
    delay: 1700,
    href: "/webmin-servers/",
  },
];
const CpanelHostingFeature = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <section className=" position-relative z-1 overflow-hidden ">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="card rounded-4">
                <div className="pt-60 pb-60 ">
                  <div className="pb-60">
                    <div className="container">
                      <div className="row g-4 align-items-center justify-content-xl-between">
                        <div
                          className="col-lg-12 text-center text-dark"
                          data-sal="slide-up"
                          data-sal-duration="500"
                          data-sal-delay="300"
                          data-sal-easing="ease-in-out-sine"
                        >
                          <h2 className="mb-4">
                            Our{" "}
                            <span className="text-success-new">Support</span>{" "}
                            Service
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row g-10 g-md-0 feature-list">
                      {features?.map((feature, index) => (
                        <div
                          key={index}
                          className="col-sm-6 col-md-4 feature-list__item"
                          data-sal="slide-up"
                          data-sal-duration="1700"
                          data-sal-delay={feature.delay}
                          data-sal-easing="ease-in-out-sine"
                        >
                          <div className="feature-list__card border text-center">
                            <div className="mb-8">
                              <img
                                src={feature.imgSrc}
                                alt={feature.title}
                                className="img-fluid"
                              />
                            </div>
                            <Link
                            href={feature.href}
                              className="mb-5 fs-20 fw-medium d-block text-decoration-none text-center"
                              // onClick={() => navigate()}
                              style={{ cursor: "pointer",color:"#000" }}
                            >
                              {feature.title}
                            </Link>
                            <p className="mb-0">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpanelHostingFeature;
