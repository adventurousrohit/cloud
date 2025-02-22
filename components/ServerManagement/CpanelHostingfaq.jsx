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
                            Server Management – FAQs
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
                            <span className="text-body fs-16 fw-bold">What is server management, and why is it important for my business?</span>
                        </button>
                    </h2>
                    <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">The act of server management essentially calls for maintaining, securing, and optimizing your servers. It enhances better performance, reliability, and ensures security of servers; ultimately minimizing downtime and accelerating websites on web servers.</div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                            <span className="text-body fs-16 fw-bold">How can my business benefit from outsourced server management?</span>
                        </button>
                    </h2>
                    <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">Outsourced server management lets you focus on core business activities while experts handle the maintenance, updates, and security of your server. It reduces costs, improves efficiency, and includes 24/7 monitoring.</div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                            <span className="text-body fs-16 fw-bold">What does CloudMinister's server management include?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">Our service includes setting up your servers and continuously monitoring them; regular software updates, security management, and troubleshooting. We ensure that your server is optimized for performance, security, and uptime.</div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                            <span className="text-body fs-16 fw-bold">How safe are your services for managing your server?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">Our services employ virus scanning, malware detection, use of SSL certificates, and constant monitoring to ensure protection for all your servers at all times.</div>
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