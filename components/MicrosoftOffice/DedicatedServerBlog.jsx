const blogCardsData = [
    {
      id: 1,
      imgSrc: "/img/blog-5-img-1.png",
      imgAlt: "What is cPanel? Complete Guide To Master The Control Panel",
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details",
      salDelay: 300,
    },
    {
      id: 2,
      imgSrc: "/img/blog-5-img-2.png",
      imgAlt: "What is cPanel? Complete Guide To Master The Control Panel",
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details",
      salDelay: 400,
    },
    {
      id: 3,
      imgSrc: "/img/blog-5-img-3.png",
      imgAlt: "What is cPanel? Complete Guide To Master The Control Panel",
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details",
      salDelay: 500,
    },
  ];
  import Link from "next/link";
const DedicatedServerBlog = () => {
  return (
    <>
        <section className="bg-dark pt-120 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <h2 className="text-white mb-8">Performance Precisely tailored
                            For your Use Case</h2>
                    </div>
                </div>
            </div>
            <div className="row g-4">
            {blogCardsData.map((card) => (
        <div
          key={card.id}
          className="col-md-6 col-lg-4"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay={card.salDelay}
          data-sal-easing="ease-in-out-sine"
        >
          <div className="card rounded-3 h-100">
            <div className="card-header bg-white pt-4 border-bottom-0">
              <Link href={card.link} className="d-block text-decoration-none">
                <img src={card.imgSrc} alt={card.imgAlt} className="img-fluid w-100" />
              </Link>
            </div>
            <div className="card-body">
              <h6 className="mb-4">
                <Link href={card.link} className="text-decoration-none text-dark hover:text-primary">
                  {card.title}
                </Link>
              </h6>
              <p className="tt-line-clamp tt-clamp-2">{card.description}</p>
              <Link href={card.link} className="text-decoration-none d-inline-flex align-items-center gap-2 text-heading fw-semibold btn-arrow">
                <span className="d-inline-block btn-arrow__text">
                  Read More
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
            </div>
            <div className="text-center mt-10" data-sal="slide-up" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <Link href="/blog-details" className="text-decoration-none d-inline-flex align-items-center gap-2 text-light fw-semibold btn-arrow">
                    <span className="d-inline-block btn-arrow__text">
                        See All Use Case
                        <span className="btn-arrow__icon">
                            <i className="las la-arrow-right"></i>
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    </section>
    </>
  )
};

export default DedicatedServerBlog
