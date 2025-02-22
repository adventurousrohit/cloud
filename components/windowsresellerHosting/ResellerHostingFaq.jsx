import React, { useState } from 'react';

const faqData = [
  {
    id: 'faq-collapseOneA',
    question: "When do I upgrade my Windows Reseller Hosting plan?",
    answer: [
      "Upgrade your Windows Reseller Hosting plan when : ",
      "Your website traffic is constantly over the bandwidth offered by the current plan.",
      "You need more storage to host more client websites.",
      "Your clients are asking for advanced features or software that require a higher plan.",
      "You want to scale your business with affordable reseller web hosting to host more clients. ",
      "Best Windows Reseller Hosting ensures smooth scalability and reliability for growing needs."
    ],
    isOpen: true, // Default open for the first FAQ
  },
  {
    id: 'faq-collapseTwoA',
    question: "Who is Windows Reseller Hosting recommended for?",
    answer: [
      "Windows Reseller Hosting is great for : ",
      "Entrepreneurs seeking to start a hosting business.",
      "Freelancers or agencies managing multiple websites for various clients.",
      "Developers requiring scalable, feature-rich hosting.",
      "Businesses wanting cheap Windows reseller hosting to minimize costs but deliver high-quality services."
    ],
    isOpen: false,
  },
  {
    id: 'faq-collapse3A',
    question: "Why Windows Reseller Web Hosting?",
    answer: [
      "Compatibility with Windows-specific technologies like ASP.NET, MSSQL, and Plesk.",
      "An opportunity for low-cost reseller web hosting to host a business.",
      "Controlling easy-to-use panels for yourself and your customers.",
      "Plans for Windows Reseller Hosting in India, including affordable quality service."
    ],
    isOpen: false,
  },
  {
    id: 'faq-collapse4A',
    question: "What are the advantages of having a cheap Windows reseller hosting solution?",
    answer: [
      "Some great advantages you can enjoy with affordable windows reseller hosting service : ",
      "Solutions at minimal costs: Avail budget-friendly plans without being charged heavily.",
      "Advanced technology support: Hosting applications requiring ASP.NET or MSSQL will not be a problem.",
      "Generating revenue: Sell hosting services to customers and make a profit based on affordable reseller plans.",
      "Flexibility: Different reseller web hosting plans suit small or large businesses, with high uptime and excellent customer support."
    ],
    isOpen: false,
  },
];

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
                  <h2>Window Reselling Hosting – FAQs </h2>
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
                        {item.answer.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
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
  );
};

export default VpsHostingFaqTwo;
