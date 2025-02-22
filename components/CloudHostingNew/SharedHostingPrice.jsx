import { CloudpricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60 ">
        <div className="container ">
            <div className="row g-4">       
            <PriceCard title="Find the Perfect Cloud Hosting Plan to Fit Your Budget"  price={true} pricingData={CloudpricingData} subtitle="Experience unbeatable performance with our cloud hosting services, offering dedicated server resources, top-tier security, lightning-fast speed, and unmatched uptime. Choose the perfect plan tailored to your business needs." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
