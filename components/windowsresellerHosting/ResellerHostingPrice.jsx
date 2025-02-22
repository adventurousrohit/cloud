import { windowsresellerpricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const ResellerHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60">
        <div className="container">
            <div className="row g-4">
               <PriceCard title="Start Your Reselling Journey with Affordable Windows Hosting Plans"  price={true} pricingData={windowsresellerpricingData} subtitle="With our reasonably priced reseller web hosting packages, seize the opportunity to dominate the Windows reseller market in India. With the greatest Windows reseller hosting, take advantage of dependable, high-performing services at the most competitive pricing, perfect for expanding your business in the market." />
            </div>
        </div>
    </div>
    </>
  )
};

export default ResellerHostingPrice
