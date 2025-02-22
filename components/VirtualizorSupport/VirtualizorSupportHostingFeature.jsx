import { VirtualizorSupportfeatureData } from "../../utils/data";
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
                  Easy and Affordable Virtualizor Server Management for
                  Hassle-Free Operations
                </h2>
                <p className="mt-4">
                  Discover the complete potential of your virtual hosting
                  environment and more advanced features with our Virtualizor
                  Management Services. Perfectly designed for efficient and
                  effective management, we take care of everything from setting
                  up and configuring to continuous monitoring and performance
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {VirtualizorSupportfeatureData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
