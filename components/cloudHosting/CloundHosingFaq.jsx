import Link from "next/link";

const CloundHosingFaq = () => {
  return (
    <>
       <div className="pt-120 pb-60">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xxl-7 text-center">
                    <h2 className="mb-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Do You Have Questions About Our Cloud Server?
                    </h2>
                    <p className="max-text-56 mx-auto" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        Contact one of our friendly technical advisors now. Our team is available 24x7 via live chat and is
                        ready to answer any questions you may have.
                    </p>
                    <Link href="/contact/" className="btn btn-success btn-arrow btn-arrow-md fs-14 fw-semibold rounded-pill" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="btn-arrow__text">
                            Live Chat Support
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>


    <div className="pt-60 pb-120">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="mb-4">
                        Cloud Server Frequently
                        Asked Question.
                    </h2>
                    <p className="mb-0">
                        Control and more resources or for when you no longer want to be limited by therestrictions of a
                        shared hosting account.
                    </p>
                </div>
                <div className="col-lg-6" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="accordion border-0 vps-hosting-accordion" id="accordionFaq">
                        <div className="accordion-item border rounded-3 mb-4">
                            <h2 className="accordion-header" id="faq-headingOne">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne" aria-expanded="false" aria-controls="faq-collapseOne">
                                    <span className="text-body fs-16 fw-bold">What is Shared hosting?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseOne" className="accordion-collapse collapse show" aria-labelledby="faq-headingOne" data-bs-parent="#accordionFaq">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4">
                            <h2 className="accordion-header" id="faq-headingTwo">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwo" aria-expanded="false" aria-controls="faq-collapseTwo">
                                    <span className="text-body fs-16 fw-bold">How many websites can I host?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwo" className="accordion-collapse collapse" aria-labelledby="faq-headingTwo" data-bs-parent="#accordionFaq">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4">
                            <h2 className="accordion-header" id="faq-heading3">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3" aria-expanded="false" aria-controls="faq-collapse3">
                                    <span className="text-body fs-16 fw-bold">Do you include SSL Certificates?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3" className="accordion-collapse collapse" aria-labelledby="faq-heading3" data-bs-parent="#accordionFaq">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4">
                            <h2 className="accordion-header" id="faq-heading4">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4" aria-expanded="false" aria-controls="faq-collapse4">
                                    <span className="text-body fs-16 fw-bold">ow to use the Track Delivery feature in the
                                        cPanel?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4" className="accordion-collapse collapse" aria-labelledby="faq-heading4" data-bs-parent="#accordionFaq">
                                <div className="accordion-body pt-0">We care about safety big time — and so do your site's
                                    visitors. With a Shared Hosting account, you get an SSL certificate for free to add to
                                    your site. In this day and age, having an SSL for your site is a no-brainer best
                                    practice. Not only does an SSL help your visitors feel safe interacting with your site —
                                    this is particularly important if you run an e-commerce site.</div>
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

export default CloundHosingFaq
