import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
const feedbackData = [
    {
      id: 1,
      brandImg: "/img/feedback-brand-1.png",
      quoteImg: "/img/shape/feedback-quate.png",
      feedback: "The Most Creative Designer Highly Recommended.",
      description:
        "The best thing we love about Hostcity is it does two-way sync with Google Apps. It has helped us to better organize everything on track.",
      userImg: "/img/user-img-1.png",
      userName: "Lola Ross",
      userPosition: "Digital Marketing Director",
    },
    {
      id: 2,
      brandImg: "/img/feedback-brand-2.png",
      quoteImg: "/img/shape/feedback-quate.png",
      feedback: "The Most Creative Designer Highly Recommended.",
      description:
        "The best thing we love about Hostcity is it does two-way sync with Google Apps. It has helped us to better organize everything on track.",
      userImg: "/img/user-img-3.png",
      userName: "Lola Ross",
      userPosition: "Digital Marketing Director",
    },
    {
      id: 3,
      brandImg: "/img/feedback-brand-3.png",
      quoteImg: "/img/shape/feedback-quate.png",
      feedback: "The Most Creative Designer Highly Recommended.",
      description:
        "The best thing we love about Hostcity is it does two-way sync with Google Apps. It has helped us to better organize everything on track.",
      userImg: "/img/user-img-4.png",
      userName: "Lola Ross",
      userPosition: "Digital Marketing Director",
    },
    {
      id: 4,
      brandImg: "/img/feedback-brand-3.png",
      quoteImg: "/img/shape/feedback-quate.png",
      feedback: "The Most Creative Designer Highly Recommended.",
      description:
        "The best thing we love about Hostcity is it does two-way sync with Google Apps. It has helped us to better organize everything on track.",
      userImg: "/img/user-img-5.png",
      userName: "Lola Ross",
      userPosition: "Digital Marketing Director",
    },
  ];

const FeedbackThree = () => {
  return (
    <section className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
              We Love our Customers & They Love us too
            </h2>
          </div>
        </div>
        <div
          className="mt-8 position-relative"
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-delay="200"
          data-sal-easing="ease-in-out-sine"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".feedback-button-next",
              prevEl: ".feedback-button-prev",
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
              }}
            className="feedback-slider swiper"
          >
            {
                feedbackData?.map(feedback=><SwiperSlide key={feedback.id}>
                    <div className="bg-white p-7 shadow-sm rounded-3">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-5">
                      <img src={feedback.brandImg} alt="brand" className="img-fluid" />
                      <img src={feedback.quoteImg} alt="quote" className="img-fluid" />
                    </div>
                    <h6 className="mt-5">{feedback.feedback}</h6>
                    <p className="mt-3">{feedback.description}</p>
                    <div className="d-flex align-items-center gap-4 mt-7">
                      <img src={feedback.userImg} alt="user" className="img-fluid" />
                      <div>
                        <h6 className="fs-16 mb-0">{feedback.userName}</h6>
                        <small>{feedback.userPosition}</small>
                      </div>
                    </div>
                  </div>
                    </SwiperSlide>)
            }

            {/* Add more SwiperSlide components as needed */}
          </Swiper>

          <div className="feedback-navs d-flex align-items-center justify-content-between position-relative w-100 z-2 d-none d-md-flex">
            <span className="feedback-button-prev w-10 h-10 rounded-circle bg-dark d-flex align-items-center justify-content-center text-white">
              <i className="las la-arrow-left"></i>
            </span>
            <span className="feedback-button-next w-10 h-10 rounded-circle bg-dark d-flex align-items-center justify-content-center text-white">
              <i className="las la-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackThree;
