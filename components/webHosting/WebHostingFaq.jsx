import { useState } from "react";
import Link from "next/link";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const inquiries = [
    {
      id: 'One',
      title: 'What is Shared hosting?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: 'Two',
      title: 'How many websites can I host?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '3',
      title: 'Do you include SSL Certificates?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '4',
      title: 'How to use the Track Delivery feature in the cPanel?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '5',
      title: 'How to manage Redirects in cPanel?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '6',
      title: 'Can I upgrade to a more powerful hosting plan later?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '7',
      title: 'Can I upgrade to a more powerful hosting plan later?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
  ];
  const hostingFaq = [
    {
        id: '6',
        title: 'Can I upgrade to a more powerful hosting plan later?',
        content:
          'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
      },
    {
      id: 'One',
      title: 'What is Shared hosting?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
  
    {
      id: '3',
      title: 'Do you include SSL Certificates?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
        id: 'Two',
        title: 'How many websites can I host?',
        content:
          'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
      },
    {
      id: '4',
      title: 'How to use the Track Delivery feature in the cPanel?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    
    
    {
      id: '7',
      title: 'Can I upgrade to a more powerful hosting plan later?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
        id: '5',
        title: 'How to manage Redirects in cPanel?',
        content:
          'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
      },
  ];
  const pricingFaq = [
    {
        id: '3',
        title: 'Do you include SSL Certificates?',
        content:
          'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
      },
    {
      id: 'One',
      title: 'What is Shared hosting?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: 'Two',
      title: 'How many websites can I host?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
   
   
    {
      id: '5',
      title: 'How to manage Redirects in cPanel?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '6',
      title: 'Can I upgrade to a more powerful hosting plan later?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
      id: '7',
      title: 'Can I upgrade to a more powerful hosting plan later?',
      content:
        'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
    },
    {
        id: '4',
        title: 'How to use the Track Delivery feature in the cPanel?',
        content:
          'We care about safety big time — and so do your site\'s visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.',
      },
  ];
const WebHostingFaq = () => {
    const [selectedTab, setSelectedTab] = useState("inquiries");
    // inquiries
    const [activeId, setActiveId] = useState("One");
    const toggleAccordion = (id) => {
      setActiveId(activeId === id ? null : id);
    };

     // hosting faq
     const [hostingActiveId, setHostingActiveId] = useState("6");
     const toggleHostingAccordion = (id) => {
        setHostingActiveId(hostingActiveId === id ? null : id);
     };

      //  pricing faq
      const [pricingActiveId, setPricingActiveId] = useState("3");
      const togglePricingAccordion = (id) => {
        setPricingActiveId(pricingActiveId === id ? null : id);
      };
 

  
   
  return (
    <>
        <section className="pt-120 pb-120">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-xl-6">
                    <div className="d-flex align-items-center gap-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span><img src="/img/shape/bage-1.png" alt="image"/></span>
                        <span className="fw-bold">Frequently Asked Question</span>
                    </div>
                    <h2 className="mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Advanced Security for Advanced Needs</h2>
                    <p className="mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">With over two decades of experience in high-quality, secure web hosting,
                        HostCIty is the strategic partner for your online journey. We
                        are with you every step of the way.</p>
                    <div className="mt-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <Link href="/contact/" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded">
                            <span className="d-inline-block me-1 flex-shrink-0">
                  <i className="las la-comments"></i>
                </span>
                            <span className="btn-arrow__text">
                  Live Chat Now
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <Tabs className="col-xl-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="pricing-nav-pills d-inline-block overflow-x-auto">
                        <TabList className="nav nav-pills gap-3 gap-sm-0 flex-nowrap" role="tablist">
                            <Tab onClick={()=>setSelectedTab("inquiries")} className="nav-item flex-shrink-0" role="presentation">
                                <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2  ${selectedTab==="inquiries"?"active":""}`} >
                                    Genral Inquiries
                                </a>
                            </Tab>
                            <Tab onClick={()=>setSelectedTab("hosting")} className="nav-item flex-shrink-0" role="presentation">
                            <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${selectedTab==="hosting"?"active":""}`} >
                                    VPS Hosting Plans
                                </a>
                            </Tab>
                            <Tab onClick={()=>setSelectedTab("pricing")} className="nav-item flex-shrink-0" role="presentation">
                            <a type="button" className={`partner-tab-nev d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${selectedTab==="pricing"?"active":""}`} >
                                    Pricing Plans
                                </a>
                            </Tab>
                        </TabList>
                    </div>
                    <div className="tab-content">
                        <TabPanel className={`tab-pane fade ${selectedTab==="inquiries"?"show active":""}`}>
                            <div className="accordion accordion-flush rounded-3 overflow-hidden" id="accordionFaq">
                               {
                            inquiries.map((item,i)=><div key={i} className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className={`accordion-button bg-transparent ${activeId===item.id ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={activeId===item.id}
                                    aria-controls={`collapse-${item.id}`}
                                  >
                                    <span className="text-body fs-16 fw-bold">{item.title}</span>
                                  </button>
                                </h2>
                                <div
                                  id={`collapse-${item.id}`}
                                  className={`accordion-collapse collapse ${activeId===item.id ? 'show' : ''}`}
                                  data-bs-parent="#accordionFaq"
                                >
                                  <div className="accordion-body pt-0">{item.content}</div>
                                </div>
                              </div>)
                               }
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="hosting"?"show active":""}`}>
                        <div className="accordion accordion-flush rounded-3 overflow-hidden" id="accordionFaq">
                               {
                            hostingFaq.map((item,i)=><div key={i} className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className={`accordion-button bg-transparent ${hostingActiveId===item.id ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleHostingAccordion(item.id)}
                                    aria-expanded={hostingActiveId===item.id}
                                    aria-controls={`collapse-${item.id}`}
                                  >
                                    <span className="text-body fs-16 fw-bold">{item.title}</span>
                                  </button>
                                </h2>
                                <div
                                  id={`collapse-${item.id}`}
                                  className={`accordion-collapse collapse ${hostingActiveId===item.id ? 'show' : ''}`}
                                  data-bs-parent="#accordionFaq"
                                >
                                  <div className="accordion-body pt-0">{item.content}</div>
                                </div>
                              </div>)
                               }
                            </div>
                        </TabPanel>
                        <TabPanel className={`tab-pane fade ${selectedTab==="pricing"?"show active":""}`}>
                        <div className="accordion accordion-flush rounded-3 overflow-hidden" id="accordionFaq">
                               {
                            pricingFaq.map((item,i)=><div key={i} className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className={`accordion-button bg-transparent ${pricingActiveId===item.id ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => togglePricingAccordion(item.id)}
                                    aria-expanded={pricingActiveId===item.id}
                                    aria-controls={`collapse-${item.id}`}
                                  >
                                    <span className="text-body fs-16 fw-bold">{item.title}</span>
                                  </button>
                                </h2>
                                <div
                                  id={`collapse-${item.id}`}
                                  className={`accordion-collapse collapse ${pricingActiveId===item.id ? 'show' : ''}`}
                                  data-bs-parent="#accordionFaq"
                                >
                                  <div className="accordion-body pt-0">{item.content}</div>
                                </div>
                              </div>)
                               }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    </section>
    </>
  )
};

export default WebHostingFaq
