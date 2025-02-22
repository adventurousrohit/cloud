import Link from "next/link";

const AboutUsStory = () => {

  const serverManagementData = [
    {
      href: '/cpanel-servers',
      imgSrc: '/img/icons8-cpanel-96.png',
      imgAlt: 'CPanel Icon',
      title: 'CPanel',
    },
    {
      href: '/plesk-servers',
      imgSrc: '/img/icons8-plesk-96.png',
      imgAlt: 'Plesk Icon',
      title: 'Plesk Support',
    },
    {
      href: '/directadmin-server/',
      imgSrc: '/img/Direct Admin new.png',
      imgAlt: 'Direct Admin Icon',
      title: 'Direct Admin Support',
    },
    {
      href: '/solusvm-server/',
      imgSrc: '/img/logo-SolusVM-CloudFest.png',
      imgAlt: 'SolusVM Icon',
      title: 'SolusVM Support',
    },
    {
      href: '/virtualizor-server/',
      imgSrc: '/img/vr.jpg',
      imgAlt: 'Virtualizor Icon',
      title: 'Virtualizor Support',
    },
    {
      href: '/hyper-v-server/',
      imgSrc: '/img/icons8-microsoft-96.png',
      imgAlt: 'Microsoft Hyper-V Icon',
      title: 'Microsoft Hyper-V Support',
    },
    {
      href: '/aws-support/',
      imgSrc: '/img/icons8-aws-96.png',
      imgAlt: 'AWS Icon',
      title: 'Amazon AWS Support',
    },
    {
      href: '/azure/',
      imgSrc: '/img/icons8-azure-96.png',
      imgAlt: 'Azure Icon',
      title: 'Microsoft Azure',
    },
    {
      href: '/digital-ocean/',
      imgSrc: '/img/icons8-digital-ocean-96.png',
      imgAlt: 'Digital Ocean Icon',
      title: 'Digital Ocean',
    },
    {
      href: '/rackspace',
      imgSrc: '/img/rackspace-logo.png',
      imgAlt: 'Rackspace Icon',
      title: 'Rackspace',
    },
  ];
  return (
    <>
      <div className="pt-10 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 " data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <img src="/img/Home page (1).png" alt="image" className="img-fluid rounded-4" />
            </div>
            <div className="col-xl-8">
              <div className="text-center">
                <h3 className="fs-48 mb-4">Extensive Server Management Services by Industry Experts</h3>
                <p className=" mb-6">
                Our comprehensive server management solutions provide secure, scalable, and efficient server administration that ensures optimized performance and robust security. This absolute positive approach guarantees smooth business operations and long-term operational success.
                </p>
              </div>
              <div className="col-lg-12">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="partner-1" role="tabpanel">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                    {serverManagementData?.map((item, index) => (
                      <div className="col" key={index}>
                        <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                          <img src={item.imgSrc} alt={item.imgAlt} className="img-fluid w-14" />
                          <Link href={item.href}  className="fs-18  mt-4 text-decoration-none d-inline-flex align-items-center " style={{ cursor: 'pointer',color:"#000" ,fontWeight:"400"}}>
                            {item.title}
                          </Link>
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
      </div>
    </>
  );
};

export default AboutUsStory;
