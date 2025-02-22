const faqData = [
  {
    id: 'faq-collapseOneA',
    question: "What is a GPU server, and why do I need one?",
    answer:
      "A GPU server is a very powerful hosting solution that has high-performance graphics processing units. These servers are equipped with great computational power and designed for extremely demanding tasks such as deep learning, AI, ML, and high-end graphics. Whether you run complex models about AI or you have enormous datasets to train in, a GPU server can always provide you the appropriate performance for the need and it guarantees flexibility with extreme speed.",
    isOpen: true, // Default open for the first FAQ
  },
  {
    id: 'faq-collapseTwoA',
    question: "What's different about a GPU cloud server from hosting a traditional server?",
    answer:
      "It offers virtualized GPU resources, which allows you to access high-performance computing without needing physical hardware. In contrast, traditional hosting relies on CPU-based resources and limits processing power for demanding tasks like AI or deep learning. GPU dedicated server hosting provides exclusive access to dedicated GPUs, ensuring maximum efficiency and faster computation for specialized workloads, such as NVIDIA GPU servers for AI or GPU server for deep learning.",
    isOpen: false,
  },
  {
    id: 'faq-collapseThreeA',
    question: "What is the benefit of using a Dedicated NVIDIA GPU Server for AI or machine learning?",
    answer:
      "With Dedicated NVIDIA GPU Server, machine learning and AI tasks could be processed with unmatched performance. With an NVIDIA GPU server, you get the ultimate in technological advancement optimized for processing complex algorithms, reducing their processing time and enhancing accuracy of AI models.",
    isOpen: false,
  },
  {
    id: 'faq-collapseFourA',
    question: "Can I find affordable GPU server hosting in India?",
    answer:
      "Yes, cheap GPU server hosting in India is available without compromising on performance. Providers offer cost-effective GPU hosting servers with flexible plans to suit businesses of all sizes. From entry-level GPU server plans to premium solutions like GPU dedicated server hosting, you can find an option that fits your budget and processing needs while benefiting from top-tier NVIDIA Linux GPU for server configurations.",
    isOpen: false,
  },
  {
    id: 'faq-collapseFiveA',
    question: "How do I choose the right GPU server price and plan for my business?",
    answer:
      "Select the appropriate GPU server price and plan based on your needs. For small-scale projects, the flexible pricing and scalable resources of GPU cloud servers make them suitable options. However, for resource-intensive applications like deep learning or AI, a GPU dedicated server might be the best choice. Your server should have the appropriate GPU capabilities (such as an NVIDIA GPU for server) that fit your workload requirements, whether it's machine learning models or high-performance computing tasks.",
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
                <h2>GPU Server Management – FAQs </h2>
              
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
