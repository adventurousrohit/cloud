
const DataCenterBlog = () => {

  return (
    <section className="bg-dark pt-120 pb-120">
    <div className="pb-40">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-xxl-7 col-xl-7">
            <div className="px-3 py-1 border border-primary rounded d-inline-flex align-items-center gap-2 mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
              <div className="w-2 h-2 rounded-circle bg-primary"></div>
              <small className="text-primary fw-bold">News & Articles</small>
            </div>
            <h2 className="text-white mb-0">CloudMinister Chronicles: News & Trends</h2>
          </div>
          <div className="col-lg-5">
            <div className="text-xl-end" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <a href="https://cloudminister.com/blog/" className="btn btn-primary btn-arrow btn-lg fs-14 fw-medium rounded" target="_blank" rel="noreferrer">
                <span className="btn-arrow__text">
                  See More Articles
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-7" data-sal="fade" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease-in-out-sine">
          <div className="single-blog-post">
            <img src="/img/Feature-images-1.jpg" alt="Blog Post" className="img-fluid w-100" style={{height:"500px"}} />
            <div className="blog-post-content px-6 px-md-8 py-9">
            <h6 className="text-white mb-4">
                    <a href="https://cloudminister.com/blog/migrating-your-website-akamai-cloud-hosting/" className="d-inline-block text-decoration-none text-white hover:text-primary transition max-text-28" target="_blank" rel="noreferrer">
                    The Ultimate Guide to Migrating Your Website to Akamai Cloud Hosting
                    </a>
                  </h6>
              <div className="d-flex flex-wrap align-items-center gap-2 gap-md-4 mb-3">
              
                <div className="d-flex align-items-center gap-1 lh-1">
                  <span className="text-white fs-20"><i className="las la-calendar"></i></span>
                  <p className="text-white fs-14 fw-medium mb-0">January 31, 2025</p>
                </div>
                <div className="d-flex align-items-center gap-1 lh-1">
                  <span className="text-white fs-20"><i className="las la-edit"></i></span>
                  <p className="text-white fs-14 fw-medium mb-0">Tanuj Chugh</p>
                </div>
              </div>
              {/* <a href="https://cloudminister.com/blog/" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-semibold btn-arrow" target="_blank" rel="noreferrer">
                <span className="d-inline-block btn-arrow__text">
                  Read More
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="row">
            <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
              <div className="side-blog-item px-6 py-7 d-flex align-items-center justify-content-between gap-5 rounded-3 transition">
                <div>
                  <a href="https://cloudminister.com/blog/author/admin/" className="d-flex align-items-center gap-2 text-decoration-none mb-1">
                    <span className="text-white text-opacity-75 fs-20"><i className="las la-edit"></i></span>
                    <span className="d-inline-block text-white text-opacity-75 fs-14 fw-medium mb-0">Tanuj Chugh</span>
                  </a>
                  <h6 className="text-white mb-4">
                    <a href="https://cloudminister.com/blog/azure-cloud-hosting-best-plans/" className="d-inline-block text-decoration-none text-white hover:text-primary transition max-text-28" target="_blank" rel="noreferrer">
                    Azure Cloud Hosting Pricing Explained: Find the Best Plan for Your Needs
                    </a>
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-white text-opacity-75 fs-20"><i className="las la-calendar"></i></span>
                    <p className="text-white text-opacity-75 fs-14 fw-medium mb-0">February 8, 2025</p>
                  </div>
                </div>
                <a href="https://cloudminister.com/blog/azure-cloud-hosting-best-plans/" className="arrow-btn d-grid place-content-center w-8 h-8 rounded-circle border border-secondary flex-shrink-0 transition opacity-25" target="_blank" rel="noreferrer">
                  <span className="text-secondary fs-16 d-inline-block"><i className="las la-arrow-right"></i></span>
                </a>
              </div>
            </div>
            <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
              <div className="side-blog-item px-6 py-7 d-flex align-items-center justify-content-between gap-5 rounded-3 transition">
                <div>
                  <a href="https://cloudminister.com/blog/author/admin/" className="d-flex align-items-center gap-2 text-decoration-none mb-1" target="_blank" rel="noreferrer">
                    <span className="text-white text-opacity-75 fs-20"><i className="las la-edit"></i></span>
                    <span className="d-inline-block text-white text-opacity-75 fs-14 fw-medium mb-0">Tanuj Chugh</span>
                  </a>
                  <h6 className="text-white mb-4">
                    <a href="https://cloudminister.com/blog/google-cloud-hosting-in-india-for-startups/"  className="d-inline-block text-decoration-none text-white hover:text-primary transition max-text-28" target="_blank" rel="noreferrer">
                    Top Benefits of Choosing Google Cloud Hosting in India for Startups
                    </a>
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-white text-opacity-75 fs-20"><i className="las la-calendar"></i></span>
                    <p className="text-white text-opacity-75 fs-14 fw-medium mb-0">January 25, 2025</p>
                  </div>
                </div>
                <a href="https://cloudminister.com/blog/google-cloud-hosting-in-india-for-startups/" className="arrow-btn d-grid place-content-center w-8 h-8 rounded-circle border border-secondary flex-shrink-0 transition opacity-25" target="_blank" rel="noreferrer">
                  <span className="text-secondary fs-16 d-inline-block"><i className="las la-arrow-right"></i></span>
                </a>
              </div>
            </div>
            <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
              <div className="side-blog-item px-6 py-7 d-flex align-items-center justify-content-between gap-5 rounded-3 transition">
                <div>
                  <a href="https://cloudminister.com/blog/author/admin/" className="d-flex align-items-center gap-2 text-decoration-none mb-1" target="_blank" rel="noreferrer">
                    <span className="text-white text-opacity-75 fs-20"><i className="las la-edit"></i></span>
                    <span className="d-inline-block text-white text-opacity-75 fs-14 fw-medium mb-0">Tanuj Chugh</span>
                  </a>
                  <h6 className="text-white mb-4">
                    <a href="https://cloudminister.com/blog/gpu-servers-enhance-ai-and-machine-learning/"   className="d-inline-block text-decoration-none text-white hover:text-primary transition max-text-28" target="_blank" rel="noreferrer">
                    How GPU Servers Enhance AI and Machine Learning Applications
                    </a>
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-white text-opacity-75 fs-20"><i className="las la-calendar"></i></span>
                    <p className="text-white text-opacity-75 fs-14 fw-medium mb-0">January 17, 2025</p>
                  </div>
                </div>
                <a href="https://cloudminister.com/blog/gpu-servers-enhance-ai-and-machine-learning/" className="arrow-btn d-grid place-content-center w-8 h-8 rounded-circle border border-secondary flex-shrink-0 transition opacity-25" target="_blank" rel="noreferrer">
                  <span className="text-secondary fs-16 d-inline-block"><i className="las la-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default DataCenterBlog;
