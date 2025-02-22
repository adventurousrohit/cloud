import { Link } from 'react-router-dom';

const ModernHomeFooter = () => {
  return (
    <>
           <section className="pt-20" style={{marginBottom:"-42px",position:"relative",zIndex:"10"}}>
        <div className="container">
            <div className="bg-white px-6 pt-80 pb-80 rounded-4 position-relative z-1">
                <img src="/img/shape/support-8-shape.png" alt="image" className="img-fluid position-absolute start-0 bottom-0 z-n1 d-none d-lg-block"/>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h3>
                            Join the Dream Team at CloudMinister!
                            </h3>
                            <p className="mb-6">
                            Be part of an innovative team at CloudMinister, where your ideas thrive, skills grow, and every day brings exciting opportunities to excel!
                            </p>
                            <a href="mailto:hr@cloudminister.com"  className="btn btn-warning btn-arrow btn-arrow-xl btn-lg fs-14 fw-medium rounded">
                                <span className="btn-arrow__text">
                                    Apply Now
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ModernHomeFooter
