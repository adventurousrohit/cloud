import { pythonHostingProvider } from "../../utils/data";
import PlansOne from "../reactjs/PlansOne";

const SharedHostingPrice = () => {
  return (
    <>
      <div className="domain-list-section position-relative pb-60">
        <div className="container ">
          <div className="row g-4">
            <PlansOne
              title="High-Performance Python Hosting Plans at Competitive Prices"
              price={true}
              pricingData={pythonHostingProvider}
              subtitle="Our Python hosting plans are a perfect fit for high speed and performance, offering robust cloud infrastructure and scalable options. Whether you're a startup or an enterprise, our competitive pricing ensures you get optimal power without compromise."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingPrice;
