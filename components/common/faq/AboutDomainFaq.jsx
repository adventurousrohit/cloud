import Link from "next/link";

const AboutDomainFaq = () => {
  return (
    <>
       <div className="container">
        <div className="faq-domain-wrapper bg-dark px-4 px-sm-10 py-16 position-relative z-1">
            <img src="/img/shape/faq-domain-shape.png" alt="image" className="img-fluid position-absolute top-0 start-0 z-n1"/>
            <div className="row align-items-center g-4">
                <div className="col-lg-5">
                    <h2 className="text-white mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">FAQ About Domains</h2>
                    <p className="mb-0 text-white" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Control and more resources or for when you no longer want to be the
                        restrictions of a shared hosting account.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-semibold rounded transition mt-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="btn-arrow__text">
                            Contact Us
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-7">
                    <div className="accordion accordion-transparent d-flex flex-column" id="accordionFaqMain">
                        <div className="accordion-item rounded-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header" id="faq-headingOne">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne" aria-expanded="true" aria-controls="faq-collapseOne">
                                    <span className="fs-16 fw-bold">What is Shared hosting?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseOne" className="accordion-collapse collapse show" aria-labelledby="faq-headingOne" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                    to your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your
                                    site — this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header" id="faq-headingTwo">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwo" aria-expanded="false" aria-controls="faq-collapseTwo">
                                    <span className="fs-16 fw-bold">How many websites can I host?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwo" className="accordion-collapse collapse" aria-labelledby="faq-headingTwo" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                    to your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your
                                    site — this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header" id="faq-heading3">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3" aria-expanded="false" aria-controls="faq-collapse3">
                                    <span className="fs-16 fw-bold">Do you include SSL Certificates?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3" className="accordion-collapse collapse" aria-labelledby="faq-heading3" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                    to your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your
                                    site — this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header" id="faq-heading4">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4" aria-expanded="false" aria-controls="faq-collapse4">
                                    <span className="fs-16 fw-bold">How to manage Redirects in cPanel?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4" className="accordion-collapse collapse" aria-labelledby="faq-heading4" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                    to your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your
                                    site — this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header" id="faq-heading5">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse5" aria-expanded="false" aria-controls="faq-collapse5">
                                    <span className="fs-16 fw-bold">ow to use the Track Delivery feature in the
                                        cPanel?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse5" className="accordion-collapse collapse" aria-labelledby="faq-heading5" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add
                                    to your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your
                                    site — this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item rounded-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header" id="faq-heading6">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse6" aria-expanded="false" aria-controls="faq-collapse6">
                                    <span className="fs-16 fw-bold">ow to use the Track Delivery feature in the
                                        cPanel?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse6" className="accordion-collapse collapse" aria-labelledby="faq-heading6" data-bs-parent="#accordionFaqMain">
                                <div className="accordion-body">We care about safety big time — and so do your site's
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
    </>
  )
};

export default AboutDomainFaq
