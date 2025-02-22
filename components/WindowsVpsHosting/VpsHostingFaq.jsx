import { useState } from "react";

const faqData = {
    faqs: [
      {
        id: 1,
        question: "What is Shared hosting?",
        answer:
          "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.",
        isOpen: true, // Default open for the first FAQ
      },
      {
        id: 2,
        question: "How many websites can I host?",
        answer:
          "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.",
        isOpen: false,
      },
      {
        id: 3,
        question: "Do you include SSL Certificates?",
        answer:
          "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.",
        isOpen: false,
      },
      {
        id: 4,
        question: "How to use the Track Delivery feature in the cPanel?",
        answer:
          "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.",
        isOpen: false,
      },
    ],
    image: {
      src: "/img/vps-hosting/-faq-img.png",
      alt: "VPS Hosting FAQ",
    },
  };
  
const VpsHostingFaq = () => {
    const [faqs, setFaqs] = useState(faqData.faqs);

    const toggleFaq = (index) => {
      setFaqs(
        faqs.map((faq, i) => ({
          ...faq,
          isOpen: i === index ? !faq.isOpen : false, // Toggle only the clicked FAQ
        }))
      );
    };
  return (
    <>
      <div className="pt-120 pb-120">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2>
                                Windows VPS Hosting
                                with Plesk
                            </h2>
                            <p className="mb-0 max-text-52 mx-auto">
                                Control and more resources or for when you no longer want to be limited by the
                                restrictions of a shared hosting account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
      <div className="row g-4 align-items-center">
        {/* Accordion Section */}
        <div className="col-lg-6 col-xxl-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
          <div className="accordion border-0 vps-hosting-accordion" id="accordionFaq">
            {faqs.map((faq, index) => (
              <div className="accordion-item border rounded-3 mb-4" key={faq.id}>
                <h2 className="accordion-header" id={`faq-heading${faq.id}`}>
                  <button
                    className={`accordion-button bg-transparent ${faq.isOpen ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={faq.isOpen}
                    aria-controls={`faq-collapse${faq.id}`}
                  >
                    <span className="text-body fs-16 fw-bold">{faq.question}</span>
                  </button>
                </h2>
                <div
                  id={`faq-collapse${faq.id}`}
                  className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`}
                  aria-labelledby={`faq-heading${faq.id}`}
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body pt-0">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-xxl-7" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
          <div className="text-center">
            <img src={faqData.image.src} alt={faqData.image.alt} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
};

export default VpsHostingFaq
