import { DirectAdminfeatureData } from "../../utils/data";
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
                  Comprehensive DirectAdmin Server Management – Your 24x7
                  Support Partner
                </h2>
                <p className="mt-4">
                  CloudMinister has completed hundreds of web hosting installs
                  and provided knowledgeable DirectAdmin assistance for more
                  than a decade. We are on call around the clock for 24x7 direct
                  admin server monitoring to handle any issues and guarantee
                  smooth server administration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {DirectAdminfeatureData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
