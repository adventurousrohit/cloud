import { Swiper,SwiperSlide } from "swiper/react";
import {Pagination, EffectFade} from "swiper"
const GameHostingFeeback = () => {
    const feedbacks = [
        {
          name: "Peter Parker",
          image: "/img/user-img-1.png",
          rating: 4,
          feedback: "Awesome Services!",
          description: "Our AI image solutions have exceeded our customers' expectations. They appreciate the opportunities.",
        },
        {
          name: "John Carter",
          image: "/img/user-img-2.png",
          rating: 4,
          feedback: "Quick Support!",
          description: "Our AI image solutions have exceeded our customers' expectations. They appreciate the opportunities.",
        },
        {
          name: "Tony Stark",
          image: "/img/user-img-3.png",
          rating: 4,
          feedback: "Awesome Services!",
          description: "Our AI image solutions have exceeded our customers' expectations. They appreciate the opportunities.",
        },
      ];
  return (
    <>
        <section className="pt-60 pb-60">
        <div className="pb-60">
            <div className="container">
                <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
                    <div className="col-md-6 col-xxl-5">
                        <h2 className="h3 text-white mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Don’t take Our Word for it take theirs
                        </h2>
                    </div>
                    <div className="col-md-6 col-xl-5">
                        <p className="text-white mb-0 text-opacity-75" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            Guarantee reliability for websites, apps or Servers. We deliver round-the-clock, for your fast
                            expanding business with experts, 7 days a week, rated 4.9 out of 5 stars!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="feedback-5-slider--container" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-4 d-none d-xl-block">
                                    <div className="feedback-5-slider__item">
                                        <div className="card border border-light border-opacity-10 rounded-4">
                                            <div className="card-body text-center px-8 py-10">
                                                <div className="feedback-5-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                    <img src="/img/user-img-2.png" alt="image" className="w-100 h-100 object-fit-cover"/>
                                                </div>
                                                <h6 className="mb-0 text-white fs-16">
                                                    Peter Parker
                                                </h6>
                                                <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-dark text-opacity-25">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                </ul>
                                                <h6 className="mb-3 text-white">
                                                    Awesome Services!
                                                </h6>
                                                <p className="mb-0 text-white text-opacity-75">
                                                    "Our AI image solutions have exceeded our customers' expectations.
                                                    they
                                                    appreciate
                                                    the Here's a opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-6 col-xl-4">
                                    <div className="feedback-5-slider">
                                        <div className="swiper feedback-5-slider__init">
                                            <Swiper loop  modules={[EffectFade]} // Add EffectFade module
           effect="fade" // Use fade effect
          fadeEffect={{ crossFade: true }} className="swiper-wrapper">
                                             {
                                                feedbacks.map((feedback,i)=>   <SwiperSlide key={i}className="swiper-slide">
                                                <div className="feedback-5-slider__item">
                                                    <div className="card border border-light border-opacity-10 rounded-4">
                                                        <div className="card-body text-center px-8 py-10">
                                                            <div className="feedback-5-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                                <img src={feedback.image} alt="image" className="w-100 h-100 object-fit-cover"/>
                                                            </div>
                                                            <h6 className="mb-0 text-white fs-16">
                                                                {feedback.name}
                                                            </h6>
                                                            <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                                <li>
                                                                    <span className="d-inline-block text-warning">
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="d-inline-block text-warning">
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="d-inline-block text-warning">
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="d-inline-block text-warning">
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span
                                                                        className="d-inline-block text-dark text-opacity-25">
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <h6 className="mb-3 text-white">
                                                               {feedback.feedback}
                                                            </h6>
                                                            <p className="mb-0 text-white text-opacity-75">
                                                               {feedback.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>)
                                             }
                                              
                                                
                                            </Swiper>
                                        </div>
                                        <div className="swiper-pagination feedback-5-slider__pagination mt-4"></div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-6 col-xl-4 d-none d-xl-block">
                                    <div className="feedback-5-slider__item">
                                        <div className="card border border-light border-opacity-10 rounded-4">
                                            <div className="card-body text-center px-8 py-10">
                                                <div className="feedback-5-slider__avatar w-18 h-18 rounded-circle overflow-hidden mb-3 mx-auto">
                                                    <img src="/img/user-img-4.png" alt="image" className="w-100 h-100 object-fit-cover"/>
                                                </div>
                                                <h6 className="mb-0 text-white fs-16">
                                                    Peter Parker
                                                </h6>
                                                <ul className="list-unstyled p-0 m-0 hstack justify-content-center mb-6">
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-warning">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="d-inline-block text-dark text-opacity-25">
                                                            <i className="las la-star"></i>
                                                        </span>
                                                    </li>
                                                </ul>
                                                <h6 className="mb-3 text-white">
                                                    Awesome Services!
                                                </h6>
                                                <p className="mb-0 text-white text-opacity-75">
                                                    "Our AI image solutions have exceeded our customers' expectations.
                                                    they
                                                    appreciate
                                                    the Here's a opportunities.
                                                </p>
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
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="card bg-white bg-opacity-10 rounded-3">
                        <div className="card-body bg-white bg-opacity-10 p-6">
                            <div className="hstack gap-3">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/review-img-1.png" alt="image" className="img-fluid"/>
                                </span>
                                <span className="d-block text-white">
                                    <strong>Hostingard</strong> is rated
                                    4.9/5 on Trustpilot
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                    <div className="card bg-white bg-opacity-10 rounded-3">
                        <div className="card-body bg-white bg-opacity-10 p-6">
                            <div className="hstack gap-3">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/review-img-2.png" alt="image" className="img-fluid"/>
                                </span>
                                <span className="d-block text-white">
                                    <strong>Hostingard</strong> is rated
                                    4.9/5 on Trustpilot
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                    <div className="card bg-white bg-opacity-10 rounded-3">
                        <div className="card-body bg-white bg-opacity-10 p-6">
                            <div className="hstack gap-3">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/review-img-3.png" alt="image" className="img-fluid"/>
                                </span>
                                <span className="d-block text-white">
                                    <strong>Hostingard</strong> is rated
                                    4.9/5 on Trustpilot
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="ease-in-out-sine">
                    <div className="card bg-white bg-opacity-10 rounded-3">
                        <div className="card-body bg-white bg-opacity-10 p-6">
                            <div className="hstack gap-3">
                                <span className="d-inline-block flex-shrink-0">
                                    <img src="/img/review-img-4.png" alt="image" className="img-fluid"/>
                                </span>
                                <span className="d-block text-white">
                                    <strong>Hostingard</strong> is rated
                                    4.9/5 on Trustpilot
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default GameHostingFeeback
