import { Link } from 'react-router-dom';

const CpanelHostingfaq = () => {
  return (
    <>
      <div className="pt-120 pb-120">
        <div className="pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <span className="fs-18 fw-semibold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    FAQ
                  </span>
                  <h2>Python Hosting – FAQs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="accordion border-0 python-hosting-accordion" id="accordionFaqPython">
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseOnePython"
                      aria-expanded="false"
                      aria-controls="faq-collapseOnePython"
                    >
                      <span className="text-body fs-16 fw-bold">What is Python hosting?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseOnePython" className="accordion-collapse collapse show" data-bs-parent="#accordionFaqPython">
                    <div className="accordion-body pt-0">
                      Python hosting is an enhanced service that supports the deployment, management, and optimization of running Python-based applications and websites on powerful, secure servers.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseTwoPython"
                      aria-expanded="false"
                      aria-controls="faq-collapseTwoPython"
                    >
                      <span className="text-body fs-16 fw-bold">Why CloudMinister for Python hosting?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseTwoPython" className="accordion-collapse collapse" data-bs-parent="#accordionFaqPython">
                    <div className="accordion-body pt-0">
                      CloudMinister provides you with high-performance, optimized Python hosting with greater security, expert support, and guarantees that your Python app will run smoothly and
                      efficiently.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseThreePython"
                      aria-expanded="false"
                      aria-controls="faq-collapseThreePython"
                    >
                      <span className="text-body fs-16 fw-bold">What types of Python applications can be hosted?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseThreePython" className="accordion-collapse collapse" data-bs-parent="#accordionFaqPython">
                    <div className="accordion-body pt-0">
                      You can host different Python applications, including web apps, APIs, data processing tools, and machine learning models on our secure and scalable infrastructure.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseFourPython"
                      aria-expanded="false"
                      aria-controls="faq-collapseFourPython"
                    >
                      <span className="text-body fs-16 fw-bold">Can I scale my Python hosting as my app grows?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseFourPython" className="accordion-collapse collapse" data-bs-parent="#accordionFaqPython">
                    <div className="accordion-body pt-0">
                      Yes, CloudMinister provides scalable Python hosting solutions where you can upgrade your resources with ease as your app traffic and complexity increase.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseFivePython"
                      aria-expanded="false"
                      aria-controls="faq-collapseFivePython"
                    >
                      <span className="text-body fs-16 fw-bold">How much does Python hosting cost?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseFivePython" className="accordion-collapse collapse" data-bs-parent="#accordionFaqPython">
                    <div className="accordion-body pt-0">
                      Our Python hosting plans are designed to be cost-effective, with flexible pricing based on your resource needs, so you get the best value for your budget.
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

export default CpanelHostingfaq;
