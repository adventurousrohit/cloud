import { linuxDedicatedpricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60 ">
        <div className="container ">
            <div className="row g-4">       
            <PriceCard title="Affordable Linux Dedicated Server Hosting Plans"  price={true} pricingData={linuxDedicatedpricingData} subtitle="Unlock unparalleled performance with fully customizable Linux dedicated servers. Enjoy exclusive hardware, no resource sharing, and seamless support for demanding projects—all at a cost that fits your budget." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
