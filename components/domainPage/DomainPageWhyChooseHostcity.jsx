import Link from "next/link";

const domainFeatures = [
    {
      id: 1,
      title: "Vast Selection of Domain Names!",
      description:
        "We offer a large number of supported domain extensions, can match the demand of every customer competitive prices!",
      icon: "/img/domain-icon-1.png",
      delay: 300,
    },
    {
      id: 2,
      title: "Continue Domain Notifications",
      description:
        "We offer a large number of supported domain extensions, can match the demand of every customer competitive prices!",
      icon: "/img/domain-icon-2.png",
      delay: 400,
    },
    {
      id: 3,
      title: "Carefree Renewal with flat Pricing",
      description:
        "We offer a large number of supported domain extensions, can match the demand of every customer competitive prices!",
      icon: "/img/domain-icon-3.png",
      delay: 500,
    },
    {
      id: 4,
      title: "24/7/365 Domain Name Support",
      description:
        "We offer a large number of supported domain extensions, can match the demand of every customer competitive prices!",
      icon: "/img/domain-icon-2.png",
      delay: 600,
    },
  ];
const DomainPageWhyChooseHostcity = () => {
  return (
    <>
        <section className="bg-white pt-120 pb-120 position-relative z-1">
        <img src="/img/shape/domain-6-shape.png" alt="image" className="img-fluid position-absolute start-0 bottom-0 z-n1"/>
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-xxl-5">
                    <h2 className="h3 mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Why Choose HostCity for your Domain Name Registar?</h2>
                    <p className="mb-8 fw-semibold max-text-44" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">We are confident that we can Provide the best Domain Name
                        Services
                        for our customers!</p>
                    <Link href="/price" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded transition">
                        <span className="btn-arrow__text">
                                View Pricing
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                        </span>
                    </Link>
                </div>
                <div className="col-xxl-7">
                    <div className="row g-4">
                       {
                        domainFeatures.map((f,i)=> <div key={i} className="col-md-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <div className="hover-shadow bg-white px-5 py-8 rounded-3 border border-secondary transition">
                            <div className="d-flex align-items-center justify-content-between gap-6 mb-6">
                                <h6 className="mb-0">{f.title}</h6>
                                <img src={f.icon} alt="icon" className="img-fluid"/>
                            </div>
                            <p className="mb-0">{f.description}</p>
                        </div>
                    </div>)
                       }
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default DomainPageWhyChooseHostcity
