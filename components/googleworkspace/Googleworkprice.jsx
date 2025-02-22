import { googleworkpricingData  } from "../../utils/data";
import Googleworkcard from "../common/card/Googleworkcard";

const Googleworkprice = () => {

  return (
    <>
       <div className=" pt-10 pb-10 bg-primary bg-opacity-5">
        <div className="container">
            <div className="row g-4">
               <  Googleworkcard  title="Explore Your Work with Affordable Google Workspace Plans in India"  price={true} pricingData={ googleworkpricingData  } subtitle="Affordable Google Workspace solutions that are customized to your company's requirements will help you succeed easily by enabling smooth collaboration and efficiency."   />
               
            </div>
        </div>
    </div>
    </>
  )
};

export default Googleworkprice