import { nodejsHostingProvider } from "../../utils/data";
import PlansOne from "../reactjs/PlansOne";

const SharedHostingPrice = () => {
  return (
    <>
      <div className="domain-list-section position-relative pb-60">
        <div className="container ">
          <div className="row g-4">
            <PlansOne
              title="Power Your Projects with the Best Node.js Server Hosting Plans "
              price={true}
              pricingData={nodejsHostingProvider}
              subtitle="Discover the best Node.js hosting server plans at unbeatable prices. Our affordable and reliable plans offer speed, scalability, and performance, ensuring your applications run smoothly without breaking your pocket."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingPrice;
