import { useLocation } from "react-router-dom";

const DomainTransferStep = () => {
  const location = useLocation();
  return (
    <>
      <div className="pt-60 pb-120">
        {location.pathname === "/domain-transfer/" ? (
          <div className="pb-40">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-md-10 col-lg-8 col-xl-8 text-center"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span className="d-inline-block fs-18 fw-semibold text-primary mb-2">
                    Technology Overview
                  </span>
                  <h2 className="mb-0">
                    Switching Domains? CloudMinister Makes It Easy in 4 Steps
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-40">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-10 col-lg-8 col-xl-8"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                  data-sal-easing="ease-in-out-sine"
                >
                  <span className="fs-18 fw-semibold text-primary mb-2">
                    Technology Overview
                  </span>
                  <h2 className="mb-0">
                    Switching Domains? CloudMinister Makes It Easy in 4 Steps
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div
              className="col-12"
              data-sal="fade"
              data-sal-duration="1500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card rounded-3">
                <div className="card-body p-md-6 p-xl-10">
                  <div className="tab-content pb-40">
                    <div className="tab-pane fade show active" id="validDomain">
                      <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                          <img
                            src="/img/setp-img-1.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="badge fw-medium text-bg-primary">
                            Step 01
                          </span>
                          <h5 className="mt-3 mb-4">Get Ready Your Domain</h5>
                          <p className="mb-8">
                            Before a transfer, your domain should be unlocked
                            and able to be transferred. <br /> <br /> Deactivate domain lock
                            or registrar lock.<br /> <br /> Confirm that your domain is not
                            locked for 60 days. Admin email should be updated
                            and should be able to receive the transfer code.<br /> <br /> Pro
                            Tip: Recheck your present registrar's policies to
                            avoid transfer delay.
                          </p>
                          {/* <ul className="list-unstyled p-0 m-0">
                            <li className="d-flex align-items-start gap-2 mb-4 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Name:</strong> Enter the full
                                domain name you want to transfer
                              </span>
                            </li>
                            <li className="d-flex align-items-start gap-2 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Unlock:</strong> Ensure your
                                domain is unlocked for transfer
                              </span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="unlockedDomain">
                      <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                          <img
                            src="/img/setp-img-1.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="badge fw-medium text-bg-primary">
                            Step 02
                          </span>
                          <h5 className="mt-3 mb-4">
                            Get the Auth Code (EPP Code)
                          </h5>
                          <p className="mb-8">
                            Your domain's transfer passport is actually the
                            authorization code, also referred to as EPP code.
                            Get this from your current registrar. <br /> <br />Login into
                            your account of the registrar <br /> <br />Find the domain
                            management section<br /> <br /> Generate or retrieve your EPP
                            code safely.<br /> <br /> Note: Remember to keep it confidential
                            so your domain transfer won't be in any danger.
                          </p>
                          {/* <ul className="list-unstyled p-0 m-0">
                            <li className="d-flex align-items-start gap-2 mb-4 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Name:</strong> Enter the full
                                domain name you want to transfer
                              </span>
                            </li>
                            <li className="d-flex align-items-start gap-2 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Unlock:</strong> Ensure your
                                domain is unlocked for transfer
                              </span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="actNow">
                      <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                          <img
                            src="/img/setp-img-1.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="badge fw-medium text-bg-primary">
                            Step 03
                          </span>
                          <h5 className="mt-3 mb-4">Start the Transfer</h5>
                          <p className="mb-8">
                            After obtaining the EPP code, let's get the ball
                            rolling and start the transfer process with us:<br /> <br />
                            Enter your domain name in our transfer tool.<br /> <br /> Insert
                            the EPP code when requested.<br /> <br /> Accept the transfer
                            request by email.<br /> <br /> Our system automatically completes
                            the process, ensuring an easy and secure transfer.
                          </p>
                          {/* <ul className="list-unstyled p-0 m-0">
                            <li className="d-flex align-items-start gap-2 mb-4 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Name:</strong> Enter the full
                                domain name you want to transfer
                              </span>
                            </li>
                            <li className="d-flex align-items-start gap-2 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Unlock:</strong> Ensure your
                                domain is unlocked for transfer
                              </span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="optionDomain">
                      <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                          <img
                            src="/img/setp-img-1.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-6">
                          <span className="badge fw-medium text-bg-primary">
                            Step 04
                          </span>
                          <h5 className="mt-3 mb-4">Confirm and Complete</h5>
                          <p className="mb-8">
                            Look out for a confirmation email from your current
                            registrar that your transfer request has been
                            successful. Approve the request and complete the
                            transfer.<br /> <br /> The entire process usually takes 5-7 days,
                            depending on the registrar.<br /> <br /> Once this is done, your
                            domain will be transferred to your new registrar.<br /> <br />
                            Satisfied knowing your domain is now in good hands.
                          </p>
                          {/* <ul className="list-unstyled p-0 m-0">
                            <li className="d-flex align-items-start gap-2 mb-4 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Name:</strong> Enter the full
                                domain name you want to transfer
                              </span>
                            </li>
                            <li className="d-flex align-items-start gap-2 max-text-36">
                              <div className="w-5 h-5 d-grid place-content-center bg-primary rounded-circle fs-10 text-white flex-shrink-0">
                                <i className="las la-check"></i>
                              </div>
                              <span className="d-block">
                                <strong>Domain Unlock:</strong> Ensure your
                                domain is unlocked for transfer
                              </span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>

                 
                    <ul className="nav nav-pills nav-tab-list justify-content-center">
                      <li className="nav-item">
                        <button
                          className="nav-tab__btn nav-link active"
                          data-bs-toggle="pill"
                          data-bs-target="#validDomain"
                          type="button"
                        >
                          <span className="d-flex align-items-center gap-1">
                            <span className="nav-tab__line flex-shrink-0"></span>
                            <span className="d-inline-block fw-medium fs-14 text-primary nav-tab__subtitle">
                              01
                            </span>
                          </span>
                          <span className="nav-tab__title d-block fw-semibold h6 fs-14 mb-0">
                            Domain is Valid
                          </span>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-tab__btn nav-link"
                          data-bs-toggle="pill"
                          data-bs-target="#unlockedDomain"
                          type="button"
                        >
                          <span className="d-flex align-items-center gap-1">
                            <span className="nav-tab__line flex-shrink-0"></span>
                            <span className="d-inline-block fw-medium fs-14 text-primary nav-tab__subtitle">
                              02
                            </span>
                          </span>
                          <span className="nav-tab__title d-block fw-semibold h6 fs-14 mb-0">
                            Domain is Unlocked
                          </span>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-tab__btn nav-link"
                          data-bs-toggle="pill"
                          data-bs-target="#actNow"
                          type="button"
                        >
                          <span className="d-flex align-items-center gap-1">
                            <span className="nav-tab__line flex-shrink-0"></span>
                            <span className="d-inline-block fw-medium fs-14 text-primary nav-tab__subtitle">
                              03
                            </span>
                          </span>
                          <span className="nav-tab__title d-block fw-semibold h6 fs-14 mb-0">
                            Act Now
                          </span>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-tab__btn nav-link"
                          data-bs-toggle="pill"
                          data-bs-target="#optionDomain"
                          type="button"
                        >
                          <span className="d-flex align-items-center gap-1">
                            <span className="nav-tab__line flex-shrink-0"></span>
                            <span className="d-inline-block fw-medium fs-14 text-primary nav-tab__subtitle">
                              04
                            </span>
                          </span>
                          <span className="nav-tab__title d-block fw-semibold h6 fs-14 mb-0">
                            Available Options
                          </span>
                        </button>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainTransferStep;
