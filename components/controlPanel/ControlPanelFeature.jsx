
const ControlPanelFeature = () => {
  return (
    <>
       <section className="pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="mb-10">Included for Free in Web Hosting Feature</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <img src="/img/host-feature.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default ControlPanelFeature
