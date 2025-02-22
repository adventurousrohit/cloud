// faqData.js
 const faqData = [
    {
      id: 'faq-collapseOneA',
      question: "What makes Linux VPS hosting in India a good choice?",
        answer:
          "Linux VPS hosting in India offers low latency, better performance for local users, and have competitive prices and plans. It’s an excellent choice if your audience is primarily based in the region.",
        isOpen: true, // Default open for the first FAQ
    },
    {
      id: 'faq-collapseTwoA',
      question: "Which control panels are supported for Linux VPS?",
      answer:
        "The most popular ones include cPanel, Plesk, and Webmin. Availability would depend on the hosting provider, though.",
    },
    {
      id: 'faq-collapse3A',
      question: "Are there affordable or cheap VPS Linux hosting options?",
      answer:
        "Yes, as there are many affordable Linux VPS hosting server options. Cheap Linux VPS services offer dedicated resources, greater security, and configurable environments at a lower cost than standard hosting.By selecting the suitable provider, you may enjoy dependable performance and scalability without effecting your budget. ",
      isOpen: false,
    },
    {
      id: 'faq-collapse4A',
      question: "Why should I choose Linux VPS hosting over other options?",
      answer:
        "Linux VPS hosting offers stability, security, and flexibility with dedicated resources. It supports distributions like Ubuntu and CentOS, making it a cost-effective choice for developers and businesses seeking reliable hosting.",
    },
    {
      id: 'faq-collapse4A',
      question: "What is the cost of Linux VPS Hosting?",
      answer:
        "The pricing varies based on the plan you select as well as depending uopn the business needs. Please visit our pricing page for detailed information.",
    },
    {
      id: 'faq-collapse4A',
      question: "Do you offer managed or unmanaged Linux VPS Hosting?",
      answer:
        "Cloudminister provides both managed and unmanaged hosting plans to meet your specific needs.",
    },
    {
      id: 'faq-collapse4A',
      question: "How secure is VPS hosting in India?",
      answer:
        "VPS hosting in India offers a high level of security, as it operates independently from other users on the server. You have full control over firewall settings, backups, and software configurations, allowing you to create a secure environment for your website or application.",
    },
    {
      id: 'faq-collapse4A',
      question: "How do I manage my cheap Indian VPS hosting server?",
      answer:
        "Managing a cheap Indian VPS hosting server is simple with various control panels available, like cPanel, Plesk, or SSH access for those with technical expertise. Your hosting provider may also offer managed services, so you can focus on running your business while they handle the server maintenance.",
    },
    {
      id: 'faq-collapse4A',
      question: "What are the benefits of choosing the cheapest VPS Linux hosting in India?",
      answer:
        "Choosing the cheapest VPS Linux hosting in India allows you to leverage the flexibility and power of Linux at an affordable price. It’s ideal for developers and tech-savvy users who need a reliable and customizable server, without breaking the bank. Plus, hosting within India ensures better latency and faster load times for your audience.",
    },
    {
      id: 'faq-collapse4A',
      question: "What are the benefits of choosing the cheapest VPS Linux hosting in India?",
      answer:
        "Choosing the cheapest VPS Linux hosting in India allows you to leverage the flexibility and power of Linux at an affordable price. It’s ideal for developers and tech-savvy users who need a reliable and customizable server, without breaking the bank. Plus, hosting within India ensures better latency and faster load times for your audience.",
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
                <h2>Linux VPS Hosting – FAQs </h2>
                {/* <p className="mb-0 max-text-52 mx-auto">
                From security measures to performance optimization and everything in between, we provide clear answers to help you make an informed decision.
                </p> */}
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
