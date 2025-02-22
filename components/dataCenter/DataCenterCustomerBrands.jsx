"use client";

import React from "react";

const DataCenterCustomerBrands = () => {
  const brands = [
    { id: 1, src: "/img/Acronis partner.png", alt: "Brand 1" },
    { id: 2, src: "/img/Akamai partner.png", alt: "Brand 2" },
    { id: 3, src: "/Our Partners/AWS.png", alt: "Brand 3" },
    { id: 4, src: "/img/e2e cloud.png", alt: "Brand 4" },
    { id: 5, src: "/img/Google Cloud Partner in India.png", alt: "Brand 5" },
    { id: 7, src: "/Our Partners/Google workspace.png", alt: "Brand 7" },
    { id: 8, src: "/Our Partners/cpanel.png", alt: "Brand 8" },
    { id: 9, src: "/Our Partners/Azure.png", alt: "Brand 9" },
    { id: 10, src: "/Our Partners/office 365.png", alt: "Brand 8" },
    { id: 11, src: "/Our Partners/plesk.png", alt: "Brand 9" },
  ];

  return (
    <section
      className="pt-60 pb-60"
      style={{ background: "#fff", paddingBottom: "30px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xxl-7">
            <div className="text-center">
              <h2
                class="mb-6 fw-semibold text-center f-16 sal-animate"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Our{" "}
                <a href="#" class="text-decoration-none text-success-new">
                  Partners
                </a>
              </h2>
              <p className="mb-0 max-text-52 mx-auto">
                Trusted Partners for Our Cloud Solutions
              </p>
              <p>
                Explore our wide range of partners who help us deliver
                exceptional services.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-6 justify-content-center mt-5">
          {brands.map((brand) => (
            <div key={brand.id} className="col">
              <div className="card shadow h-100 hover-text-white border-0">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <div className="w-40 h-20 d-flex justify-content-center align-items-center flex-shirnk-0">
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="img-fluid"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataCenterCustomerBrands;
