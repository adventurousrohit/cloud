import React from 'react'
import { Link} from 'react-router-dom';
function SslHero() {
  return (
    <>
        <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container pt-120 pb-60">
            <div className="row align-items-center">
                <div className="col-lg-7 col-xl-6">
                <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                Affordable     <span className="text-success-new"> Microsoft Office 365 </span> {" "}
                Plans for enterprises and SMBs 
                    </h1>
                    <p className="mb-8 text-white max-text-50 text-opacity-75" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Explore the complete possibility of your business with Microsoft 365. Smarter tools to streamline collaboration and cloud-based solutions that ensure smooth workflows - these are the services that are designed to bring better outcomes. Enjoy better productivity, secure communication, and innovative features suited to your needs. Let Microsoft 365 redefine how you work and succeed.
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
                    <img src="/email/Microsoft Office 365.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  
  )
}

export default SslHero
