import { Link } from 'react-router-dom';
const ModernHomeService = () => {
  return (
    <>
        <section className="pt-60 pb-120 position-relative z-1">
      <img src="/img/shape/service-8-shape.png" alt="Shape" className="img-fluid position-absolute end-0 bottom-50 z-n1" />
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="bg-white p-7 rounded-4 position-relative overflow-hidden z-1">
              <h4 className="text-black fw-semibold mb-20">Hosting Services</h4>
              <img src="/img/service-8-list.png" alt="Service List" className="img-fluid" />
              <img src="/img/service-8-list-shape.png" alt="List Shape" className="img-fluid position-absolute top-0 end-0 z-n1 d-none d-sm-block" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-5">
              <h2>100% Green Hosting that’s Right for you</h2>
              <p className="fw-medium max-text-44 mt-5 mb-0">
                Managed Web Hosting Solutions bringing the success of online mission! Starting at <span className="text-warning">$2.49 including</span>
              </p>
              <Link href="/price" className="btn btn-primary border-0 bg-warning btn-arrow btn-arrow-md fs-14 fw-medium rounded mt-6">
                <span className="btn-arrow__text">
                  Plan & Pricing
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-lg-4">
            <div className="bg-white px-7 py-9 rounded-4">
              <img src="/img/shape/service-8-1.png" alt="VPS" className="img-fluid mb-5" />
              <h6 className="fs-18 mb-3">Virtual Private Server</h6>
              <p className="mb-5">Choose a VPS with 24x7 managed support. Choose a VPS powered by Intel Xeon CPUs with lightning-fast.</p>
              <p className="mb-0">Starting at: <span className="text-warning fw-bold">$20.00/mo</span></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white px-7 py-9 rounded-4">
              <img src="/img/shape/service-8-2.png" alt="Dedicated Servers" className="img-fluid mb-5" />
              <h6 className="fs-18 mb-3">Dedicated Servers</h6>
              <p className="mb-5">Choose a VPS with 24x7 managed support. Choose a VPS powered by Intel Xeon CPUs with lightning-fast.</p>
              <p className="mb-0">Starting at: <span className="text-warning fw-bold">$20.00/mo</span></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white px-7 py-9 rounded-4">
              <img src="/img/shape/service-8-3.png" alt="Enterprise Cloud Server" className="img-fluid mb-5" />
              <h6 className="fs-18 mb-3">Enterprise Cloud Server</h6>
              <p className="mb-5">Choose a VPS with 24x7 managed support. Choose a VPS powered by Intel Xeon CPUs with lightning-fast.</p>
              <p className="mb-0">Starting at: <span className="text-warning fw-bold">$20.00/mo</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default ModernHomeService
