const domainPricingData = [
    { domain: ".accountant", price: "$35.70" },
    { domain: ".actor", price: "$35.70" },
    { domain: ".adult", price: "$35.70" },
    { domain: ".ae", price: "$35.70" },
    { domain: ".agency", price: "$35.70" },
    { domain: ".ae", price: "$35.70" },
    { domain: ".agency", price: "$35.70" },
    { domain: ".asia", price: "$35.70" },
    { domain: ".ae", price: "$35.70" },
    { domain: ".agency", price: "$35.70" },
  ];
const DomainPageDomainList = () => {
  return (
    <>
       <section className="pt-120 pb-40">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-7">
                    <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-5">Choose from the Most Popular
                            Domain Extensions</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="bg-white px-8 py-10 shadow rounded-3" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <form action="#" className="domain-list-form">
                            <div className="row align-items-center g-4">
                                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                                    <div className="position-relative">
                                        <input type="text" className="form-control bg-transparent py-2 px-8" placeholder="Search Extensions"/>
                                        <span className="text-body position-absolute start-3 mb-1 top-3"><i className="las la-search"></i></span>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                    <div className="d-flex align-items-center justify-content-end gap-3">
                                        <select className="border-0 bg-transparent px-1 py-2">
                                            <option value=".net">.net</option>
                                            <option value=".net">.net</option>
                                            <option value=".org">.org</option>
                                        </select>
                                        <button className="btn btn-primary rounded-2 fw-bold" type="submit">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                                {domainPricingData.map((item, index) => (
          <tr key={index}>
            <th className="shadow-none">
              <p className="text-body fw-semibold mb-0">{item.domain}</p>
            </th>
            <td className="shadow-none">
              <p className="text-body fw-semibold mb-0">{item.price}</p>
            </td>
            <td className="shadow-none">
              <p className="text-body fw-semibold mb-0">{item.price}</p>
            </td>
            <td className="shadow-none">
              <p className="text-body fw-semibold mb-0">{item.price}</p>
            </td>
            <td className="shadow-none">
              <p className="text-body fw-semibold mb-0">{item.price}</p>
            </td>
          </tr>
        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DomainPageDomainList
