import Link from "next/link";

const WebHostingBlog = () => {
  return (
    <>
       <section className="pt-120 pb-60">
        <div className="pb-40">
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xxl-5 col-xl-6">
                        <h2 className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">Stay on Top with Our
                            Resource Hub!</h2>
                    </div>
                    <div className="col-xxl-4 col-xl-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <p className="mb-0">Whether you run an e-commerce site or a web business, you want to attract as many
                            visitors as possible to your website & theme is no easy task. </p>
                        <Link href="/blog-listing" className="text-primary text-decoration-none fw-bold d-inline-flex align-items-center gap-2 mt-4">Explore
                            News <i className="las la-plus"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-xl-7 col-lg-6" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <div className="blog-post-style-two position-relative">
                        <div className="d-flex justify-content-end">
                            <img src="/img/blog-2-img.jpg" alt="image" className="img-fluid rounded"/>
                        </div>
                        <div className="blog-post-2-content bg-white p-8 d-inline-block shadow-sm rounded">
                            <div className="d-inline-flex align-items-center gap-3  gap-sm-5 flex-wrap mb-2">
                                <div className="d-flex align-items-center gap-1">
                                    <span className="text-body fs-20"><i className="las la-calendar"></i></span>
                                    <p className="fs-14 fw-medium mb-0">Feb 18, 20223</p>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span className="text-body fs-20"><i className="las la-edit"></i></span>
                                    <p className="fs-14 fw-medium mb-0">Saiful Talukdar</p>
                                </div>
                            </div>
                            <h6 className="mb-4">
                                <a href="blog-details" className="tt-line-clamp tt-clamp-2 text-decoration-none text-heading hover:text-primary transition max-text-28">
                                    WordPress 6.4 Release Updates Unleashing
                                    The Potential for Innovation
                                </a>
                            </h6>
                            <p className="max-text-40 mb-6">Dynamically simplify next-generation methods of through
                                multimedia based e-markets. </p>
                            <Link href="/blog-details" className="btn btn-primary btn-arrow btn-arrow-md fs-14 fw-medium rounded">
                                <span className="btn-arrow__text">
                                    Read More
                                    <span className="btn-arrow__icon">
                                        <i className="las la-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="row">
                        <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <div className="side-blog-item style-two px-6 py-7 d-flex align-items-center justify-content-between gap-5 rounded-3 transition">
                                <div>
                                    <div className="d-flex align-items-center gap-1 mb-1">
                                        <span className="fs-20"><i className="las la-edit"></i></span>
                                        <p className="fs-14 fw-medium mb-0">Peter Parker</p>
                                    </div>
                                    <h6 className="mb-4">
                                        <Link href="/blog-details" className="tt-line-clamp tt-clamp-2 text-decoration-none text-heading hover:text-primary transition max-text-28">
                                            Traditional Real Estate Marketing Holds Firm Despite
                                            Pandemic.
                                        </Link>
                                    </h6>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="fs-20"><i className="las la-calendar"></i></span>
                                        <p className="fs-14 fw-medium mb-0">Feb 18, 20223</p>
                                    </div>
                                </div>
                                <div className="arrow-btn w-8 h-8 rounded-circle border border-grey d-flex align-items-center justify-content-center flex-shrink-0 transition">
                                    <span className="text-body fs-16"><i className="las la-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400" data-sal-easing="ease-in-out-sine">
                            <div className="side-blog-item style-two px-6 py-7 d-flex align-items-center justify-content-between gap-5 rounded-3 transition">
                                <div>
                                    <div className="d-flex align-items-center gap-1 mb-1">
                                        <span className="fs-20"><i className="las la-edit"></i></span>
                                        <p className="fs-14 fw-medium mb-0">Peter Parker</p>
                                    </div>
                                    <h6 className="mb-4">
                                    <Link href="/blog-details"  className="tt-line-clamp tt-clamp-2 text-decoration-none text-heading hover:text-primary transition max-text-28">
                                            What is cPanel? Complete Guide To Master The Control Panel
                                        </Link>
                                    </h6>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="fs-20"><i className="las la-calendar"></i></span>
                                        <p className="fs-14 fw-medium mb-0">Feb 18, 20223</p>
                                    </div>
                                </div>
                                <div className="arrow-btn w-8 h-8 rounded-circle border border-grey d-flex align-items-center justify-content-center flex-shrink-0 transition">
                                    <span className="text-body fs-16"><i className="las la-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease-in-out-sine">
                            <div className="side-blog-item style-two px-6 py-7 d-flex align-items-center justify-content-between gap-5 rounded-3 transition">
                                <div>
                                    <div className="d-flex align-items-center gap-1 mb-1">
                                        <span className="fs-20"><i className="las la-edit"></i></span>
                                        <p className="fs-14 fw-medium mb-0">Peter Parker</p>
                                    </div>
                                    <h6 className="mb-4">
                                    <Link href="/blog-details"  className="tt-line-clamp tt-clamp-2 text-decoration-none text-heading hover:text-primary transition max-text-28">
                                            Color Palettes 2024 Best Styles To Shade Your Websites
                                        </Link>
                                    </h6>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="fs-20"><i className="las la-calendar"></i></span>
                                        <p className="fs-14 fw-medium mb-0">Feb 18, 20223</p>
                                    </div>
                                </div>
                                <div className="arrow-btn w-8 h-8 rounded-circle border border-grey d-flex align-items-center justify-content-center flex-shrink-0 transition">
                                    <span className="text-body fs-16"><i className="las la-arrow-right"></i></span>
                                </div>
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

export default WebHostingBlog
