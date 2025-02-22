import { linuxDedicatedpricingData ,windowsDedicatedpricingData} from "../../utils/data";
import PriceCard from "./PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60 ">
        <div className="container ">
            <div className="row g-4">       
            <PriceCard title="Choose Dedicated Server Hosting Plans in India"  price={true} linuxPricingData={linuxDedicatedpricingData} windowsPricingData={windowsDedicatedpricingData} subtitle="Choose your ideal dedicated server plan today and explore unparalleled performance, security, and scalability. Whether for personal or business use, our flexible options/plans are designed to meet your needs within the budget." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
