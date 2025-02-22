import Link from "next/link";

const CpanelHostingfaq = () => {
  return (
    <>
         <div className="pt-120 pb-120">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="fs-18 fw-semibold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                                data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                FAQ
                            </span>
                            <h2>
                            Frequently Asked Queries
                            </h2>
                            {/* <p className="mb-0 max-text-52 mx-auto">
                                The best thing we love about Hostcity is it does two-way sync with Google us to better
                                organize & keep everything on track.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="accordion border-0 vps-hosting-accordion" id="accordionFaq2">
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOneA" aria-expanded="false" aria-controls="faq-collapseOneA">
                                    <span className="text-body fs-16 fw-bold"> What are Plesk Server Management Services?  </span>
                                </button>
                            </h2>
                            <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Plesk Server Management Services provides comprehensive solutions for managing, monitoring, and optimizing Plesk-based servers. These services ensure your server's stability, security, and performance.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                                    <span className="text-body fs-16 fw-bold">Why choose a Plesk Support Plan for my business?  </span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">A Plesk Support Plan offers tailored solutions to maintain your server’s uptime, handle software updates, and address technical issues promptly.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                                    <span className="text-body fs-16 fw-bold">What is in your Plesk Server Management Plan?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Our plan includes 24x7 cPanel Server Monitoring, security enhancements, performance tuning, and proactive maintenance to keep your server running smoothly.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">How can your server management company benefit my Plesk hosting environment? </span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Our server management company specializes in Plesk System Administration Services, offering expertise in troubleshooting, updates, and server optimization.

</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">Do you offer Outsourced cPanel Server Support Services? </span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Yes, we offer low-cost outsourced cPanel Server Support Services to make sure your hosting infrastructure is always reliable and efficient.</div>
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

export default CpanelHostingfaq