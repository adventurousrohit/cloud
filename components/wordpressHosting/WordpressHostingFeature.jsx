import { useState } from "react";
import VideoModal from "../common/others/VideoModal";

const features = [
    {
      title: "Single Dashboard Solution",
      description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
      imgSrc: "/img/icon-features-9.png",
      delay: 300
    },
    {
      title: "One-Click Install",
      description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
      imgSrc: "/img/icon-features-9.png",
      delay: 400
    },
    {
      title: "Free SSL Certificate",
      description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
      imgSrc: "/img/icon-features-9.png",
      delay: 500
    },
    {
      title: "WordPress Staging",
      description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
      imgSrc: "/img/icon-features-9.png",
      delay: 600
    },
    {
      title: "Daily Backups",
      description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
      imgSrc: "/img/icon-features-9.png",
      delay: 700
    },
    {
      title: "Email Services",
      description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
      imgSrc: "/img/icon-features-9.png",
      delay: 800
    },
  ];
const WordpressHostingFeature = () => {
  const [isOpen,setOpen]=useState(false)
  return (
    <>
        <VideoModal isOpen={isOpen} setOpen={setOpen}/>
       <div className="pt-120 pb-120 bg-secondary">
      <div className="pb-60">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-xl-between">
            <div className="col-lg-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <small className="d-inline-block mb-2 fw-bold bg-success-subtle text-success-emphasis border border-success-subtle px-3 py-1 rounded">
                <span className="d-inline-block w-2 h-2 bg-success rounded-circle me-1"></span>
                WordPress Hosting
              </small>
              <h2 className="mb-4">All the Resources & Tools You Need!</h2>
              <p className="max-text-56 mb-0 fw-semibold">
                SSL is industry-standard encryption! Protect important data, win visitors
                Pick a plan from the SSL certificates below.
              </p>
            </div>
            <div className="col-lg-6 col-xl-5" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
              <div className="card">
                <div className="card-body">
                  <div className="features-video position-relative z-1">
                    <img src="/img/features-video-img.png" alt="image" className="img-fluid w-100" />
                    <a  type="submit" onClick={()=>setOpen(true)} className="btn gradient-bg w-15 h-15 d-grid place-content-center rounded-circle position-absolute top-50 start-50 translate-middle fs-24 text-white popup-init">
                      <i className="las la-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row g-4 g-md-0 feature-list">
        {features.map((feature, index) =>  <div key={index}
      className="col-sm-6 col-md-4 feature-list__item"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay={feature.delay}
      data-sal-easing="ease-in-out-sine"
    >
      <div className="feature-list__card border text-center">
        <div className="mb-8">
          <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
        </div>
        <h6 className="mb-5">{feature.title}</h6>
        <p className="mb-0">{feature.description}</p>
      </div>
    </div>)}
      </div>
    </div>
    </div>
    </>
  )
};

export default WordpressHostingFeature
