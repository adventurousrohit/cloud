import { reactHostingProvider } from "../../utils/data";
import PlansOne from "./PlansOne";

const SharedHostingPrice = () => {
  return (
    <>
      <div className="domain-list-section position-relative pb-60">
        <div className="container ">
          <div className="row g-4">
            <PlansOne
              title="Rich, Affordable & Budget Friendly ReactJS Hosting Plans"
              price={true}
              pricingData={reactHostingProvider}
              subtitle="CloudMinister provides high performance with budget-friendly hosting. The ReactJS Hosting plans and the prices include development and deployment and all you need within the budget."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingPrice;
