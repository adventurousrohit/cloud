"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState, useRef } from "react";

const AboutusStoryTimeLine = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const timelineSliderNav = useRef(null);

  const timelineData = [
    {
      year: "2011-2017",
      title: "The Genesis",
      description:
        "Every great saga has its genesis. Between 2011 and 2017, Tanuj Chugh and Chandni Jagga journeyed together to redefine IT consultancy. With lasting passion and a drive for simplification with technology for corporate needs, they laid a base to undertake tailored IT consultancy service delivery. The early years were spent in pursuit of knowledge as the landscape of technology would constantly change. With every challenge they met, the duo grew further; their promise of excellence pushed them forward in the journey. Starting from being just a humble dream, this small venture has become a very successful one through dedication to helping businesses grow by providing innovative expertise.",
    },
    {
      year: "2017",
      title: "Emergence of CloudMinister",
      description:
        "2017 marked an important year with the launch of CloudMinister Technologies. The vision now transformed from IT consulting to innovating leading-edge cloud hosting solutions. The company's innovative approach and focus on clients began to attract attention in a competitive market to build its credibility as a reliable technology partner.",
    },
    {
      year: "2021",
      title: "Scaling Up by Acquisition",
      description:
        "To accelerate its growth, CloudMinister Technologies strategically acquired India Hosting Daddy in 2021. This bold move amplified its presence in the hosting sector, unlocking new opportunities and broadening its service portfolio. The company doubled down on its commitment to providing seamless and secure hosting solutions through this acquisition.",
    },
    {
      year: "2023",
      title: "Expanding Horizons",
      description:
        "With innovation as the premise, CloudMinister Technologies entered partnerships with the biggies in the tech world such as AWS, Google Cloud, Google Workspace, and Microsoft 365. These collaborations demonstrated the company's flexibility and adaptability to using leading-edge technologies to offer unparalleled solutions. The same year, CloudMinister marked another milestone – the opening of its state-of-the-art branch office in Noida, further solidifying its footing in the tech capital of India.",
    },
    {
      year: "2024",
      title: "Akamai Partnership",
      description:
        "The journey continued to reach new heights in 2024 when CloudMinister Technologies was announced as a partner of Akamai. This partnership symbolized the increasing reputation of the company in cloud and hosting services and highlighted its commitment to high-performance solutions and global outreach.",
    },
    {
      year: "2025",
      title: "Serving 5K+ Clients Worldwide",
      description:
        "By 2024, CloudMinister Technologies reached a global stature with over 5,000 clients across the world being serviced by 30+ IT professionals with a focus on the delivery of excellence and adaptability to evolving landscapes in tech.",
    },
  ];

  return (
    <>
      <section className="story-timeline-section position-relative z-1 bg-dark pt-120 pb-60">
        <div className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <h2 className="mb-4 text-center text-white">
                  A Journey of Growth and Innovation
                </h2>
                <p className="mb-0 text-white text-center mx-auto max-text-60 text-opacity-75">
                  Our journey reflects our dedication to innovation,
                  reliability, and client success—paving the way for a future of
                  limitless possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper timeline-slider-nav">
                <Swiper
                  ref={timelineSliderNav}
                  loop={true}
                  slidesPerView={1}
                  freeMode={true}
                  watchSlidesProgress={true}
                  navigation={{
                    nextEl: ".timeline-slider-nav__next",
                    prevEl: ".timeline-slider-nav__prev",
                  }}
                  breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                    1400: { slidesPerView: 5 },
                  }}
                  modules={[Navigation, FreeMode, Thumbs]}
                  onSwiper={setThumbsSwiper}
                  className="timeline-slider-nav"
                >
                  {timelineData.map(({ year }) => (
                    <SwiperSlide key={year}>
                      <div className="story-timeline text-center">
                        <div className="story-timeline__time">{year}</div>
                        <div className="story-timeline__dot"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button className="timeline-slider-nav__prev">
                  <i className="las la-angle-left"></i>
                </button>
                <button className="timeline-slider-nav__next">
                  <i className="las la-angle-right"></i>
                </button>
              </div>

              <div className="swiper timeline-slider-content">
                <Swiper
                  loop={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Thumbs]}
                  className="swiper-wrapper"
                >
                  {timelineData.map(({ title, description }) => (
                    <SwiperSlide key={title}>
                      <div className="p-4 p-md-12 p-xl-15">
                        <h5 className="mb-4 text-white">{title}</h5>
                        <p className="mb-0 text-white max-text-100 text-opacity-75">
                          {description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusStoryTimeLine;
