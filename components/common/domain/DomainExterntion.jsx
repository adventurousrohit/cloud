"use client";

import React, { useState, useContext } from "react";
import { CurrencyContext } from "../../currencyconversion/Currencyconversion";
const DomainExterntion = ({ transferdomain }) => {
  const { convert, currency } = useContext(CurrencyContext);
  const [searchTerm, setSearchTerm] = useState("");

  const domainData = [
    {
      extension: ".com",
      registration: 1079,
      transfer: 1079,
      renewal: 1150,
      idProtection: 250,
    },
    {
      extension: ".in",
      registration: 559,
      transfer: 559,
      renewal: 659,
      idProtection: "-",
    },
    {
      extension: ".com.au",
      registration: 567.05,
      transfer: 775,
      renewal: 775,
      idProtection: "-",
    },
    {
      extension: ".net",
      registration: 1087.9,
      transfer: 1275,
      renewal: 1275,
      idProtection: "-",
    },
    {
      extension: ".org",
      registration: 979,
      transfer: 1370,
      renewal: 1370,
      idProtection: "-",
    },
    {
      extension: ".biz",
      registration: 530,
      transfer: 1703.9,
      renewal: 1703.9,
      idProtection: "-",
    },
    {
      extension: ".info",
      registration: 400,
      transfer: 2077.9,
      renewal: 2077.9,
      idProtection: "-",
    },
    {
      extension: ".asia",
      registration: 875,
      transfer: 1311.75,
      renewal: 1311.75,
      idProtection: "-",
    },
    {
      extension: ".mobi",
      registration: 582,
      transfer: 2616.9,
      renewal: 2616.9,
      idProtection: "-",
    },
    {
      extension: ".name",
      registration: 834,
      transfer: 834,
      renewal: 834,
      idProtection: "-",
    },
    {
      extension: ".co",
      registration: 1035,
      transfer: 2715.9,
      renewal: 2715.9,
      idProtection: "-",
    },
    {
      extension: ".me",
      registration: 2622,
      transfer: 2622,
      renewal: 2622,
      idProtection: "-",
    },
    {
      extension: ".ca",
      registration: 1218,
      transfer: 1218,
      renewal: 1218,
      idProtection: "-",
    },
    {
      extension: ".cc",
      registration: 960,
      transfer: 960,
      renewal: 960,
      idProtection: "-",
    },
    {
      extension: ".eu",
      registration: 654,
      transfer: 654,
      renewal: 654,
      idProtection: "-",
    },
    {
      extension: ".us",
      registration: 416.9,
      transfer: 760,
      renewal: 760,
      idProtection: "-",
    },
    {
      extension: ".ws",
      registration: 2400,
      transfer: 2400,
      renewal: 2400,
      idProtection: "-",
    },
    {
      extension: ".pro",
      registration: 1638,
      transfer: 1638,
      renewal: 1638,
      idProtection: "-",
    },
    {
      extension: ".au",
      registration: 864,
      transfer: 864,
      renewal: 864,
      idProtection: "-",
    },
    {
      extension: ".de",
      registration: 376.2,
      transfer: 565,
      renewal: 565,
      idProtection: "-",
    },
    {
      extension: ".blog",
      registration: 2340,
      transfer: 2340,
      renewal: 2340,
      idProtection: "-",
    },
    {
      extension: ".co.uk",
      registration: 774,
      transfer: 774,
      renewal: 774,
      idProtection: "-",
    },
    {
      extension: ".online",
      registration: 835,
      transfer: 2825.9,
      renewal: 2825.9,
      idProtection: "-",
    },
    {
      extension: ".top",
      registration: 750,
      transfer: 750,
      renewal: 750,
      idProtection: "-",
    },
    {
      extension: ".uk",
      registration: 738,
      transfer: 738,
      renewal: 738,
      idProtection: "-",
    },
    {
      extension: ".vip",
      registration: 1395.9,
      transfer: 1395.9,
      renewal: 1395.9,
      idProtection: "-",
    },
    {
      extension: ".xyz",
      registration: 185.9,
      transfer: 1150,
      renewal: 1150,
      idProtection: "-",
    },
    {
      extension: ".club",
      registration: 2216.28,
      transfer: 2216.28,
      renewal: 2216.28,
      idProtection: "-",
    },
    {
      extension: ".co.in",
      registration: 416.9,
      transfer: 416.9,
      renewal: 416.9,
      idProtection: "-",
    },
  ];

  const filteredDomains = domainData.filter((domain) =>
    domain.extension.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="pt-60 pb-120">
        {transferdomain ? (
          <>
            <div className="pb-40">
              <div className="container">
                <div className="row justify-content-center">
                  <div
                    className="col-md-10 col-lg-8 col-xl-6 text-center"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease-in-out-sine"
                  >
                    <span className="d-inline-block fs-18 fw-semibold text-primary mb-2">
                      Technology Overview
                    </span>
                    <h2 className="mb-0" data-sal="slide-up">
                      Move Your Domain Without the Stress – Plans Made for You!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="pb-40">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-10 col-lg-8 col-xl-6"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span className="fs-18 fw-semibold text-primary mb-2">
                    TLD List
                  </span>
                  <h2 className="mb-0" data-sal="slide-up">
                    Find the Perfect Domain Register with Our Affordable Plans
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="row g-4">
            <div
              className="col-md-8 col-lg-9"
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card rounded-3">
                <div className="card-body p-xl-6">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control bg-transparent py-2 px-8"
                      placeholder="Search Extensions"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="text-body position-absolute start-3 lh-1 top-3">
                      <i className="las la-search"></i>
                    </span>
                  </div>
                  <div className="table-responsive mt-6">
                    <table className="table table-borderless domain-list-table mb-0">
                      <thead>
                        <tr>
                          <th>
                            <div className="h6 mb-0 fs-16">Extension</div>
                          </th>
                          <th>
                            <div className="h6 mb-0 fs-16">Registration</div>
                          </th>
                          <th>
                            <div className="h6 mb-0 fs-16">Renewal</div>
                          </th>
                          <th>
                            <div className="h6 mb-0 fs-16">Transfer</div>
                          </th>
                          <th>
                            <div className="h6 mb-0 fs-16">ID Protection</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDomains.map((domain, index) => (
                          <tr>
                            <th className="shadow-none">
                              <p className="text-body fw-semibold mb-0">
                                {domain.extension}
                              </p>
                            </th>
                            <th className="shadow-none">
                              <p className="text-body fw-semibold mb-0">
                                {currency === "INR"
                                  ? "₹"
                                  : currency === "USD"
                                  ? "$"
                                  : ""}
                                {convert(domain.registration, "INR", currency)}
                              </p>
                            </th>
                            <th className="shadow-none">
                              <p className="text-body fw-semibold mb-0">
                                {currency === "INR"
                                  ? "₹"
                                  : currency === "USD"
                                  ? "$"
                                  : ""}
                                {convert(domain.transfer, "INR", currency)}
                              </p>
                            </th>
                            <th className="shadow-none">
                              <p className="text-body fw-semibold mb-0">
                                {currency === "INR"
                                  ? "₹"
                                  : currency === "USD"
                                  ? "$"
                                  : ""}
                                {convert(domain.renewal, "INR", currency)}
                              </p>
                            </th>
                            <th className="shadow-none">
                              <p className="text-body fw-semibold mb-0">
                                {domain.idProtection !== "-"
                                  ? `${domain.idProtection}`
                                  : "-"}
                              </p>
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainExterntion;
