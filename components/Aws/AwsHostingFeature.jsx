import { AwsServerData } from "../../utils/data";
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
                  AWS Support: Choose Your Partner for Cloud Success!
                </h2>
                <p className="mt-4">
                  AWS servers are the backbone of Amazon's business, powering
                  everything from their popular online store to the massive
                  support infrastructure that helps keep the lights on 24/7.
                  CloudMinister provides AWS server management and cloud
                  infrastructure management for all your applications, whether
                  you have one or thousands in any given region. Contact us
                  today to get started!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {AwsServerData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
