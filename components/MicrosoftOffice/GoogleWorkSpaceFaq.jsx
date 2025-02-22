import Link from "next/link";

const GoogleWorkSpaceFaq= () => {
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
      <div className="accordion border-0" id="accordionFaq2">
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
              <span className="text-body fs-16 fw-bold">
                What is Microsoft 365 and how can it help my business?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapseOneA"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Microsoft 365 is a cloud-based suite of productivity tools including Word, Excel, PowerPoint, Teams, and more. It enhances collaboration, communication, and efficiency by allowing your team to access documents and apps from anywhere, at any time, while ensuring data security and seamless updates.
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
              <span className="text-body fs-16 fw-bold">
                How do I select the right Microsoft 365 plan for my business?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapseTwoA"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Cloudminister provides customized advice to help you choose the right Microsoft 365 plan for your business. Whether you are a small business or an enterprise, we have solutions that suit your workflow and collaboration needs.
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
              <span className="text-body fs-16 fw-bold">
                Is my data safe with Microsoft 365?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapse3A"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Yes, Microsoft 365 gives us industry-leading security, including encryption, multi-factor authentication, and frequent security updates. We also protect your data by offering robust protection and data backup services at Cloudminister.
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
              <span className="text-body fs-16 fw-bold">
                Can I access Microsoft 365 apps on multiple devices?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapse4A"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Yes, Microsoft 365 is accessible across multiple devices, such as computers, tablets, and smartphones, which provides you and your team with productivity, wherever you are.
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

export default GoogleWorkSpaceFaq