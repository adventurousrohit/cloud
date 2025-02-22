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
                            Digital Ocean Server Management – FAQs 
                            </h2>
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
                                    <span className="text-body fs-16 fw-bold">What is included in DigitalOcean server management? </span>
                                </button>
                            </h2>
                            <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Our management service covers everything from server setup and optimization to daily maintenance, software updates, performance monitoring, and data protection. We ensure your server operates efficiently while you focus on your business. </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                                    <span className="text-body fs-16 fw-bold">Can you customize the management based on my needs?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Absolutely! Our team provides tailored solutions to fit your specific requirements. Be it optimization, backups, or regular maintenance; we create a personalized management plan for your DigitalOcean server.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                                    <span className="text-body fs-16 fw-bold">How do you monitor server performance?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">We use advanced tools to track critical server metrics like CPU usage, bandwidth, and storage. Our proactive monitoring ensures that your server handles traffic surges and avoids downtime, keeping your website running smoothly.  </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold"> How often are backups performed?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">We have daily backups as part of our service to secure your data. In case of accidental deletion or server issues, we can restore your files quickly and minimize disruptions. </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold"> Do you help with server scaling?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Yes, our experts help you scale your DigitalOcean server according to the growth of your website. If you need more storage, better performance, or enhanced features, we will recommend it and help implement it for you.</div>
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