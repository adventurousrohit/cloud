
import { useLocation } from "react-router-dom";
import { pricingData } from "../../../utils/data";
import PriceCard from "../card/PriceCard";

const PriceTab = () => {
    const location=useLocation()
  return (
    <>
      <section className="location-tab pb-120 position-relative z-1">
        <div className="container">
            <div className="row g-4">
                <div className="col-12">
                    <div className="d-flex justify-content-center border-bottom border-light border-opacity-10" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="pricing-nav-pills d-inline-block mx-auto overflow-x-auto">
                            <ul className="nav nav-pills flex-nowrap gap-3 gap-sm-0" role="tablist">
                                <li className="nav-item flex-shrink-0" role="presentation">
                                    <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-bold px-3 pb-2 active" href="#" data-bs-toggle="pill" data-bs-target="#storageOpt" aria-selected="true" role="tab">
                                        Storage Optimized
                                    </a>
                                </li>
                                <li className="nav-item flex-shrink-0" role="presentation">
                                    <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-bold px-3 pb-2" href="#" data-bs-toggle="pill" data-bs-target="#accountOpt" aria-selected="true" role="tab">
                                        Accounts Optimized
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               {/*  */}
               <div className="col-12">
                    <div className="tab-content" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="tab-pane fade show active" id="storageOpt" role="tabpanel">
                            <div className="row g-4">
                                {
                                    pricingData.map((p,i)=><PriceCard price={p} key={i}/>)
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="accountOpt" role="tabpanel">
                        <div className="row g-4">
                                {
                                    pricingData.map((p,i)=><PriceCard price={p} key={i}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {
           (location.pathname==="/cpanel-hosting" || location.pathname=="/web-hosting-new") &&  <div className="pt-40">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="400" data-sal-delay="100" data-sal-easing="ease-in-out-sine">
                        <h6>Free Setup & Installation*</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="450" data-sal-delay="150" data-sal-easing="ease-in-out-sine">
                        <h6>Best in Class Encryption</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                        <h6>24x7 Support</h6>
                        <p>Need help? We will set up and install your SSL
                            certificate free of charge!*</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </section>
    </>
  )
};

export default PriceTab
