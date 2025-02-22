
const FeatureCard = ({feature}) => {
  return (
    <>
       <div className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-md-6 p-xl-8 feature">
                            <div className="mb-8">
                                <img src={feature.imageSrc} alt="image" className="img-fluid" style={{width:"64px",height:"64px"}}/>
                            </div>
                            <h3 className="mb-4">
                                {feature.title}
                            </h3>
                            <p className="mb-0">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
    </>
  )
};

export default FeatureCard
