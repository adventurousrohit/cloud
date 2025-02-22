import { pricingData ,windowspricingData} from "../../utils/data";
import PriceCard from "./PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60">
        <div className="container">
            <div className="row g-6">       
            <PriceCard title="Get Started With the Best Shared Hosting Plans"  price={true} linuxPricingData={pricingData} windowsPricingData={windowspricingData} subtitle="Experience budget-friendly shared hosting plans that scales seamlessly with your business growth, ensuring optimal performance as you expand online." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
