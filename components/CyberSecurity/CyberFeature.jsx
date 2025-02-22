import { CyberSecurityData } from "../../utils/data";
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
                <h3 className="mb-0">
                  Partner with the Best for Ultimate Cyber Security Stay Safe,
                  Stay Ahead with CloudMinister’s CyberSecurity Services
                </h3>
                <p className="mt-4">
                  Stay safe and ahead of cyber dangers with CloudMinister's
                  skilled solutions. From intelligent threat detection to
                  rigorous data protection, we ensure your digital assets are
                  secure and your growth continues.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {CyberSecurityData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
