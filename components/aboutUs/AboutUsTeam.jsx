const AboutUsTeam = () => {
  return (
    <>
      <div className="pt-60 pb-120 bg-white">
        <div className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-8">
                <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <h2 className="mb-4">Visionaries Dedicated to Your Success</h2>
                  <p className="mb-0 max-text-100 mx-auto">
                    At CloudMinister, our forward-thinking team is dedicated to propelling your success through advanced and better IT solutions, professional advice, and steadfast commitment—all to
                    help your business grow and flourish in the competitive digital arena of today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <div className="team">
                <img src="/Team/Tanuj Chugh.png" alt="image" className="img-fluid w-100" style={{ borderRadius: '10px' }} />
                <div className=" p-2 p-xl-8">
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-grow-1">
                      <h6 className="mb-2">Tanuj Chugh</h6>
                      <span className="d-block fs-14">CEO & Founder</span>
                    </div>
                    <div className="flex-shrink-0">
                      <a href="https://www.linkedin.com/in/tanuj-chugh-14828149/" className="team__social-link" target="_blank">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <div className="team">
                <img src="/Team/Chandni Jagga.png" alt="image" className="img-fluid w-100" style={{ borderRadius: '10px' }} />
                <div className=" p-2 p-xl-8">
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-grow-1">
                      <h6 className="mb-2">Chandni Jagga</h6>
                      <span className="d-block fs-14">Co-Founder</span>
                    </div>
                    <div className="flex-shrink-0">
                      <a href="https://www.linkedin.com/in/chandni-jagga-5a089bb6/" className="team__social-link" target="_blank">
                        <i className="lab la-linkedin-in"></i>
                      </a>
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

export default AboutUsTeam;
