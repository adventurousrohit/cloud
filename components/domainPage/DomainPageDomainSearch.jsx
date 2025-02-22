
const DomainPageDomainSearch = () => {
  return (
    <>
       <section className="bg-white">
        <div className="container">
            <div className="bg-dark rounded-3 py-16 px-6">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="h3 text-white max-text-24 mx-auto">Find the Right Plan & Register a Domain Now!</h2>
                        </div>
                        <form action="#" className="domain-form-one mx-auto position-relative mt-8" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <input type="text" className="form-control p-4" placeholder="Domain Name"/>
                            <div className="domain-submit-box d-flex align-items-center gap-3 position-absolute">
                                <select className="border-0 bg-transparent">
                                    <option value=".com">.com</option>
                                    <option value=".net">.net</option>
                                    <option value=".org">.org</option>
                                </select>
                                <button onClick={(e)=>e.preventDefault()} className="btn btn-primary rounded-2 fw-bold" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap flex-xl-nowrap mt-6">
                        <button type="button" className="btn btn-sm d-inline-flex align-items-center gap-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="h6 mb-1 text-primary d-inline-bloock">.com</span>
                            <small className="text-white fw-medium d-inline-block">$9.56/Year</small>
                        </button>
                        <button type="button" className="btn btn-sm d-inline-flex align-items-center gap-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                            <span className="h6 mb-1 text-danger d-inline-bloock">.co</span>
                            <small className="text-white fw-medium d-inline-block">$4.56/Year</small>
                        </button>
                        <button type="button" className="btn btn-sm d-inline-flex align-items-center gap-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                            <span className="h6 mb-1 text-warning d-inline-bloock">.info</span>
                            <small className="text-white fw-medium d-inline-block">$9.56/Year</small>
                        </button>
                        <button type="button" className="btn btn-sm d-inline-flex align-items-center gap-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                            <span className="h6 mb-1 text-warning d-inline-bloock">.info</span>
                            <small className="text-white fw-medium d-inline-block">$9.56/Year</small>
                        </button>
                        <button type="button" className="btn btn-sm d-inline-flex align-items-center gap-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700" data-sal-easing="ease-in-out-sine">
                            <span className="h6 mb-1 text-success d-inline-bloock">.org</span>
                            <small className="text-white fw-medium d-inline-block">$6.56/Year</small>
                        </button>
                        <button type="button" className="btn btn-sm d-inline-flex align-items-center gap-2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="800" data-sal-easing="ease-in-out-sine">
                            <span className="h6 mb-1 text-info d-inline-bloock">.biz</span>
                            <small className="text-white fw-medium d-inline-block">$6.56/Year</small>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DomainPageDomainSearch
