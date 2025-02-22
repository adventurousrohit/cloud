import { AwsfeatureData } from "../../utils/data";
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
                        Stay Ahead with CloudMinister’s AWS Cloud Hosting Technical Specification 

                        </h3>
                        <p className="mt-4">CloudMinister is well-experienced in the management of AWS Servers and Cloud infrastructure. From one to thousands, its services ensure perfect performance in any region of your application. Trust our cloud infrastructures with us to handle them securely, scalably, and reliably, much like Amazon's trusted backbones. Let's take action today to boost your business on AWS.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
                AwsfeatureData?.map((f,i)=><FeatureCard feature={f} key={i}/> )
               }
            
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingFeature
