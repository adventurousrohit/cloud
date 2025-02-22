const faqData = [
  {
    id: "faq-collapse1",
    question: "How cost-effective are Linux GPU servers compared to other hosting options?",
    answer:
      "Linux GPU servers offer incredible value for high-performance needs. They are optimized to deliver the best results at a fraction of the cost of traditional hardware setups.",
    isOpen: true, // Default open for the first FAQ
  },
  {
    id: "faq-collapse2",
    question: "Why is a Linux GPU server the best option for high-performance workloads, and what is it?",
    answer:
      "Powerful GPUs are used by Linux GPU servers to accelerate computational activities like 3D rendering, AI, and machine learning. It is perfect for demanding workloads due to its great scalability and durability.",
  },
  {
    id: "faq-collapse3",
    question: "Can I customize the configuration of my Linux GPU server?",
    answer:
      "Yes, definitely! Our Linux GPU servers are totally customizable so you can pick the exact amount of GPU, storage, and memory that matches your needs.",
  },
  {
    id: "faq-collapse4",
    question: "How does a Linux GPU server enhance security for my applications?",
    answer:
      "Your data and apps are protected around-the-clock with our Linux GPU servers' sophisticated security features, which include firewalls, DDoS protection, and frequent upgrades.",
  },
  {
    id: "faq-collapse5",
    question: "Is a Linux GPU server suitable for gaming or streaming platforms?",
    answer:
      "Yes! With its high computational power and optimized performance, a Linux GPU server is an excellent choice for gaming servers or high-quality streaming platforms.",
  },
  {
    id: "faq-collapse6",
    question: "What kinds of applications thrive on a Linux GPU server?",
    answer:
      "Applications involving AI, deep learning, data analytics, video rendering, and scientific simulations benefit greatly from the accelerated processing power of a Linux GPU server.",
  },
  {
    id: "faq-collapse7",
    question: "Are Linux GPU servers suitable for a beginner?",
    answer:
      "They do cater to advanced users; however, our servers come with an easy-to-use dashboard and technical support so that it is accessible even to a beginner.",
  },
  {
    id: "faq-collapse8",
    question: "What is the benefit of NVIDIA GPU Server?",
    answer:
      "NVIDIA GPUs accelerate AI/ML workloads by executing thousands of operations in parallel, which is critical for deep learning models. This results in faster model training, lower latency for real-time inference, and better overall efficiency for processing large datasets.",
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
                <h2>Linux GPU Server – FAQs</h2>
              
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
