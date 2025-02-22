import {  WildCardPlan  } from "../../utils/data";
import WildCardSslPlan from "../common/card/WildCardSslPlan";

const WildCardSsl = () => {

  return (
    <>
    
       <div className="pt-10 pb-10 bg-primary bg-opacity-5">
        <div className="container ">
            <div className="row g-6">       
            <WildCardSslPlan title="Browse, Buy, and Be Secure: SSL Certificate Plans for Every Need!"  price={true} pricingData={ WildCardPlan } subtitle="Want to know what we have for you? Have a look at our amazing yet pocket-friendly shared hosting plans and pick one according to your business requirements." />
            </div>
        </div>
    </div>
    </>
  )
};

export default WildCardSsl
