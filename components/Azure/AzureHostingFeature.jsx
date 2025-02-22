import { cpanelHostingfeatureData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
      <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-md-10 col-lg-8 col-xl- text-center"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <h2 className="mb-0">
                  Simplify Complex Operations with Azure Cloud Hosting
                  Management Services
                </h2>
                <p className="mt-4">
                  Azure makes intricate processes easy, improves security, and
                  increases productivity through automation and scalability.
                  Harness AI, analytics, and smooth integrations to spark
                  innovation. Learn why Azure is the best for forward-thinking
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {cpanelHostingfeatureData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
