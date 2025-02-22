import { GoogleServerfeatureData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
      <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-md-10 col-lg-8 col-xl-10 text-center"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <h2 className="mb-0">
                  Why Google Cloud Is Your Best Bet for Growth?
                </h2>
                <p className="mt-4">
                  CloudMinister provides premium Google Cloud Server Management
                  services, ensuring that your infrastructure is always
                  optimized for performance, security, and scalability. Whether
                  you are managing a single application or a complex cloud
                  environment, our services include configuration to ongoing
                  maintenance for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {GoogleServerfeatureData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
