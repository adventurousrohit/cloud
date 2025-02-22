const faqData = [
  {
    id: 'faq-collapseOneA',
    question: "What is a Windows GPU server?",
    answer:
      "A Windows GPU server is the power of a high-performance graphics processing unit combined with the stability and flexibility of the Windows operating system. It's great for resource-intensive applications, including gaming, 3D rendering, AI processing, and machine learning.",
    isOpen: true, // Default open for the first FAQ
  },
  {
    id: 'faq-collapseTwoA',
    question: "Why would I choose a Windows GPU server over a standard server?",
    answer:
      "Windows GPU servers enhance the performance for graphically intensive tasks. If your work involves complex simulations, deep learning, or video editing, then the GPU accelerates things a lot compared to regular CPUs.",
    isOpen: false,
  },
  {
    id: 'faq-collapse3A',
    question: "What industries benefit from Windows GPU servers?",
    answer:
      "Some of the few industries that can utilize the immense power of Windows GPU servers include gaming, AI research, video production, 3D modeling, and scientific simulations, which process data at a faster rate and provide better results.",
    isOpen: false,
  },
  {
    id: 'faq-collapse4A',
    question: "How do I start with your Windows GPU server service?",
    answer:
      "You can simply sign up for an account, and then select your requirements for the GPUs, and we will set up a server for you. You'll be ready to go in no time!",
    isOpen: false,
  },
  {
    id: 'faq-collapse5A',
    question: "Can I scale my server if my needs change?",
    answer:
      "Absolutely! Our Windows GPU servers are fully scalable. Need more power or storage? Scaling is quick and easy.",
    isOpen: false,
  },
  {
    id: 'faq-collapse6A',
    question: "Is my data safe on a Windows GPU server?",
    answer:
      "Yes! We apply industry-standard security measures to protect your data at all times.",
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
                <h2>Windows GPU Server – FAQs</h2>
           
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
