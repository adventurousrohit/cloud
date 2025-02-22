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
                      <h2 className="h4 text-white mb-3">Affordable & High-Performance Dedicated Servers in India</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100">
                    <img src="/img/analytics.png" alt="image" className="img-fluid mb-3" />
                    <h3 className="text-white mb-3">High-Performance Dedicated Servers</h3>
                    <p className="text-white mb-0 text-opacity-75">
                    At Cloudminister, we offer high-performance dedicated servers for growing needs, ensuring 24/7 uptime and optimal speed. Our servers are built for high-traffic websites and resource-intensive applications, providing the power and stability you need.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100">
                    <img src="/img/reliability.png" alt="image" className="img-fluid mb-3" />
                    <h3 className="text-white mb-3">Secure and Reliable Hosting</h3>
                    <p className="text-white mb-0 text-opacity-75">
                    Security for your website is our concern. For each of our dedicated servers in India, we provide industry-leading security features like malware scanners, SSL certificates, and proactive monitoring to ensure maximum protection.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100" >
                  <img src="/img/uptime.png" alt="image" className="img-fluid mb-3" />
                  <h3 className="text-white mb-3">99.99% Uptime Guarantee</h3>
                  <p className="text-white mb-0 text-opacity-75">
                  Cloudminister dedicated hosting server solutions come with a guarantee of 99.99% uptime, ensuring that your website remains accessible at all times.
                  </p>
                  </div>
                </div>
                <div className="col-lg-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700" data-sal-easing="ease-in-out-sine">
                  <div className="px-5 py-7 rounded-3 side-blog-item transition h-100" >
                  <img src="/img/rating.png" alt="image" className="img-fluid mb-3" />
                  <h3 className="text-white mb-3">Round-the-Clock Expert Support</h3>
                  <p className="text-white mb-0 text-opacity-75">
                  Our dedicated support team is available 24/7 to help with any queries, ensuring your hosting experience is hassle-free.
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
