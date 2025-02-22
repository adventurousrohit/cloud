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
                            Google Cloud Hosting – FAQs
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
        <div
          className="accordion-item border rounded-3 mb-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapseOneA"
              aria-expanded="false"
              aria-controls="faq-collapseOneA"
            >
              <span className="text-body fs-16 fw-bold">What is Google Cloud Hosting?</span>
            </button>
          </h2>
          <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Google Cloud Hosting allows a business to host sites, applications, and data in Google's secure cloud
              infrastructure, where it runs reliable performance with high uptime, and with flexible pricing plans
              supporting different needs of businesses.
            </div>
          </div>
        </div>
        <div
          className="accordion-item border rounded-3 mb-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapseTwoA"
              aria-expanded="false"
              aria-controls="faq-collapseTwoA"
            >
              <span className="text-body fs-16 fw-bold">How much does Google Cloud Hosting cost?</span>
            </button>
          </h2>
          <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Google Cloud Hosting employs a pay-as-you-go model, thus meaning that you pay for what you use. Prices
              range based on factors like storage, compute power, and data transfer. It comes in customizable plans,
              ideal for different business sizes and requirements.
            </div>
          </div>
        </div>
        <div
          className="accordion-item border rounded-3 mb-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse3A"
              aria-expanded="false"
              aria-controls="faq-collapse3A"
            >
              <span className="text-body fs-16 fw-bold">Advantages of using Google Cloud Hosting</span>
            </button>
          </h2>
          <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              The benefits include high security, global scalability, high-speed performance, and integration with
              advanced tools such as BigQuery and Kubernetes. It is best for businesses that require flexibility,
              reliability, and cost-effectiveness.
            </div>
          </div>
        </div>
        <div
          className="accordion-item border rounded-3 mb-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse4A"
              aria-expanded="false"
              aria-controls="faq-collapse4A"
            >
              <span className="text-body fs-16 fw-bold">Is Google Cloud Hosting secure?</span>
            </button>
          </h2>
          <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Yes. Google Cloud Hosting has incorporated the latest security measures. These include encryption,
              periodic audits, and adherence to industry standards to ensure the safety for your data and applications.
            </div>
          </div>
        </div>
        <div
          className="accordion-item border rounded-3 mb-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-collapse5A"
              aria-expanded="false"
              aria-controls="faq-collapse5A"
            >
              <span className="text-body fs-16 fw-bold">Can I move my existing website to Google Cloud Hosting?</span>
            </button>
          </h2>
          <div id="faq-collapse5A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Absolutely! Google provides tools and support to help you seamlessly migrate your website, applications,
              and data to its platform with minimal downtime.
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