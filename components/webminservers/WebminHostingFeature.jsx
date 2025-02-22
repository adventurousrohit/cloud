import { WebinHostingfeatureData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const RackSpaceHostingFeature = () => {
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
                <h2 className="mb-0 fs-3">
                  Cloudminister offers simple, secure, and reliable Webmin
                  server management services for all your business needs on
                  Windows/Linux systems.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {WebinHostingfeatureData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RackSpaceHostingFeature;
