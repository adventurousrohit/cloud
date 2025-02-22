import React,{useState} from "react";
import VideoModal from '../common/others/VideoModal';
const FeatureCard = () => {
    const [isOpen, setOpen] = useState(false);
  const features = [
    {
      id: 1,
      title: "Unmatched Savings",
      description:
        "No more woes of currency conversion! Now with Akamai's INR billing, pay cost-effective solutions while getting it done in your local currency.",
      imageSrc: "https://via.placeholder.com/64", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Lightning-Fast Performance",
      description:
        "Akamai Linode powers the highest level of performance to enable smooth and uninterruptive performance for your workloads.",
      imageSrc: "https://via.placeholder.com/64",
    },
    {
      id: 3,
      title: "Simplified INR Billing",
      description:
        "With local INR billing, the management of your costs has never been easier--no hidden charges, no problem. ",
      imageSrc: "https://via.placeholder.com/64",
    },
  ];

  return (
    <>
    <VideoModal isOpen={isOpen} setOpen={setOpen}  />
    <section className="container py-5 mt-10 mb-10">
      <h2 className="text-center mb-5">Why choose Akamai Linode with CloudMinister?</h2>
      <p className="text-center mb-5 max-24 mb-4">CloudMinister brings to you the seamless Akamai Linode, an absolute cloud solution that has been developed for unmatched business benefits.</p>
      <div className="row align-items-center">
        <div className="col-lg-6 col-xl-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="mt-2 mb-2"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-md-6 p-xl-8 feature text-center">
                <div className="mb-3">
                  {/* <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="img-fluid"
                    style={{ width: "64px", height: "64px" }}
                  /> */}
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
         <div className="col-lg-6 col-xl-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                        <div className="card">
                          <div className="card-body">
                            <div className="features-video position-relative z-1">
                              <img src="/img/coverImg.jpeg" alt="image" className="img-fluid w-100" />
                              <a
                                type="submit"
                                onClick={() => setOpen(true)}
                                className="btn gradient-bg w-15 h-15 d-grid place-content-center rounded-circle position-absolute top-50 start-50 translate-middle fs-24 text-white popup-init"
                              >
                                <i className="las la-play"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
      </div>
    </section>
    </>
  );
};

export default FeatureCard;
