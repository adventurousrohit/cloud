import { googleCloudHostingData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
       <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-10 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-0">
                        Why Google Cloud for Hosting is the Best Choice with CloudMinsiter?
                        </h2>
                        <p className="mt-4">Whether you're scaling your business or optimizing operations, CloudMinister ensures a smooth transition to Google Cloud, delivering powerful, reliable, and cost-effective hosting solutions that empower your website to perform at its best. Choose CloudMinister for the ultimate cloud experience!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
                googleCloudHostingData?.map((f,i)=><FeatureCard feature={f} key={i}/> )
               }
            
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingFeature
