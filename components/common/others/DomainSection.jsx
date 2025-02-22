import React from 'react';

const DomainSection = () => {
  return (
    <section className="domain-container position-relative z-1 overflow-hidden mb-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="card rounded-4">  
              <div className="card-body pt-60 pb-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <h2
                      className="text-center h4"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease-in-out-sine"
                    >
                      Find the Right Plan & Register a Domain Now!
                    </h2>
                    <form
                      action="#"
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
                      />
                      <div className="domain-submit-box d-flex align-items-center gap-3 position-absolute">
                        <select className="border-0 bg-transparent">
                          <option value=".com">.com</option>
                          <option value=".net">.net</option>
                          <option value=".org">.org</option>
                        </select>
                        <button onClick={(e)=>e.preventDefault()} className="btn btn-primary rounded-2 fw-bold" type="submit">
                          Search
                        </button>
                      </div>
                    </form>
                    <div
                      className="d-flex align-items-center justify-content-center gap-12 flex-wrap  mt-6"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-delay="200"
                      data-sal-easing="ease-in-out-sine"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-light d-inline-flex align-items-center gap-2 border border-gray-100"
                      >
                        <span className="h6 mb-1 text-primary d-inline-block">.com</span>
                        <small className="fw-medium d-inline-block">₹ 1,079.00/Year</small>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-light d-inline-flex align-items-center gap-2 border border-gray-100"
                      >
                        <span className="h6 mb-1 text-warning d-inline-block">.in</span>
                        <small className="fw-medium d-inline-block">₹ 517.00/yr/Year</small>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-light d-inline-flex align-items-center gap-2 border border-gray-100"
                      >
                        <span className="h6 mb-1 text-success d-inline-block">.org</span>
                        <small className="fw-medium d-inline-block">₹ 950.00/yr/Year</small>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-light d-inline-flex align-items-center gap-2 border border-gray-100"
                      >
                        <span className="h6 mb-1 text-danger d-inline-block">.co.in</span>
                        <small className="fw-medium d-inline-block">₹ 399.00/Year</small>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
