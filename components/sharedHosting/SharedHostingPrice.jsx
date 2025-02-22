import { pricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60">
        <div className="container">
            <div className="row g-6">       
            <PriceCard title="Affordable Linux Web Hosting Plans to Elevate Your Online Presence"  price={true} pricingData={pricingData} subtitle="Choose budget-friendly Linux hosting plans designed for speed, security, and scalability. These plans will ensure your website thrives without breaking the bank and help your business fruitfully grow." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
