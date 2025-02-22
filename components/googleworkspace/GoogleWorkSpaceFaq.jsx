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
                            <h2>
                            Google Workspace – FAQs
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
  <div className="row g-4 justify-content-center">
    <div className="col-lg-10 col-xl-8">
      <div
        className="accordion border-0 vps-hosting-accordion"
        id="accordionFaq2"
      >
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
                What is Google Workspace, and how can it help my business?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapseOneA"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Google Workspace is the suite of tools that makes business
              productivity and teamwork easier. Among these are the tools Gmail,
              Google Drive, Docs, and Meet. Businesses can streamline
              communications, store their files securely, and work with multiple
              people in real time, helping to make workflow more efficient.
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
                Is Google Workspace safe for my data?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapseTwoA"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Google Workspace provides advanced encryption, two-factor
              authentication, and frequent updates to ensure security with
              regards to data. With strong protection against cyber threats and
              regular backup, it means your data is safe and secure while
              accessible only to authorized users.
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
              data-bs-target="#faq-collapseThreeA"
              aria-expanded="false"
              aria-controls="faq-collapseThreeA"
            >
              <span className="text-body fs-16 fw-bold">
                Can I customize Google Workspace for my team's needs?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapseThreeA"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              Absolutely! Google Workspace is flexible in terms of plans and
              features, allowing customization to fit your team's specific
              requirements. From user permissions to tool integrations, you can
              tailor it to align perfectly with your business needs.
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
              data-bs-target="#faq-collapseFourA"
              aria-expanded="false"
              aria-controls="faq-collapseFourA"
            >
              <span className="text-body fs-16 fw-bold">
                How easy is it to migrate to Google Workspace?
              </span>
            </button>
          </h2>
          <div
            id="faq-collapseFourA"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFaq2"
          >
            <div className="accordion-body pt-0">
              The transition of migration to Google Workspace is streamlined
              with CloudMinister. Your data, email, and configuration are moved
              there securely with least or no down time through smooth migration
              handled by our experts.
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