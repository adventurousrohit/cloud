
const ControlPanelAbout = () => {
  return (
    <>
       <section className="pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-10">Streamlined Website Management
                            for Effortless Operation</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center g-4">
                <div className="col-lg-5">
                    <div className="accordion accordion-home-5 d-flex flex-column gap-4" id="accordionFaqMain">
                        <div className="accordion-item rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne1" aria-expanded="true" aria-controls="faq-collapseOne1">
                                    <span className="d-flex align-items-center gap-3">
                                        <img src="/img/control-faq-icon-1.png" alt="icon" className="img-fluid"/>
                                        <span className="text-black fs-16 fw-bold"> What is Shared hosting?</span>
                                    </span>
                                </button>
                            </h2>
                            <div id="faq-collapseOne1" className="accordion-collapse collapse show" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwo2" aria-expanded="false" aria-controls="faq-collapseTwo2">
                                    <span className="d-flex align-items-center gap-3">
                                        <img src="/img/control-faq-icon-2.png" alt="icon" className="img-fluid"/>
                                        <span className="text-black fs-16 fw-bold">How many websites can I host?</span>
                                    </span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse33" aria-expanded="false" aria-controls="faq-collapse33">
                                    <span className="d-flex align-items-center gap-3">
                                        <img src="/img/control-faq-icon-1.png" alt="icon" className="img-fluid"/>
                                        <span className="text-black fs-16 fw-bold">Do you include SSL Certificates?</span>
                                    </span>
                                </button>
                            </h2>
                            <div id="faq-collapse33" className="accordion-collapse collapse" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <img src="/img/control-faq.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ControlPanelAbout
