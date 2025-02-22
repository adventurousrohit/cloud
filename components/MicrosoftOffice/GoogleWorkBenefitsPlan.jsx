import { Microsoft365} from "../../utils/data";
import SslVarietyReasonsCard from "../common/card/SslVarietyReasonsCard";
const GoogleWorkBenefitsPlan = () => {
  return (
    <>
       <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-10 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-0">
                        Why Choose All-in-One Microsoft 365 Features?
                        </h2>
                        <p className="mt-4">
                        Streamline work, enhance collaboration, and secure data with Microsoft 365's all-in-one features and giving reasons to choose Microsoft 365 from CloudMinister.
                </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
               {
             Microsoft365.map((f,i)=><SslVarietyReasonsCard feature={f} key={i}/> )
               }
            
            </div>
        </div>
    </div>
    </>
  )
}
  export default GoogleWorkBenefitsPlan
  