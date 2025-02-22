import { pricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60">
        <div className="container">
            <div className="row g-6">       
            <PriceCard title="Unbeatable Shared Hosting Plans"  price={true} pricingData={pricingData} subtitle="Want to know what we have for you? Have a look at our amazing yet pocket-friendly shared hosting plans and pick one according to your business requirements." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
