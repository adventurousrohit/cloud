import { Link,useNavigate } from "react-router-dom";
import React, {useState}from "react";
const TransferDomaiSearch = () => {
    const [domain, setDomain] = useState(""); // State to store input value
    const navigate = useNavigate(); // React Router hook for navigation
  
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (domain.trim()) {
          // Redirect to the external website with the entered domain
          window.location.href = `https://manage.cloudminister.com/cart.php?a=add&domain=transfer&query=${domain}`;
        }
      };
      
  return (
    <>
      <div className="domain-list-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 rounded-4">
                        <div className="card-body pt-60 pb-60 px-md-12 text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-xl-8">
                                    <div className="overflow-hidden text-center mb-6">
                                        <h5 className="mb-0 d-inline-block flush-subtitle">
                                            Get Your .com Domain Today
                                        </h5>
                                    </div>
                                    <div className="d-flex justify-content-center mx-auto max-text-72 border border-dark border-opacity-10 rounded p-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
                                        <input type="text" className="form-control form-control-sm search-input flex-grow-1" placeholder="Search Domain..." value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        required/>
                                        <button type="button" className="btn btn-sm btn-primary btn-arrow btn-arrow-sm btn-lg fs-14 fw-medium rounded flex-shrink-0" onClick={handleSearch} >
                                            <span className="btn-arrow__text">
                                                Search
                                                <span className="btn-arrow__icon">
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                    <p className="mt-6 mb-0 fw-medium fs-14">
                                        Looking for a new domain? <Link href="/domain-name/" className="text-decoration-none d-inline-block">Search available domains</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default TransferDomaiSearch
