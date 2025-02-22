import { Link,useNavigate } from "react-router-dom";
import React, {useState}from "react";
const DomainRegiHero = () => {
   const [domain, setDomain] = useState(""); // State to store input value
      const navigate = useNavigate(); // React Router hook for navigation
    
      const handleSearch = (e) => {
          e.preventDefault(); // Prevent default form submission
          if (domain.trim()) {
            // Redirect to the external website with the entered domain
            window.location.href = `https://manage.cloudminister.com/cart.php?a=add&domain=register&query=${domain}`;
          }
        };
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {/* <span
                className="fs-18 fw-semibold text-primary mb-2"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Security & Technology
              </span> */}
              <h1
                className="text-white mb-3"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                CloudMinister: Your Trusted Domain Registration Partner
              </h1>
              <p
                className="mb-8 text-white max-text-72 text-opacity-75 mx-auto"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Secure domains effortlessly with reliability and unmatched
                service quality.
              </p>
              <div
                className="d-flex justify-content-center mx-auto max-text-72 border border-primary border-opacity-25 rounded p-2"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="200"
                data-sal-easing="ease-in-out-sine"
              >
                <input
                  type="text"
                  className="form-control search-input search-input--light flex-grow-1"
                  placeholder="Search Domain..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                />
                <button
                 onClick={handleSearch}
                  type="button"
                  className="btn btn-primary btn-arrow btn-arrow-sm btn-lg fs-14 fw-semibold rounded flex-shrink-0"
                >
                  <span className="btn-arrow__text">
                    Search
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
              <span
                className="d-block text-center text-white text-opacity-75 mt-4"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Already bought domain?{" "}
                <Link href="/domain-transfer/" className="text-decoration-none">
                  Transfer it
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DomainRegiHero;
