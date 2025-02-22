import Link from "next/link";

const AboutUsHero = () => {
  return (
    <>
       <div className="about-banner pb-60 bg-dark">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-xl-7">
                    <div className="d-flex align-items-center gap-2">
                        <div className="w-3 h-3 rounded-circle bg-primary flex-shrink-0"></div>
                        <span className="d-block fw-semibold mb-0 text-primary">
                        Your Trusted Partner in Cloud Excellence!
                        </span>
                    </div>
                    <h1 className="mb-6 text-white">
                    Innovation-Driven Cloud Hosting You Can Rely On
                    </h1>
                    <p className="text-white max-text-60 mb-8 text-opacity-75">
                    With CloudMinister Services, you can rely on innovative cloud hosting. We provide seamless, secure, and scalable solutions customized to your needs, enabling businesses to excel in the digital age with unparalleled performance and support.
                    </p>
                  
                   
                </div>
                <div className="col-xl-5">
                    <div className="about-banner__img">
                        <img src="/img/About Us Page.png" alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default AboutUsHero
