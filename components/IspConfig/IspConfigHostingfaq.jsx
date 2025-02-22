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
                            ISPConfig Server Management – FAQs
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
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapseOneA"
              aria-expanded="false"
              aria-controls="faq-collapseOneA"
            >
              <span className="text-body fs-16 fw-bold">ISPConfig Server Management: What is it?</span>
            </button>
          </h2>
          <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              ISPConfig Server Management encompasses configuration, optimization, and ongoing monitoring of your ISPConfig-controlled servers for optimal performance, security, and uptime.
            </div>
          </div>
        </div>
        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapseTwoA"
              aria-expanded="false"
              aria-controls="faq-collapseTwoA"
            >
              <span className="text-body fs-16 fw-bold">What's covered in your ISPConfig Support Services?</span>
            </button>
          </h2>
          <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Our ISPConfig Support Plan covers system administration, security audits, software updates, patch management, and proactive server optimization to deliver superior performance and reliability.
            </div>
          </div>
        </div>
        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse3A"
              aria-expanded="false"
              aria-controls="faq-collapse3A"
            >
              <span className="text-body fs-16 fw-bold">Do you provide migration services for ISPConfig servers?</span>
            </button>
          </h2>
          <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Yes, CloudMinister offers hassle-free ISPConfig System Administration Services for server migration, ensuring that there would be minimal downtime and safe transfer.
            </div>
          </div>
        </div>
        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse4A"
              aria-expanded="false"
              aria-controls="faq-collapse4A"
            >
              <span className="text-body fs-16 fw-bold">How do I avail of the ISPConfig Server Management offered by CloudMinister?</span>
            </button>
          </h2>
          <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              All you need to do is reach out to our team; we will craft an ISPConfig Server Management Plan perfectly suited to your business needs for expert support and maximum performance from day one.
            </div>
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