import { DataAnalyticsData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
       <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-10 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h3 className="mb-0">
                        Why Our Analytics Solutions Are Your Smartest Choice?
                        </h3>
                        <p className="mt-4">Our data analytics services convert raw data into actionable insights. By using state-of-the-art tools and bespoke solutions, we empower businesses to make informed decisions, optimize operations, and achieve measurable growth efficiently.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
                DataAnalyticsData?.map((f,i)=><FeatureCard feature={f} key={i}/> )
               }
            
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingFeature
