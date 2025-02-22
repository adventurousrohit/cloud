// faqData.js
 const faqData = [
    {
      id: 'faq-collapseOneA',
      question: 'Why should I select Cloudminister for Windows VPS Hosting in India?',
      answer: `Cloudminister offers cheap and reliable Windows VPS hosting solutions in India. You can enjoy high performance, 24/7 support, and the flexibility to customize your server environment through our cheap Windows VPS hosting plans. Our Windows VPS servers are designed for businesses that want optimal performance without spending a fortune.`,
    },
    {
      id: 'faq-collapseTwoA',
      question: 'Can I run my applications locally on a VPS for Windows?',
      answer: `Yes, by hosting on a Windows VPS server, you can install any application or software compatible with the Windows OS. It may host websites, applications, or databases; using a VPS server for Windows grants full control over personalizing the hosting experience.`,
    },
    {
      id: 'faq-collapseThreeA',
      question: 'How is VPS Hosting for Windows different from shared hosting?',
      answer: `Unlike shared hosting, the resources for your website and applications are dedicated in Windows VPS hosting. In the case of VPS for Windows, you are totally in control of the server's configuration, security, and software, meaning better performance and reliability.`,
    },
    {
      id: 'faq-collapseFourA',
      question: 'Is there a cheap Windows VPS server available with Cloudminister?',
      answer: `Yes! Cloudminister is offering the most affordable Windows VPS plans with performance that never compromises. Its cheap Windows VPS hosting plans give you the maximum value of your money through scalable resources and 24/7 support.`,
    },

    {
      id: 'faq-collapseFiveA',
      question: 'Do you have the facility to upgrade my Windows VPS plan when my business expands?',
      answer: `Absolutely! The first benefit of VPS hosting Windows is that it scales up. You can scale up your VPS server Windows plan to meet the increasing demands of bandwidth, storage, and processing power as your business grows.`,
    },

    {
      id: 'faq-collapseSixA',
      question: 'What kind of support does Cloudminister offer for Windows VPS Hosting?',
      answer: `We provide 24/7 customer support for all our Windows VPS hosting India plans. Whether you are facing technical issues or need assistance with server configuration, our technical professionals are always ready to help you with prompt and better solutions at your service`,
    },

    {
      id: 'faq-collapseSevenA',
      question: 'Is Windows VPS hosting cheaper than dedicated server hosting?',
      answer: `Yes, it is much cheaper than dedicated server hosting. Though offering almost the same flexibility and control, a VPS server Windows allows you to have dedicated resources without the very high costs associated with dedicated servers, making it the best choice for businesses looking for budget-friendly solutions.`,
    },

    {
      id: 'faq-collapseEightA',
      question: 'How reliable is Cloudministers Windows VPS Hosting in India?',
      answer: `Cloudminister ensures 99.9% uptime for all our Windows VPS India hosting services. Our highly developed data centers and robust infrastructure ensure that your Windows VPS hosting India is always up and running smoothly which helps in business efficiency and effectiveness.`,
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
       <div className="pt-60 pb-120">
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
                <h2>Windows VPS Server - FAQs</h2>
                {/* <p className="mb-0 max-text-52 mx-auto">
                  Control and more resources or for when you no longer want to be limited by the restrictions
                  of a shared hosting account.
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
