import { useNavigate } from "react-router-dom";

const ServerManagementBrifeing = () => {
  const navigate=useNavigate()
  const serverManagementData = [
    {
      href: "/cpanel-servers",
      imgSrc: "/img/icons8-cpanel-96.png",
      imgAlt: "CPanel Icon",
      title: "CPanel",
    },
    {
      href: "/plesk-servers",
      imgSrc: "/img/icons8-plesk-96.png",
      imgAlt: "Plesk Icon",
      title: "Plesk Support",
    },
    {
      href: "/directadmin-server/",
      imgSrc: "/img/icons8-online-support-100.png",
      imgAlt: "Direct Admin Icon",
      title: "Direct Admin Support",
    },
    {
      href: "/solusvm-server/",
      imgSrc: "/img/logo-SolusVM-CloudFest.png",
      imgAlt: "SolusVM Icon",
      title: "SolusVM Support",
    },
    {
      href: "",
      imgSrc: "/img/vr.jpg",
      imgAlt: "Virtualizor Icon",
      title: "Virtualizor Support",
    },
    {
      href: "",
      imgSrc: "/img/icons8-microsoft-96.png",
      imgAlt: "Microsoft Hyper-V Icon",
      title: "Microsoft Hyper-V Support",
    },
    {
      href: "",
      imgSrc: "/img/icons8-aws-96.png",
      imgAlt: "AWS Icon",
      title: "Amazon AWS Support",
    },
    {
      href: "",
      imgSrc: "/img/icons8-azure-96.png",
      imgAlt: "Azure Icon",
      title: "Microsoft Azure",
    },
    {
      href: "",
      imgSrc: "/img/icons8-digital-ocean-96.png",
      imgAlt: "Digital Ocean Icon",
      title: "Digital Ocean",
    },
  ];

  return (
    <section className="pt-120 pb-30 bg-dark partner-area position-relative z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center">
              <h2 className="text-white fs-48 mb-4">
                Comprehensive Server Management Solutions
              </h2>
              <p className="text-white mb-6">
                Comprehensive Server Management Solutions provide secure,
                scalable, and efficient server administration, ensuring
                optimized performance, robust security, and seamless business
                operations.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="partner-1"
                role="tabpanel"
              >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                  {serverManagementData?.map((item, index) => (
                    <div className="col" key={index}>
                      <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                        <img
                          src={item.imgSrc}
                          alt={item.imgAlt}
                          className="img-fluid w-12"
                        />
                        <h6 onClick={()=>navigate(item.href)} className="fs-16 fw-bold mt-4" style={{cursor:"pointer"}} >{item.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerManagementBrifeing;
