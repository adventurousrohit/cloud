import Link from "next/link";

const DdosSupport = () => {
  return (
    <>
      <section className="pt-120 pb-60">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-lg-6">
                    <div className="d-inline-flex align-items-center gap-2 mb-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="w-2 h-2 rounded-circle bg-primary"></div>
                        <small className="text-primary fw-bold">24/7 Support </small>
                    </div>
                    <h2 className="mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Unwavering Assistance Expert DDoS Support</h2>
                    <p className="mb-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Our system monitors network traffic and routes malicious activity
                        to our attack
                        mitigation farm as soon as a DDoS event is detected, generally within 60 seconds. <br/> <br/>

                        Our system monitors network traffic and routes malicious activity to our attack mitigation farm as
                        soon as a DDoS event is detected, generally within 60 seconds.</p>
                    <Link href="/contact" className="btn btn-outline-primary btn-lg fs-14 fw-semibold rounded text-primary" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Contact Sales</Link>
                </div>
                <div className="col-lg-6">
                    <img src="/img/ddos-support.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DdosSupport
