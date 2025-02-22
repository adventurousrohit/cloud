
const ControlPanelAboutTwo = () => {
  return (
    <>
        <section className="pt-120 pb-60">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7">
                    <img src="/img/control-faq-2.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
                <div className="col-xl-5">
                    <div className="position-relative z-1">
                        <h2 className="mb-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Control Panel You Already Know & Love</h2>
                        <div className="accordion accordion-home-5 d-flex flex-column gap-4" id="accordionFaqMain2">
                            <div className="accordion-item rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <h2 className="accordion-header" id="faq-headingOne">
                                    <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne" aria-expanded="true" aria-controls="faq-collapseOne">
                                        <span className="d-flex align-items-center gap-3">
                                            <img src="/img/control-faq-icon-1.png" alt="icon"
                                                className="img-fluid"/>
                                            <span className="text-black fs-16 fw-bold"> What is Shared hosting?</span>
                                        </span>
                                    </button>
                                </h2>
                                <div id="faq-collapseOne" className="accordion-collapse collapse show" aria-labelledby="faq-headingOne" data-bs-parent="#accordionFaqMain2">
                                    <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                        visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                        to your site. In this day and age, having an SSL for your site is a no-brainer best
                                        practice. Not only does an SSL help your visitors feel safe interacting with your
                                        site — this is particularly important if you run an e-commerce site.</div>
                                </div>
                            </div>
                            <div className="accordion-item rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <h2 className="accordion-header" id="faq-headingTwo">
                                    <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwo" aria-expanded="false" aria-controls="faq-collapseTwo">
                                        <span className="d-flex align-items-center gap-3">
                                            <img src="/img/control-faq-icon-2.png" alt="icon"
                                                className="img-fluid"/>
                                            <span className="text-black fs-16 fw-bold">How many websites can I host?</span>
                                        </span>
                                    </button>
                                </h2>
                                <div id="faq-collapseTwo" className="accordion-collapse collapse" aria-labelledby="faq-headingTwo" data-bs-parent="#accordionFaqMain2">
                                    <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                        visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                        to your site. In this day and age, having an SSL for your site is a no-brainer best
                                        practice. Not only does an SSL help your visitors feel safe interacting with your
                                        site — this is particularly important if you run an e-commerce site.</div>
                                </div>
                            </div>
                            <div className="accordion-item rounded-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                <h2 className="accordion-header" id="faq-heading3">
                                    <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3" aria-expanded="false" aria-controls="faq-collapse3">
                                        <span className="d-flex align-items-center gap-3">
                                            <img src="/img/control-faq-icon-1.png" alt="icon"
                                                className="img-fluid"/>
                                            <span className="text-black fs-16 fw-bold">Do you include SSL Certificates?</span>
                                        </span>
                                    </button>
                                </h2>
                                <div id="faq-collapse3" className="accordion-collapse collapse" aria-labelledby="faq-heading3" data-bs-parent="#accordionFaqMain2">
                                    <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                        visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                        to your site. In this day and age, having an SSL for your site is a no-brainer best
                                        practice. Not only does an SSL help your visitors feel safe interacting with your
                                        site — this is particularly important if you run an e-commerce site.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ControlPanelAboutTwo
