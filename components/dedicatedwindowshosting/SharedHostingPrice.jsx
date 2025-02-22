import { windowsDedicatedpricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60 ">
        <div className="container ">
            <div className="row g-4">       
            <PriceCard title="Affordable Windows Server Hosting Plans for Growing Businesses"  price={true} pricingData={windowsDedicatedpricingData} subtitle="Get reliable and budget-friendly Windows Dedicated Hosting in India. Enjoy top-tier performance, unmatched security, and 100% uptime with customizable plans tailored to your needs. Elevate your hosting experience with robust Windows server solutions." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
