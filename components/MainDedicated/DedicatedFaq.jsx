const faqData = [
  
  {
    id: 1,
    question: "What is a dedicated server and how does it work?",
    answer:
      "A dedicated server provides exclusive access to an entire server, offering greater control, security, and performance. Unlike shared hosting, you don't share resources, ensuring maximum speed and reliability.",
    isOpen: true, // Default open for the first FAQ
  },
  {
    id: 2,
    question: "Why do I need a dedicated hosting server and not shared hosting?",
    answer:
      "Dedicated hosting servers offer exclusive resources, better performance, enhanced security, and customization. They're ideal for websites with high traffic or those requiring more processing power, ensuring scalability and reliability.",
    isOpen: false,
  },
  {
    id: 3,
    question: "How much does a dedicated server in India cost?",
    answer:
      "Dedicated server hosting in India has a range of pricing options, from affordable plans to premium services. The cost depends on server specifications, data center location, and additional services, balancing performance and budget.",
    isOpen: false,
  },
  {
    id: 4,
    question: "What are the benefits of hosting a dedicated server in India?",
    answer:
      "A dedicated server in India offers low latency, fast data access, and compliance with local regulations. It also enables businesses to offer regional support, providing a reliable and cost-effective hosting solution.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Is the dedicated server hosting costly for small businesses?",
    answer:
      "Dedicated server hosting can be affordable for small businesses if a more budget-friendly plan is chosen. Many affordable options provide the benefits of dedicated hosting without compromising on performance, helping businesses scale effectively.",
    isOpen: false,
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
              <h2>Dedicated Server – FAQs</h2>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="accordion border-0 vps-hosting-accordion">
            {faqData?.map((item, index) => (
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
