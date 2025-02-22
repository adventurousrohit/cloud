import { Link } from 'react-router-dom';

const EnterpriseServer = () => {
  return (
    <>
      <div className="container extrasection">
        <div className="row">
          <div className="col-12">
            <div className="bg-dark px-6 pt-80 pb-80 rounded-3">
              <div className="pb-40">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                      <h2 className="h4 text-white mb-3">Power Your Business with Premium Windows Dedicated Servers</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100">
                    <img src="/img/analytics.png" alt="image" className="img-fluid mb-3" />
                    <h6 className="text-white mb-3">Cutting-Edge Hosting Technology</h6>
                    <p className="text-white mb-0 text-opacity-75">
                      At CloudMinister, we have speed and efficiency through the most advanced hosting technologies. The servers are powered with the latest PHP versions, modern protocols, and new
                      compression algorithms to make your website load faster than ever.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100">
                    <img src="/img/reliability.png" alt="image" className="img-fluid mb-3" />
                    <h6 className="text-white mb-3">Top-Tier Security Features</h6>
                    <p className="text-white mb-0 text-opacity-75">
                      We offer a safe hosting environment with built-in virus scanners, malware alerts, SSL certificates, and more. Rest assured your website is in safe hands because of our proactive
                      security measures.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100">
                    <img src="/img/uptime.png" alt="image" className="img-fluid mb-3" />
                    <h6 className="text-white mb-3">Unbeatable Uptime Guarantee</h6>
                    <p className="text-white mb-0 text-opacity-75">
                      Experience a 99.99% uptime guarantee with the reliable hosting services of CloudMinister. Our affordable shared hosting plans ensure your website is always online.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100">
                    <img src="/img/rating.png" alt="image" className="img-fluid mb-3" />
                    <h6 className="text-white mb-3">24/7 Expert Support</h6>
                    <p className="text-white mb-0 text-opacity-75">
                      Our dedicated support team is available around the clock. With an average response time of under 5 minutes, we’re always ready to assist you.
                    </p>
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

export default EnterpriseServer;
