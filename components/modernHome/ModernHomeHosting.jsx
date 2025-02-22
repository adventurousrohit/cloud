import { Link } from 'react-router-dom';
const ModernHomeHosting = () => {
  return (
    <>
      <section className="pt-120 pb-120 pb-xl-0 gradient-bg-2 position-relative z-1">
      <img src="/img/shape/host-8-shape.png" alt="Shape" className="img-fluid position-absolute bottom-0 end-0 z-n1 opacity-25 d-none d-sm-block" />
      <img src="/img/shape/host-8-shape.png" alt="Shape" className="img-fluid position-absolute top-0 start-50 z-n1 opacity-25 d-none d-sm-block" />
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-xl-8">
            <h2 className="text-white max-text-20 mb-10">100% Green Hosting that’s Right for you</h2>
            <div className="d-flex gap-6 flex-wrap flex-md-nowrap">
              <img src="/img/host-8-img-1.png" alt="Hosting" className="img-fluid" />
              <div>
                <img src="/img/shape/hero-8-shape.png" alt="Shape" className="img-fluid mb-6" />
                <img src="/img/host-8-img-2.png" alt="Hosting" className="hsot-img-style-8 img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <h6 className="text-white fw-semibold mb-3">Rated 5 stars Google & Trustpilot.</h6>
            <p className="text-white mb-8">
              Our in-house developed monitoring solution constantly checks on the health of your dedicated server and its to ensure it remains in top condition.
            </p>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li className="d-flex align-items-center gap-3">
                <span className="w-1 h-1 bg-white rounded-circle"></span>
                <p className="text-white fw-semibold mb-0">Rated 5 stars on both Google & Trustpilot.</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="w-1 h-1 bg-white rounded-circle"></span>
                <p className="text-white fw-semibold mb-0">ISO 27001 Certified.</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="w-1 h-1 bg-white rounded-circle"></span>
                <p className="text-white fw-semibold mb-0">Cyber Essentials Plus Certified.</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="w-1 h-1 bg-white rounded-circle"></span>
                <p className="text-white fw-semibold mb-0">UK / EU GPDR Compliant.</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="w-1 h-1 bg-white rounded-circle"></span>
                <p className="text-white fw-semibold mb-0">Global, ISO-certified data centres</p>
              </li>
            </ul>
            <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-6">
              <span className="btn-arrow__text">
                More About Us
                <span className="btn-arrow__icon">
                  <i className="las la-arrow-right"></i>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default ModernHomeHosting
