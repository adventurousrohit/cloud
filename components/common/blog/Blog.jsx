const blogPosts = [
    {
      id: 1,
      image: "/img/blog-img-1.jpg",
      date: "Feb 18, 2023",
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details"
    },
    {
      id: 2,
      image: "/img/blog-img-2.jpg",
      date: "Feb 18, 2023",
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details"
    },
    {
      id: 3,
      image: "/img/blog-img-3.jpg",
      date: "Feb 18, 2023",
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details"
    }
  ];
  import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <>
      <section className="pt-120 pb-120">
      <div className="pb-60">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-md-6 col-xl-5">
              <h2 className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                Stay on Top with Our Resource Hub!
              </h2>
            </div>
            <div className="col-md-6 col-xl-5 col-xxl-4">
              <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                Whether you run an e-commerce site or a web business you want to attract as many visitors as
                possible to your website & theme is no easy task. 
              </p>
              <Link href="/blog-listing" className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary fw-semibold btn-arrow" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                <span className="d-inline-block btn-arrow__text">
                  Explore News
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {blogPosts.map(post => (
            <div key={post.id} className="col-md-6 col-lg-4" data-sal="slide-up" data-sal-duration="700" data-sal-delay={(post.id - 1) * 100 + 300} data-sal-easing="ease-in-out-sine">
              <div className="card rounded-3 h-100">
                <div className="card-header pt-4 border-bottom-0">
                  <Link href={post.link} className="d-block text-decoration-none">
                    <img src={post.image} alt="image" className="img-fluid w-100" />
                  </Link>
                </div>
                <div className="card-body">
                  <div className="hstack gap-1 align-items-center mb-2">
                    <span className="d-block flex-shrink-0 fs-18">
                      <i className="las la-calendar-alt"></i>
                    </span>
                    <span className="d-block fs-14">
                      {post.date}
                    </span>
                  </div>
                  <h6 className="mb-4">
                    <Link href={post.link} className="text-decoration-none text-dark hover:text-primary">
                      {post.title}
                    </Link>
                  </h6>
                  <p className="mb-0 tt-line-clamp tt-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
};

export default Blog
