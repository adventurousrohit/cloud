import { windowspricingData } from "../../utils/data";
import PriceCard from "../common/card/PriceCard";

const SharedHostingPrice = () => {

  return (
    <>
       <div className="domain-list-section position-relative pb-60 ">
        <div className="container">
            <div className="row g-4">
               <PriceCard title="Choose from the Best Windows Shared Hosting Plans in India"  price={true} pricingData={windowspricingData} subtitle="Unlock the potential of your business by choosing CloudMinister with reliable and affordable Windows Shared Hosting in India. Enjoy seamless performance, enhanced security, and scalable plans tailored to support your growth every step of the way." />
            </div>
        </div>
    </div>
    </>
  )
};

export default SharedHostingPrice
