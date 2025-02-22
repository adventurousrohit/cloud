import Link from "next/link";

const SslCertificatesFaq = () => {
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
                            SSL Certificate – FAQs
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
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOneA" aria-expanded="false" aria-controls="faq-collapseOneA">
                            <span className="text-body fs-16 fw-bold">What is an SSL certificate, and why does my website need it?</span>
                        </button>
                    </h2>
                    <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            Sensitive data, like passwords and payment information, is protected by an SSL certificate, which encrypts data sent back and forth between your website and its users. It's crucial for enhancing SEO rankings, fostering trust, and safeguarding your website from online attacks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                            <span className="text-body fs-16 fw-bold">How does an SSL certificate enhance my website's reputation?</span>
                        </button>
                    </h2>
                    <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            SSL certificates display visual indicators such as a padlock or "https" in the browser, which gives visitors the message that your site is secure. This will boost customer confidence to make transactions and engage with your website.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                            <span className="text-body fs-16 fw-bold">Does an SSL certificate enhance my website's SEO?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            Yes, Google favors secure sites with SSL, thus giving them a ranking advantage. Adding SSL will increase your chances of ranking higher on search engine results pages, bringing more traffic to your site.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                            <span className="text-body fs-16 fw-bold">Is it mandatory for all websites to have SSL certificates?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            No, SSL certificates are not legally mandatory, but they are a must-have. Browsers such as Chrome mark non-secure sites as "Not Secure," which may discourage visitors and damage the credibility of your site.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse5A" aria-expanded="false" aria-controls="faq-collapse5A">
                            <span className="text-body fs-16 fw-bold">Does an SSL certificate increase sales?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse5A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            Absolutely! With security and, therefore, trust, an SSL certificate will drive users to complete purchases or provide information, resulting in higher conversions and revenue.
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

export default SslCertificatesFaq