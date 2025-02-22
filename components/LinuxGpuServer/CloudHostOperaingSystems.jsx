import React, { useEffect, useRef } from "react";
import sal from "sal.js"; // Ensure that you import the sal.js library

const OperatingSystemsSection = () => {
  const scrollerRef = useRef([]);

  useEffect(() => {
    const scrollers = scrollerRef.current;

    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller-x__list");
      const scrollerContent = Array.from(scrollerInner.children);

      let totalWidth = scrollerInner.scrollWidth;
      const scrollerWidth = scroller.clientWidth;

      // Duplicate items until the content width exceeds the scroller width
      while (totalWidth < scrollerWidth * 2) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
        totalWidth = scrollerInner.scrollWidth; // Recalculate the width after duplication
      }
    });

    // Scroll-based animation initialization
    sal({
      threshold: 0.25,
    });
  }, []);

  const brands = [
    { img: "brand-img-7.png", name: "Rockylinux" },
    { img: "icons8-fedora-48.png", name: "Fedora" },
    { img: "brand-img-2.png", name: "CentOS" },
    { img: "brand-img-3.png", name: "Ubuntu" },
    { img: "brand-img-4.png", name: "FreeBSD" },
    { img: "brand-img-5.png", name: "Debian" },
    { img: "brand-img-6.png", name: "AlmaLinux" },
  ];

  return (
    <div className="pt-120 pb-120">
      <div className="pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-12">
              <h2 className="mb-0 h2 text-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                Your Choice of {""}
                <span className="text-primary">Operating System</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container p-0 w-100" style={{marginLeft:"0px",marginRight:"0px",width:"100% !important"}}> */}
        <div className="row g-0 container-f p-0 w-100" style={{marginLeft:"0px",marginRight:"0px",width:"100% !important"}}>
          <div className="col-12">
            {/* First slider */}
            <div className="scroller-x mb-4" data-direction="right" data-speed="slow" ref={(el) => (scrollerRef.current[0] = el)}>
              <div className="hstack gap-4 scroller-x__list">
                {brands.map((brand, index) => (
                  <div key={index} className="flex-shrink-0 d-flex align-items-center gap-4 py-2 px-4 bg-white rounded-pill shadow-sm brand-btn">
                    <div className="flex-shrink-0">
                      <img src={`/img/${brand.img}`} alt={brand.name} className="img-fluid" />
                    </div>
                    <span className="d-block fw-semibold">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second slider */}
            <div className="scroller-x" data-direction="left" data-speed="slow" ref={(el) => (scrollerRef.current[1] = el)}>
              <div className="hstack gap-4 justify-content-center scroller-x__list">
                {brands.map((brand, index) => (
                  <div key={index} className="flex-shrink-0 d-flex align-items-center gap-4 py-2 px-4 bg-white rounded-pill shadow-sm brand-btn">
                    <div className="flex-shrink-0">
                      <img src={`/img/${brand.img}`} alt={brand.name} className="img-fluid" />
                    </div>
                    <span className="d-block fw-semibold">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default OperatingSystemsSection;
