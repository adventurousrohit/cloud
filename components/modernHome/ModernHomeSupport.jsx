import { Link } from "react-router-dom"

const ModernHomeSupport = () => {
  return (
    <>
         <section className="pt-10">
        <div className="container">
            <div className="bg-white px-6 pt-80 pb-80 rounded-4 position-relative z-1">
                <img src="/img/shape/support-8-shape.png" alt="image" className="img-fluid position-absolute start-0 bottom-0 z-n1 d-none d-lg-block"/>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h3>
                                Quality Hosting Support&nbsp;
                            </h3>
                            <p className="mb-6">
                                With over two decades of experience in high-quality, secure web hosting
                                HostCity is the strategic partner for your online journey.
                            </p>
                            <Link href="/contact" className="btn btn-warning btn-arrow btn-arrow-xl btn-lg fs-14 fw-medium rounded">
                                <span className="d-inline-block me-1 flex-shrink-0">
                                    <i className="las la-comments"></i>
                                </span>
                                <span className="btn-arrow__text">
                                    Talk to a Specialist
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ModernHomeSupport
