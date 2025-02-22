import { microsoft360pricingData  } from "../../utils/data";
import Googleworkcard from "../common/card/Googleworkcard";

const Googleworkprice = () => {

  return (
    <>
       <div className="pt-10 pb-10 bg-primary bg-opacity-5">
        <div className="container">
            <div className="row g-4">
               <  Googleworkcard  title="Affordable Productivity: Your Choice of Microsoft 365 Plans in India"  price={true} pricingData={ microsoft360pricingData  } subtitle="Discover flexible Microsoft 365 plans designed to fit your budget and boost productivity, all at your convenience."   />
               
            </div>
        </div>
    </div>
    </>
  )
};

export default Googleworkprice