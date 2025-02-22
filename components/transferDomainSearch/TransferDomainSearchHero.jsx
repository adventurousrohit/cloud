
const TransferDomainSearchHero = () => {
  return (
    <div className="pt-120">
      <div className="pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="text-center pb-40" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="d-block fw-semibold text-primary">
                                Technology Overview
                            </span>
                            <h2 className="mb-0">
                                Transfer a Domain
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card border-0 rounded-4" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="card-body pt-60 pb-60 px-md-12">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-xl-8">
                                        <div className="overflow-hidden text-center mb-6">
                                            <h6 className="mb-0 d-inline-block flush-subtitle fs-18">
                                                Transfer now to extend your domain by 1 year
                                            </h6>
                                        </div>
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <label htmlFor="domainName" className="form-label fs-14">
                                                    Domain name *
                                                </label>
                                                <input type="text" className="form-control" id="domainName" placeholder="xyz.com"/>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="authCode" className="form-label fs-14">
                                                    Authorization Code
                                                </label>
                                                <input type="text" className="form-control" id="authCode" placeholder="xyz.com"/>
                                            </div>
                                            <div className="col-12">
                                                <a href="#" className="btn btn-primary btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded">
                                                    <span className="btn-arrow__text">
                                                        Order Now
                                                        <span className="btn-arrow__icon">
                                                            <i className="las la-arrow-right"></i>
                                                        </span>
                                                    </span>
                                                </a>
                                                <span className="d-block fs-14 mt-4 fw-medium">
                                                    * Excludes certain TLDs and recently renewed domains
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default TransferDomainSearchHero

