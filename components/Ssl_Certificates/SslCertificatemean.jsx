import { Link } from 'react-router-dom';

const ServerManagementBrifeing = () => {
  const serverManagementData = [
    {
      href: '/cpanel-servers',
      imgSrc: '/img/gogetssl.png',
      imgAlt: 'gogetssl',
      title: 'GOGETSSL',
    },
    {
      href: '',
      imgSrc: '/img/digicert.png',
      imgAlt: 'digicert',
      title: 'DIGICERT',
    },
    {
      href: '',
      imgSrc: '/img/sectigo.png',
      imgAlt: 'sectigo',
      title: 'SECTIGO',
    },
    {
      href: '',
      imgSrc: '/img/geotrust.png',
      imgAlt: 'grotrust',
      title: 'GEOTRUST ',
    },
    {
      href: '',
      imgSrc: '/img/thawte.jpeg',
      imgAlt: 'thawte',
      title: 'THAWTE',
    },
    {
      href: '',
      imgSrc: '/img/rapidssllogo.png',
      imgAlt: 'rapidssllogo',
      title: 'RAPIDSSL',
    },
  ];

  return (
    <section className="pt-120 pb-30 bg-white partner-area position-relative z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center">
              <h2 className="text-dark fs-48 mb-4">The Power of Encryption: Understanding SSL Certificates</h2>
              <p className="text-dark mb-6">
              SSL certificates ensure safe communication and foster trust by encrypting data sent back and forth between your website and visitors. Protect sensitive data, increase user trust, and improve SEO ranks with SSL to make your website safer for all users.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="partner-1" role="tabpanel">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 g-3">
                  {serverManagementData?.map((item, index) => (
                    <div className="col" key={index}>
                      <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                        <img src={item.imgSrc} alt={item.imgAlt} className="img-fluid w-12" style={{ maxHeight: '48px' }} />
                        <h6 className="fs-16 fw-bold mt-4">{item.title}</h6>
                        {/* <div className="mt-3">
                          <Link
                            href={item.href || "/contact"}
                            className="btn btn-primary btn-sm"
                          >
                            Read More
                          </Link>
                        </div> */}
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
