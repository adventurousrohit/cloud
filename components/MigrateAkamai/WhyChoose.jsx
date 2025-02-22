import { Link } from 'react-router-dom';

const WhyChoose = () => {
  return (
    <>
      <div className="pt-6 pb-60">
        <div className="pb-40">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-10 col-lg-8">
                <h2 className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  Unlock Exclusive Benefits with Akamai
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <div className="tab-pane fade show active" id="linuxHosting" role="tabpanel">
                  <div className="row g-4 justify-content-between align-items-center">
                    <div className="col-md-6 col-xl-6">
                      <ul className="list-unstyled vstack gap-4">
                        <li>
                          <div className="card transition why-choose-card">
                            <div className="card-body p-xxl-6">
                              <h6 className="mb-4">Streamlined Transitions, Hassle-Free Migrations</h6>
                              <p className="mb-0 fs-14">
                                Migrate from AWS, Azure, GCP, DO, or Vulture without a hitch. Our expert team ensures seamless transitions, so your customers can focus on scaling their businesses.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="card transition why-choose-card">
                            <div className="card-body p-xxl-6">
                              <h6 className="mb-4">Crystal-Clear Pricing, No Hidden Surprises</h6>
                              <p className="mb-0 fs-14">
                                Say goodbye to unexpected bills! With transparent pricing, your customers can enjoy predictable costs, empowering them to manage their budgets easily.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="card transition why-choose-card">
                            <div className="card-body p-xxl-6">
                              <h6 className="mb-4">The Future of Cloud Infrastructure</h6>
                              <p className="mb-0 fs-14">
                                Unlock the potential of Akamai's globally connected cloud network. Our infrastructure provides high-performance capabilities to increase your customers' speed,
                                reliability, and efficiency.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-6">
                      <div className="text-center">
                        <img src="/img/znet-cloud-head-bg.png" alt="image" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
