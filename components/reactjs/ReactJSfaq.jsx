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
                  <h2>React.JS Hosting – FAQs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="accordion border-0 react-hosting-accordion" id="accordionFaqReact">
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseOneReact"
                      aria-expanded="false"
                      aria-controls="faq-collapseOneReact"
                    >
                      <span className="text-body fs-16 fw-bold">What is ReactJS web hosting, and why do I need it for my app?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseOneReact" className="accordion-collapse collapse show" data-bs-parent="#accordionFaqReact">
                    <div className="accordion-body pt-0">
                      ReactJS web hosting is a service that hosts applications based on React. It ensures your application runs smoothly with optimal performance and fast load times. Proper hosting is
                      essential for seamless user experiences and scalability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseTwoReact"
                      aria-expanded="false"
                      aria-controls="faq-collapseTwoReact"
                    >
                      <span className="text-body fs-16 fw-bold">Can I host my React app on Azure?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseTwoReact" className="accordion-collapse collapse" data-bs-parent="#accordionFaqReact">
                    <div className="accordion-body pt-0">
                      Yes, hosting your React apps on Azure is an excellent choice. Azure provides reliable cloud services and scalable infrastructure, making it perfect for deploying and managing
                      React apps. You can also integrate Azure features like security, databases, and analytics for enhanced app performance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseThreeReact"
                      aria-expanded="false"
                      aria-controls="faq-collapseThreeReact"
                    >
                      <span className="text-body fs-16 fw-bold">What are the advantages of using specialized React hosting?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseThreeReact" className="accordion-collapse collapse" data-bs-parent="#accordionFaqReact">
                    <div className="accordion-body pt-0">
                      Specialized React hosting ensures faster build times, smooth deployment, and optimal performance for React-based applications. Features like static site generation, automatic
                      updates, and custom domains help modern React apps thrive.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseFourReact"
                      aria-expanded="false"
                      aria-controls="faq-collapseFourReact"
                    >
                      <span className="text-body fs-16 fw-bold">How do I deploy my React app?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseFourReact" className="accordion-collapse collapse" data-bs-parent="#accordionFaqReact">
                    <div className="accordion-body pt-0">
                      Deploying a React app is easy with modern hosting services. You can either use manual deployment with CLI tools or integrate CI/CD pipelines. Hosting platforms offer
                      straightforward ways to upload build files and launch your app quickly, minimizing downtime.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapseFiveReact"
                      aria-expanded="false"
                      aria-controls="faq-collapseFiveReact"
                    >
                      <span className="text-body fs-16 fw-bold">Why should I choose your React JS hosting service?</span>
                    </button>
                  </h2>
                  <div id="faq-collapseFiveReact" className="accordion-collapse collapse" data-bs-parent="#accordionFaqReact">
                    <div className="accordion-body pt-0">
                      Our React JS hosting service provides unparalleled speed, scalability, and performance. Whether you're building small apps or enterprise-level solutions, we offer an optimized
                      environment with enhanced security, uptime, and easy integration with Azure or other cloud platforms.
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
