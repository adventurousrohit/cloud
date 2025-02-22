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
                  <h2>Domain Transfer – FAQs</h2>
                  <p className="mb-0 max-text-52 mx-auto">
                    The best thing we love about Hostcity is it does two-way
                    sync with Google us to better organize & keep everything on
                    track.
                  </p>
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
                        What is a domain transfer, and why should I consider it?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="faq-collapseOneA"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body pt-0">
                      A domain transfer involves moving your domain name from
                      one registrar to another. It’s ideal if you’re looking for
                      better pricing, features, or customer support, or
                      consolidating domains under a single registrar for easier
                      management.
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
                        How long does a domain transfer take?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="faq-collapseTwoA"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body pt-0">
                      The process typically takes 5–7 days, depending on the
                      current and new registrars. Ensure your domain is
                      unlocked, and you have the authorization (EPP) code to
                      avoid delays.
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
                        Will my website experience downtime during a domain
                        transfer?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="faq-collapse3A"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body pt-0">
                      No, domain transfers don’t affect your website’s operation
                      as long as your DNS settings remain unchanged. Ensure your
                      hosting and domain services are separate to maintain
                      seamless access.
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
