import React from 'react'
import { Link} from 'react-router-dom';
function SslHero() {
  return (
    <>
        <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-xl-6">
                    
                    <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  
                    Stay Secure, Stay Trusted: Get Your<span className="text-success-new"> SSL Certificate</span> Today!
                    </h1>
                    <p className="mb-8 text-white max-text-40 text-opacity-75" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Effortless security and trust with CloudMinister's reliable SSL.
                    </p>
                    <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="btn-arrow__text">
                            Get Started
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-5 col-xl-6 text-lg-end">
                    <img src="/email/SSL.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  
  )
}

export default SslHero
