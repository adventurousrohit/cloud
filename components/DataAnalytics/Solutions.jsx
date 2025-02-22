import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { amazonServices } from '../../utils/data';

const tabData = [
  { key: 'hosting', label: 'Hosting & Compute' },
  { key: 'storage', label: 'Storage & Backup' },
  { key: 'database', label: 'Database' },
  { key: 'network', label: 'Network & Delivery' },
  { key: 'security', label: 'Security Governance' },
  { key: 'serverless', label: 'Serverless Computing' },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].key);

  // Filter services based on active tab category
  const getServicesForTab = (category) =>
    amazonServices.filter((service) => service.category === category);

  return (
    <Tabs className="pt-120 pb-60">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-xxl-10 text-center">
            <h2
              className="mb-2"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              Powerful Managed AWS Solutions tailored to fit your needs
            </h2>
            <p
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              Don't settle for generic solutions - Amazon has everything you
              need, crafted with your unique needs in mind.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="d-flex justify-content-center border-bottom mt-5"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          <div className="pricing-nav-pills d-inline-block mx-auto border-bottom">
            <TabList className="nav nav-pills">
              {tabData.map((tab) => (
                <Tab
                  key={tab.key}
                  className="nav-item"
                  onClick={() => setActiveTab(tab.key)}
                >
                  <a
                    type="button"
                    className={`partner-tab-nev cursor-pointer d-inline-block text-decoration-none text-body fw-bold px-3 pb-2 ${
                      activeTab === tab.key ? 'active' : ''
                    }`}
                  >
                    {tab.label}
                  </a>
                </Tab>
              ))}
            </TabList>
          </div>
        </div>

        {/* Tab Panels */}
        <div
          className="tab-content mt-6"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease-in-out-sine"
        >
          {tabData.map((tab) => (
            <TabPanel
              key={tab.key}
              className={`tab-pane fade ${
                activeTab === tab.key ? 'active show' : ''
              }`}
            >
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-2 g-3">
                {getServicesForTab(tab.label).map((service, index) => (
                  <div className="col" key={index}>
                    <div className="tech-partner transition bg-white px-6 py-8 rounded-2 shadow-sm text-center h-100">
                      <h6 className="fs-16 fw-bold mt-4">{service.title}</h6>
                      <p
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-delay="300"
                        data-sal-easing="ease-in-out-sine"
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </Tabs>
  );
};

export default Solutions;
