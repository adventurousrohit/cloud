import { useState } from "react";

const faqData = {
    faqs: [
      {
        id: 1,
        question: "What is VPS hosting?",
        answer:
          "A virtual private server or a VPS Hosting, as the name suggests is a virtually isolated server condition. It is created after dividing a physical server into several virtual servers with every server getting its dedicated resources like disk space, CPU, and memory, making it completely yours. So you will have your dedicated server, but virtually. Every single linux VPS server is completely isolated from other servers and functioning like any regular server. As several virtual private servers function from a single physical server, the operating and maintenance costs are remarkably reduced making VPS hosting an affordable alternative to dedicated servers.",
        isOpen: true, // Default open for the first FAQ
      },
      {
        id: 2,
        question: "How to begin with Linux VPS Hosting?",
        answer:
          "Just select from one of our Linux VPS hosting plans as per the need of your website and simply follow the sign-up process. Once you buy Linux VPS hosting from us and the registration process is completed, we will set up the server for you and you are all set to get started.",
        isOpen: false,
      },
      {
        id: 3,
        question: "Is it important to have technical knowledge to handle Linux VPS server?",
        answer:
          "Don't worry if you don't have technical knowledge. Just select one of our linux VPS hosting server India plan and let our experts handle the technical front of your linux VPS server. However, if you choose to go with Unmanaged linux VPS, it does need technical skills to manage the server and hence it best suits developers and administrators.",
        isOpen: false,
      },
      {
        id: 4,
        question: "How much time will it take to set up my account?",
        answer:
          "As you sign up for our linux VPS hosting plan, our team will immediately start the setup process. As soon as you receive server and control panel logins you can start using your virtual server (VPS Server).",
        isOpen: false,
      },
      {
        id: 5,
        question: " Can I install any software on my linux vps hosting server?",
        answer:
          "You can install any third-party application compatible with your linux VPS server as you have total control with full root access. With Cloudminister any user is free to install and run any application from the linux VPS hosting server as long as they comply with our TOS.",
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
                            Frequently Asked Queries
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
