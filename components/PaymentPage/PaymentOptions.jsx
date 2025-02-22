import React from "react";
import "./PaymentOptions.css";

const PaymentOptions = () => {
  return (
    <section className="section bg-pattern-1 bg-image3 bg-gray-100">
      <div className="container">
        <div className="heading-section">
          <div className="heading-subtitle">
            <span className="tx-primary tx-16 fw-semibold">Options</span>
          </div>
          <div className="heading-title">
            Payment <span className="tx-primary">Options</span>
          </div>
          <div className="heading-description">
            Check out our payment methods
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 card p-10">
            <h4>Payment Methods</h4>
            <p className="mb-4">
              We accept payments from you in the following different ways.
            </p>
            {/* <div className="d-flex align-items-start mb-4">
              <div className="me-3">
                <span className="avatar text-bg-primary rounded-circle tx-20">
                  <i className="bi bi-credit-card"></i>
                </span>
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1 tx-18">Credit and Debit Cards</h5>
                <p className="mb-0">
                  Justo aliquyam duo vero clita aliquyam vero eirmod stet amet.
                  Dolores est eos et est kasd, invidunt aliquyam no sadipscing.
                  <a href="#credit-cards" className="tx-primary tx-14">
                    View Details
                  </a>
                </p>
              </div>
            </div> */}
            <div className="d-flex align-items-start mb-4">
              <div className="me-3">
                <span className="avatar text-bg-secondary rounded-circle tx-20">
                  <i className="bi bi-bank"></i>
                </span>
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1 tx-18">Bank Transfer</h5>
                <p className="mb-0 mt-6">
                  <p>Bank Name: ICICI Bank</p>
                  <p>Branch: Chitrakoot Marg, Jaipur</p>
                  <p>
                    Account Name: CLOUDMINISTER TECHNOLOGIES PRIVATE LIMITED
                  </p>
                  <p>ACC NO.- 677205601576</p>
                  <p>Account Type: Current</p>
                  <p>IFSC code -ICIC0006772</p>
                  <p>AccountType: Current</p>
                </p>
              </div>
            </div>
            {/* <div className="d-flex align-items-start mb-4">
              <div className="me-3">
                <span className="avatar text-bg-success rounded-circle tx-20">
                  <i className="bi bi-wallet2"></i>
                </span>
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1 tx-18">E-Wallets</h5>
                <p className="mb-0">
                  Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur.
                  <a href="#wallets" className="tx-primary tx-14">
                    View Details
                  </a>
                </p>
              </div>
            </div> */}
            {/* <div className="d-flex align-items-start">
              <div className="me-3">
                <span className="avatar bg-warning text-white rounded-circle tx-20">
                  <i className="bi bi-cash"></i>
                </span>
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1 tx-18">Other Offline Payment Options</h5>
                <p className="mb-0">
                  Adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                  <a href="#offline" className="tx-primary tx-14">
                    View Details
                  </a>
                </p>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="/img/Payment Options.png"
              className="reseller-img img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
