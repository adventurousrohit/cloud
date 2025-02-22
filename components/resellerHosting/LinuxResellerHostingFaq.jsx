import Link from "next/link";

const LinuxResellerHostingFaq = () => {
  return (
    <>
         <div className="pt-120 pb-120" style={{background:"#1062FE0D"}}>
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
                                    <span className="text-body fs-16 fw-bold"> Do you provide White Label reseller hosting ?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Yes , we do provide and setup white label reseller hosting and name servers .</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                                    <span className="text-body fs-16 fw-bold">Can I do overselling on my reseller plan ?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">yes we do enable overselling , calculation of selling will be done with used disk space instead of assigned disk space.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                                    <span className="text-body fs-16 fw-bold">Do you support migration from different provider for new reseller ?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Yes we do assist in migration from third party provider .</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">Do I get a control panel to manage my hosting plan?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Yes WHM / cpanel control panel will be there to manage your windows web hosting .</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">Is there a Money Back Guarantee?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Yes , 30 days money back guarantee is there.</div>
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

export default LinuxResellerHostingFaq