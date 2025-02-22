import React from 'react';
import { Link } from 'react-router-dom';

const IsomaticBlog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/img/blog-img-1.jpg',
      date: 'Feb 18, 2023',
      title: 'What is cPanel? Complete Guide To Master The Control Panel',
      description: 'With over two decades of experience in high secure web hosting journey.',
      link: '/blog-details',
      delay: 300,
    },
    {
      id: 2,
      image: '/img/blog-img-2.jpg',
      date: 'Feb 18, 2023',
      title: 'What is cPanel? Complete Guide To Master The Control Panel',
      description: 'With over two decades of experience in high secure web hosting journey.',
      link: '/blog-details',
      delay: 400,
    },
    {
      id: 3,
      image: '/img/blog-img-3.jpg',
      date: 'Feb 18, 2023',
      title: 'What is cPanel? Complete Guide To Master The Control Panel',
      description: 'With over two decades of experience in high secure web hosting journey.',
      link: '/blog-details',
      delay: 500,
    },
  ];

  return (
    <section className="pt-120 pb-120 bg-primary-subtle">
      <div className="pb-60">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-md-6 col-xl-5">
              <h2
                className="mb-0"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Stay on Top with Our Resource Hub!
              </h2>
            </div>
            <div
              className="col-md-6 col-xl-5 col-xxl-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <p>
                Whether you run an e-commerce site or a web business you want to attract as many visitors as possible to your website & theme is no easy task. 
              </p>
              <Link href="/blog-listing" className="btn btn-link text-decoration-none px-0">
                <span className="d-inline-block fw-bold">Explore News</span>
                <span className="d-inline-block flex-shrink-0">
                  <i className="las la-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-md-6 col-lg-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={post.delay}
              data-sal-easing="ease-in-out-sine"
            >
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
                    <span className="d-block fs-14">{post.date}</span>
                  </div>
                  <h6 className="mb-4">
                    <Link href={post.link} className="text-decoration-none text-dark hover:text-primary">
                      {post.title}
                    </Link>
                  </h6>
                  <p className="mb-0 tt-line-clamp tt-clamp-2">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsomaticBlog;
