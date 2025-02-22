import { useState } from "react";

const faqData = {
    faqs: [
      {
        id: 1,
        question: "What is a VPS?",
        answer:
          "With a virtual private server (VPS), a real server is split up into several virtual servers, providing you with specialized resources. A VPS gives your website or application greater management, enhanced security, and improved performance compared to shared hosting.",
        isOpen: true, // Default open for the first FAQ
      },
      {
        id: 2,
        question: "Why should I use VPS hosting instead of shared hosting?",
        answer:
          "VPS hosting has its own benefits over shared hosting, including performance, control, and security. With VPS, you have dedicated resources and do not get affected by the other users on the same server, which will definitely make your site load faster and more reliable and in much effective and efficient way.",
        isOpen: false,
      },
      {
        id: 3,
        question: "What are the best VPS hosting options in India?",
        answer:
          "India has top VPS hosting providers. Service providers like well known company CloudMinister – offers reliable and budget-friendly VPS hosting services and solutions. Be it the best virtual private server or cheap VPS hosting; we ensure the cheapest VPS in India provides excellent speed and performance.",
        isOpen: false,
      },
      {
        id: 4,
        question: "How much does a VPS cost in India?",
        answer:
          "The cost of VPS hosting in India can range based on the provider, features, and resources you want. Cheap VPS hosting in India can be accessed starting at affordable rates, while there are options available to fit various budgets, including entry-level to high-performance VPS servers.",
        isOpen: false,
      },
      {
        id: 5,
        question: "What makes a VPS server the best for my website?",
        answer:
          "A top-notch with high quality service VPS server for your website should offer dependable uptime, first-rate customer service, scalability, and security. We provide the best VPS hosting in India, with flexible and reasonably priced plans that may expand to meet your company's needs.",
        isOpen: false,
      },
      {
        id: 6,
        question: "How can I find the best VPS hosting company in India?",
        answer:
          "When selecting a VPS provider in India, consider factors like uptime, customer support, security, and scalability. Look for VPS providers with data centers in India to ensure faster loading speeds and local customer service for your virtual private server.",
        isOpen: false,
      },
      {
        id: 7,
        question: "Are cheap VPS hosting services reliable in India?",
        answer:
          "Yes, many VPS hosting providers in India offer cheap VPS hosting with great reliability. We offer affordable VPS hosting without compromising on quality, making us one of the best virtual private server providers for cost-effective and secure hosting solutions in comparison to others.",
        isOpen: false,
      },
      {
        id: 8,
        question: "Advantages of VPS Hosting over Shared or Dedicated Hosting",
        answer:
          "VPS hosting strikes a balance between shared and dedicated hosting. It provides more control and resources than shared hosting but is more affordable than dedicated hosting. If you’re looking for the cheapest VPS hosting with optimal performance, VPS is the ideal solution.",
        isOpen: false,
      },
      {
        id: 9,
        question: "What is the cheapest VPS in India?",
        answer:
          "Being the cheapest VPS in India does not mean sacrificing quality. With our budget-friendly VPS options, you get powerful features at affordable prices. Our cheap VPS server options are perfect for individuals or small businesses looking to scale their presence online.",
        isOpen: false,
      },
      {
        id: 10,
        question: "Can I upgrade my VPS hosting plan later?",
        answer:
          "Yes, scalability is one of the major advantages that VPS hosting offers. So, if your website is growing, you can simply upgrade your VPS hosting plan to a higher tier, ensuring you have always the resources you need, without having to migrate to a new server.",
        isOpen: false,
      },
      {
        id: 11,
        question: "What kind of support does your VPS provider offer?",
        answer:
          "We provide 24/7 customer support to our VPS hosting clients. Whether you require technical help or assistance in the way of your VPS server, our experts are all set to guide you smoothly and with minimal downtime.",
        isOpen: false,
      },
      {
        id: 12,
        question: "Can I have a VPS server with a trial period in India?",
        answer:
          "Yes, we offer trial periods with certain VPS hosting plans. This way you can test our services before committing, ensuring you are getting the best virtual private server suited for your needs.",
        isOpen: false,
      },
      {
        id: 13,
        question: "Which is the best VPS service provider in India?",
        answer:
          "In search of the best VPS hosting in India, look into server performance, customer service, and availability of data centers in India. CloudMinister VPS hosting services stand as some of the best in India, offering high performance and reliable support.",
        isOpen: false,
      },
      {
        id: 14,
        question: "What is the difference between VPS hosting and a dedicated server?",
        answer:
          "VPS hosting offers a virtualized environment having dedicated resources on a shared physical server; on the other hand, a dedicated server gives full control over an entire server. Therefore, VPS hosting can be more economical and it also offers the facility of upscaling, but dedicated hosting is ideal for large scale operations that need exclusive resources.",
        isOpen: false,
      },
      {
        id: 15,
        question: "How does VPS hosting differ from shared hosting?",
        answer:
          "VPS hosting provides more control, privacy, and resources as opposed to shared hosting. Several users share the same server, and you receive your slice of the server on a VPS, hence, a better performance and reliability for your website.",
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
                            VPS Hosting — FAQs
                            </h2>
                            {/* <p className="mb-0 max-text-52 mx-auto">
                                Control and more resources or for when you no longer want to be limited by the
                                restrictions of a shared hosting account.
                            </p> */}
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
