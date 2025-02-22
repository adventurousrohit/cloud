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
                            Cyber Security Services – FAQs
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
        
        <div className="accordion-item border rounded-3 mb-4">
          <h2 className="accordion-header">
            <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOneA" aria-expanded="false">
              <span className="text-body fs-16 fw-bold">What is cybersecurity, and why is it important for my business?</span>
            </button>
          </h2>
          <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Cybersecurity refers to the protection of your digital assets, including data, networks, and devices, from cyber threats such as hacking, malware, and phishing. It ensures the confidentiality, integrity, and availability of your information so that your business activities and reputation can be safeguarded.
            </div>
          </div>
        </div>

        <div className="accordion-item border rounded-3 mb-4">
          <h2 className="accordion-header">
            <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false">
              <span className="text-body fs-16 fw-bold">How does CloudMinister ensure my data remains secure?</span>
            </button>
          </h2>
          <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              At CloudMinister, advanced security measures such as encryption, firewalls, and threat monitoring are in place with regular security audits. This proactive approach recognizes risks and mitigates them before they affect business activity, ensuring that it sufficiently guards your sensitive data.
            </div>
          </div>
        </div>

        <div className="accordion-item border rounded-3 mb-4">
          <h2 className="accordion-header">
            <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseThreeA" aria-expanded="false">
              <span className="text-body fs-16 fw-bold">Can CloudMinister protect against ransomware and malware attacks?</span>
            </button>
          </h2>
          <div id="faq-collapseThreeA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Yes, our cybersecurity solutions include advanced malware detection, endpoint security, and real-time threat monitoring to protect against ransomware and malware. We also provide incident response services to minimize damage if an attack occurs.
            </div>
          </div>
        </div>

        <div className="accordion-item border rounded-3 mb-4">
          <h2 className="accordion-header">
            <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseFourA" aria-expanded="false">
              <span className="text-body fs-16 fw-bold">Can you help my business comply with cybersecurity regulations?</span>
            </button>
          </h2>
          <div id="faq-collapseFourA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
            <div className="accordion-body pt-0">
              Yes, we specialize in ensuring compliance with industry standards and regulations. Our experts implement tailored security measures to meet specific compliance requirements, protecting your business from legal and financial risks.
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