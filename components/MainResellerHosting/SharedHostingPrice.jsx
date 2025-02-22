import { HostingProvider ,windowsresellerpricingData} from "../../utils/data";
import PriceCard from "./PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60">
        <div className="container ">
            <div className="row g-4">       
            <PriceCard title="Save Big with Our Affordable Reseller Hosting Plans"  price={true} linuxPricingData={HostingProvider} windowsPricingData={windowsresellerpricingData} subtitle="With our affordable reseller plans, which provide excellent performance, dependability, and support at incomparable pricing, you can launch your own company!" />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
