import { forexHostingProvider } from "../../utils/data";
import PlansOne from "../reactjs/PlansOne";

const SharedHostingPrice = () => {
  return (
    <>
      <div className="domain-list-section position-relative pb-60">
        <div className="container ">
          <div className="row g-4">
            <PlansOne
              title="Affordable Forex VPS Hosting: Plans That Match Your Trading Needs"
              price={true}
              pricingData={forexHostingProvider}
              subtitle="Whether you're a beginner or a pro, our hosting is your perfect trading companion, giving you the edge to succeed in the fast-paced world of Forex."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingPrice;
