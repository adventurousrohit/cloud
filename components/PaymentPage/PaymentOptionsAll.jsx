import React from 'react';
import './PaymentOptionsAll.css';

const PaymentOptions = () => {
  return (
    <>
      {/* Credit and Debit Cards Section */}
      <section className="section bg-pattern-1">
        <div className="container">
          <div className="row row1" id="credit-cards">
            <div className="heading-section">
              <div className="heading-subtitle">
                <span className="tx-primary tx-16 fw-semibold">Cards</span>
              </div>
              <div className="heading-title">
                Credit and Debit <span className="tx-primary">Cards</span>
              </div>
              <div className="heading-description">
                Check out our card payments options
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/2-ca820a37.png"
                      alt="Mastercard"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Mastercard</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/10-4a6b79e8.png"
                      alt="Visa Debit Card"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Visa Debit Card</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/1-9410b540.png"
                      alt="Discover Network"
                      className="img-fluid payment-options dark-invert"
                    />
                  </a>
                  <p className="mb-0 fw-500">Discover Network</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/3-90798a5d.png"
                      alt="Maestro"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Maestro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfers Section */}
      <section className="section bg-pattern-1 bg-image1 bg-gray-100">
     
        <div className="container">
          <div className="row row1" id="bank-transfer">
            <div className="heading-section">
              <div className="heading-subtitle">
                <span className="tx-primary tx-16 fw-semibold">Transfers</span>
              </div>
              <div className="heading-title">
                Bank <span className="tx-primary">Transfers</span>
              </div>
              <div className="heading-description">
                Check out our bank transfers options
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/9-184e618d.png"
                      alt="Unified Payment Interface"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Unified Payment Interface</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/12-6227e89e.png"
                      alt="American Express"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">American Express</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/5-5ace1e81.png"
                      alt="Net Banking"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Net Banking</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/11-94a81519.png"
                      alt="Direct Debit"
                      className="img-fluid payment-options dark-invert"
                    />
                  </a>
                  <p className="mb-0 fw-500">Direct Debit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Wallets Section */}
      <section className="section bg-pattern-1">
        <div className="container">
          <div className="row row1" id="wallets">
            <div className="heading-section">
              <div className="heading-subtitle">
                <span className="tx-primary tx-16 fw-semibold">Wallets</span>
              </div>
              <div className="heading-title">
                E-Wallets <span className="tx-primary">Transfers</span>
              </div>
              <div className="heading-description">
                Check out our E-Wallets transfers options
              </div>
            </div>
            <div className="col-lg-3 col-md-6 extra-payment">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/7-e98caf53.png"
                      alt="Paytm"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Paytm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 extra-payment">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/6-6d7c6d0c.png"
                      alt="Paypal"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Paypal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 extra-payment">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/8-d5dbb1ba.png"
                      alt="Phonepe"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Phonepe</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 extra-payment">
              <div className="card text-center">
                <div className="card-body">
                  <a href="#">
                    <img
                      src="/img/2-ca820a37.png"
                      alt="Google Pay"
                      className="img-fluid payment-options"
                    />
                  </a>
                  <p className="mb-0 fw-500">Google Pay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentOptions;
