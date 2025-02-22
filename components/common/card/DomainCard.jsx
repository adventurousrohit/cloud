
const DomainCard = ({domainFeature}) => {
  return (
    <>
      <div className="col-md-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="card hover-shadow rounded-3 border border-secondary transition">
                                <div className="card-body p-xl-6">
                                    <div className="mb-4">
                                        <img src={domainFeature.icon} alt="icon" className="img-fluid"/>
                                    </div>
                                    <h6 className="mb-4">
                                        {domainFeature.title}
                                    </h6>
                                    <p className="mb-0">{domainFeature.description}</p>
                                </div>
                            </div>
                        </div>
    </>
  )
};

export default DomainCard
