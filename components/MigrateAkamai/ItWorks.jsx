import { Link } from 'react-router-dom';

const ItWorks = () => {
  return (
    <>
      <section className="bg-dark pt-60 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8">
              <div className="text-center mb-8">
                <h2 className="text-white mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                How It Works – From Opportunity to Success
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <div className="bg-white bg-opacity-5 p-6 p-xl-10 rounded-3 support-22">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                  <h5 className="text-white mb-0">Identify the Opportunity</h5>
                  {/* <p className="h5 mb-0 text-white text-opacity-25">01</p> */}
                </div>
                <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                  <div className="flex-shrink-0">
                    <img src="/img/opportunity (1).png" alt="icon" className="img-fluid" />
                  </div>
                  <div>
                    <p className="text-white mb-4">
                    Find ready-to-migrate workloads from AWS, Azure, GCP, DigitalOcean, or Vultr.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
              <div className="bg-white bg-opacity-5 p-6 rounded-3 p-xl-10 support-22">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                  <h5 className="text-white mb-0">Refer & Earn</h5>
                  {/* <p className="h5 mb-0 text-white text-opacity-25">02</p> */}
                </div>
                <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                  <div className="flex-shrink-0">
                    <img src="/img/earning.png" alt="icon" className="img-fluid" />
                  </div>
                  <div>
                    <p className="text-white mb-4">
                    Close a flexible partner agreement aligned with your business needs and objectives.  
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
              <div className="bg-white bg-opacity-5 p-6 rounded-3 p-xl-10 support-22">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                  <h5 className="text-white mb-0">Harvest the Rewards</h5>
                  {/* <p className="h5 mb-0 text-white text-opacity-25">02</p> */}
                </div>
                <div className="d-flex gap-6 flex-wrap flex-sm-nowrap">
                  <div className="flex-shrink-0">
                    <img src="/img/reward.png" alt="icon" className="img-fluid" />
                  </div>
                  <div>
                    <p className="text-white mb-4">
                    Enjoy up to 50% margins while bringing unparalleled value and innovation to your customers.
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItWorks;
