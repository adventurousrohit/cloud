import { useState } from "react";

const ModernHomeDomain = () => {
    const [domain, setDomain] = useState("");
    const [extension, setExtension] = useState(".com");
  
    const handleDomainChange = (e) => setDomain(e.target.value);
    const handleExtensionChange = (e) => setExtension(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Searching for: ${domain}${extension}`);
      // Add logic for domain search
    };
  return (
    <>
          <section className="pt-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card rounded-4">
              <div className="card-body pt-60 pb-60 position-relative z-1">
                <img
                  src="/img/shape/domain-8-shape.png"
                  alt="image"
                  className="img-fluid position-absolute h-100 top-0 end-0 z-n1"
                />
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="text-center h4"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease-in-out-sine"
                    >
                      Every Great Website Needs <br /> a Great Name.
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      className="domain-form-one mx-auto position-relative mt-8"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease-in-out-sine"
                    >
                      <input
                        type="text"
                        className="form-control bg-transparent p-4"
                        placeholder="Domain Name"
                        value={domain}
                        onChange={handleDomainChange}
                      />
                      <div className="domain-submit-box d-flex align-items-center gap-3 position-absolute">
                        <select
                          className="border-0 bg-transparent"
                          value={extension}
                          onChange={handleExtensionChange}
                        >
                          <option value=".com">.com</option>
                          <option value=".net">.net</option>
                          <option value=".org">.org</option>
                        </select>
                        <button
                          className="btn btn-warning rounded-2 fw-bold"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div
                      className="d-flex align-items-center justify-content-center gap-4 flex-wrap flex-xl-nowrap mt-6"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease-in-out-sine"
                    >
                      <DomainButton text=".com" price="$9.56/Year" color="primary" />
                      <DomainButton text=".co" price="$4.56/Year" color="danger" />
                      <DomainButton text=".info" price="$9.56/Year" color="warning" />
                      <DomainButton text=".org" price="$6.56/Year" color="success" />
                      <DomainButton text=".biz" price="$6.56/Year" color="info" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
};

const DomainButton = ({ text, price, color }) => (
    <button
      type="button"
      className="bg-transparent d-inline-flex align-items-center gap-2 border-0"
    >
      <span className={`h6 mb-1 text-${color} d-inline-block`}>{text}</span>
      <small className="fw-medium d-inline-block">{price}</small>
    </button>
  );

export default ModernHomeDomain
