import { HostingProvider } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60">
        <div className="container ">
            <div className="row g-4">       
            <PriceCard title="Affordable Linux Reseller Hosting Plans for Growing Businesses"  price={true} pricingData={HostingProvider} subtitle="Dive into the potential of your business with our affordable Linux reseller hosting plans. Tailored to fit your needs, empowering you to resell with confidence!" />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
