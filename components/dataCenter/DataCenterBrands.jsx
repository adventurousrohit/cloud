const DataCenterBrands = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {[
            { src: "/img/google.webp", rating: 4.9 },
            { src: "/img/trustpilot.webp", rating: 4.7 },
            { src: "/img/whb-host-search-logo.webp", rating: 5.0 },
            { src: "/img/host-add.webp", rating: 4.9 },
            { src: "/img/shopperapproved.png", rating: 4.0 },
          ].map((item, index) => (
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2"
              key={index}
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={`${300 + index * 100}`}
              data-sal-easing="ease-in-out-sine"
            >
              <div className="card bg-white bg-opacity-10 rounded-3 h-100">
                <div className="card-body bg-white bg-opacity-10 p-3">
                  <div className="hstack gap-3 align-items-center">
                    <span className="d-inline-block flex-shrink-0 text-center">
                      <img
                        src={item.src}
                        alt="brand logo"
                        className="img-fluid mb-2"
                        style={{ width: "84px" }}
                      />
                      <ul className="list-unstyled p-0 m-0 hstack justify-content-center">
                        {[...Array(5)].map((_, starIndex) => (
                          <li key={starIndex}>
                            <span
                              className={`d-inline-block ${
                                starIndex < Math.round(item.rating)
                                  ? "text-warning"
                                  : "text-dark text-opacity-25"
                              }`}
                            >
                              <i className="las la-star"></i>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </span>
                    <span className="d-block text-black">
                      <strong>{item.rating.toFixed(1)}/5</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataCenterBrands;
