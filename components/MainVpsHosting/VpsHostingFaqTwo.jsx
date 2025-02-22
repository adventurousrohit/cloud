// faqData.js
 const faqData = [
    {
      id: 'faq-collapseOneA',
      question: "What is VPS hosting?",
        answer:
          "A virtual private server or a VPS Hosting, as the name suggests is a virtually isolated server condition. It is created after dividing a physical server into several virtual servers with every server getting its dedicated resources like disk space, CPU, and memory, making it completely yours. So you will have your dedicated server, but virtually. Every single linux VPS server is completely isolated from other servers and functioning like any regular server. As several virtual private servers function from a single physical server, the operating and maintenance costs are remarkably reduced making VPS hosting an affordable alternative to dedicated servers.",
        isOpen: true, // Default open for the first FAQ
    },
    {
      id: 'faq-collapseTwoA',
      question: "How to begin with Linux VPS Hosting?",
      answer:
        "Just select from one of our Linux VPS hosting plans as per the need of your website and simply follow the sign-up process. Once you buy Linux VPS hosting from us and the registration process is completed, we will set up the server for you and you are all set to get started.",
    },
    {
      id: 'faq-collapse3A',
      question: "Is it important to have technical knowledge to handle Linux VPS server?",
      answer:
        "Don't worry if you don't have technical knowledge. Just select one of our linux VPS hosting server India plan and let our experts handle the technical front of your linux VPS server. However, if you choose to go with Unmanaged linux VPS, it does need technical skills to manage the server and hence it best suits developers and administrators.",
      isOpen: false,
    },
    {
      id: 'faq-collapse4A',
      question: "How much time will it take to set up my account?",
      answer:
        "As you sign up for our linux VPS hosting plan, our team will immediately start the setup process. As soon as you receive server and control panel logins you can start using your virtual server (VPS Server).",
    },
  ];
  import React, { useState } from 'react';
const VpsHostingFaqTwo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
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
                <h2>Managed VPS Hosting FAQs</h2>
                <p className="mb-0 max-text-52 mx-auto">
                  Control and more resources or for when you no longer want to be limited by the restrictions
                  of a shared hosting account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="accordion border-0 vps-hosting-accordion">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className="accordion-item border rounded-3 mb-4"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button bg-transparent ${activeIndex === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={item.id}
                    >
                      <span className="text-body fs-16 fw-bold">{item.question}</span>
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body pt-0">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default VpsHostingFaqTwo
