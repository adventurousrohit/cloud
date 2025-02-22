import ContactForm from '@components/MigrateAkamai/ContactForm';
const MigrateAkamaiHero = () => {
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
            <div className="mb-2">
                                  <img src="/img/pngegg.png" alt="Akamai" />
                              </div>
            <small className="d-inline-block mb-2 fw-bold bg-success-subtle text-success-emphasis border border-success-subtle px-3 py-1 rounded">
                          <span className="d-inline-block w-2 h-2 bg-success rounded-circle me-1"> </span>
                          Migrate to Akamai
                        </small>
                       
              <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                Cloud Hosting –<span className="text-success-new">Akamai</span> That Keeps Your Business Ahead
              </h1>
              <p className="mb-8 text-white max-text-72 text-opacity-75" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              Take your business to new heights with Akamai's powerful cloud hosting solutions. With unmatched speed, superior security, and maximum uptime, your website will keep running flawlessly. To give you exactly what you need from a performance and reliability standpoint, Akamai offers a robust set of plans. Stay ahead of competition with quick response times and a hosting partner you can count on. Your success begins with Akamai.
              </p>
              <ul className="list-unstyled m-0 p-0">
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-white  fs-14">
                $1k–$5k MRR: Up to 20% Discount<span className="d-inline-block config-info-1"></span>
                </span>
              </li>

              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-white  fs-14">
                  <span className="d-inline-block config-info-2"></span>
                  $5k–$10k MRR: Up to 40% Discount
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-white  fs-14">
                  <span className="d-inline-block config-info-3"></span>        
                  $10k+ MRR: Up to 50% margin
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary bg-opacity-25 text-primary fs-14">
                  <i className="las la-check"></i>
                </span>
                <span className="d-block text-white  fs-14">
                  <span className="d-inline-block config-info-3"></span>        
                  99.99% SLA
                </span>
              </li>
            </ul>
            </div>
            <div className="col-lg-5 col-xl-6 text-lg-end">
         
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MigrateAkamaiHero;
