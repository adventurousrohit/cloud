import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
const Feedback = () => {
  return (
    <>
      <section className="pt-120 pb-120 bg-dark">
        <div className="pb-40">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <h2 className="text-white mb-0">
                  What our Customers Have to Say About us
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="bg-white p-10 rounded-3 position-relative z-1">
                    <img
                      src="/img/shape/feedback-5-shape.png"
                      alt="shape"
                      className="img-fluid position-absolute top-0 end-0 z-n1"
                    />
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-6">
                      <img
                        src="/img/feedback-5-user-1.png"
                        alt="user"
                        className="img-fluid"
                      />
                      <img
                        src="/img/feedback-5-logo-1.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <p className="fs-16 fw-semibold mb-6">
                      “Hostcity has been instrumental in helping me plan for my
                      retirement. Their expert financial advisors provided
                      personalized guidance, and I feel confident about my
                      financial future.”
                    </p>
                    <div>
                      <h6 className="fs-16 mb-0">Saiful Talukdar</h6>
                      <small>Dubai</small>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white p-10 rounded-3 position-relative z-1">
                    <img
                      src="/img/shape/feedback-5-shape.png"
                      alt="shape"
                      className="img-fluid position-absolute top-0 end-0 z-n1"
                    />
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-6">
                      <img
                        src="/img/feedback-5-user-2.png"
                        alt="user"
                        className="img-fluid"
                      />
                      <img
                        src="/img/feedback-5-logo-2.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <p className="fs-16 fw-semibold mb-6">
                      “Hostcity has been instrumental in helping me plan for my
                      retirement. Their expert financial advisors provided
                      personalized guidance, and I feel confident about my
                      financial future.”
                    </p>
                    <div>
                      <h6 className="fs-16 mb-0">Saiful Talukdar</h6>
                      <small>Dubai</small>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white p-10 rounded-3 position-relative z-1">
                    <img
                      src="/img/shape/feedback-5-shape.png"
                      alt="shape"
                      className="img-fluid position-absolute top-0 end-0 z-n1"
                    />
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-6">
                      <img
                        src="/img/feedback-5-user-1.png"
                        alt="user"
                        className="img-fluid"
                      />
                      <img
                        src="/img/feedback-5-logo-1.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <p className="fs-16 fw-semibold mb-6">
                      “Hostcity has been instrumental in helping me plan for my
                      retirement. Their expert financial advisors provided
                      personalized guidance, and I feel confident about my
                      financial future.”
                    </p>
                    <div>
                      <h6 className="fs-16 mb-0">Saiful Talukdar</h6>
                      <small>Dubai</small>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div
            className="text-center mt-10"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
          >
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
              <p className="text-white fw-bold mb-0">
                Ranked among the top server providers in the industry on
              </p>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <img
                  src="/img/feedback-4-sub-1.png"
                  alt="ranking 1"
                  className="img-fluid"
                />
                <img
                  src="/img/feedback-4-sub-2.png"
                  alt="ranking 2"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
