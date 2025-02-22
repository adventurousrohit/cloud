const DomainFaq = () => {
  return (
    <>
      <div className="pt-120 pb-120">
        <div className="pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div
                  className="text-center"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span
                    className="fs-18 fw-semibold text-primary mb-2"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    FAQ
                  </span>
                  <h2>Domain Registration – FAQs</h2>
                  {/* <p className="mb-0 max-text-52 mx-auto">
                    The best thing we love about Hostcity is it does two-way
                    sync with Google us to better organize & keep everything on
                    track.
                  </p> */}
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
                        What is Domain Registration, and why do I need it?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="faq-collapseOneA"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body pt-0">
                      Domain registration is the process of obtaining a unique
                      web address (domain name) for your personal or company
                      website. It is critical for developing your online brand
                      and ensuring that your target audience can simply find
                      you.
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
                        How Do I Select the Right Domain Name?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="faq-collapseTwoA"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body pt-0">
                      Choose a domain name that is short, distinctive, and
                      relevant to your brand. Consider keywords that are
                      relevant to your business, avoid hyphens, and use.com or
                      other known extensions for credibility.
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
                        How Long Does It Take To Register A Domain?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="faq-collapse3A"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body pt-0">
                      Domain registration typically takes minutes, but it might
                      take up to 24 hours for the domain to properly disseminate
                      across the internet. Our experts will accompany you
                      through each step to ensure a seamless transaction.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainFaq;
