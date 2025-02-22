import React from 'react';
import { Link } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    imgSrc: "/img/blog-img-1.jpg",
    date: "Feb 18, 2023",
    title: "What is cPanel? Complete Guide To Master The Control Panel",
    link: "/blog-details"
  },
  {
    id: 2,
    imgSrc: "/img/blog-img-2.jpg",
    date: "Feb 18, 2023",
    title: "What is cPanel? Complete Guide To Master The Control Panel",
    link: "/blog-details"
  },
  {
    id: 3,
    imgSrc: "/img/blog-img-3.jpg",
    date: "Feb 18, 2023",
    title: "What is cPanel? Complete Guide To Master The Control Panel",
    link: "/blog-details"
  }
];

const WebHostingModernBlog = () => {
  return (
    <section className="bg-white pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-8">
          <div className="col-lg-5">
            <h3>Stay on Top with Our Resource Hub!</h3>
          </div>
          <div className="col-lg-4">
            <p className="mb-0">
              Whether you run an e-commerce site or a web business you want to attract as many visitors as possible to your website & theme is no easy task.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4">
              <div className="card rounded-3 h-100">
                <div className="card-header pt-4 border-bottom-0 bg-transparent">
                  <Link href={blog.link} className="d-block text-decoration-none">
                    <img src={blog.imgSrc} alt="Blog" className="img-fluid w-100" />
                  </Link>
                </div>
                <div className="card-body">
                  <div className="hstack gap-1 align-items-center mb-2">
                    <span className="d-block flex-shrink-0 fs-18">
                      <i className="las la-calendar-alt"></i>
                    </span>
                    <span className="d-block fs-14">
                      {blog.date}
                    </span>
                  </div>
                  <h6 className="mb-4">
                    <Link href={blog.link} className="text-decoration-none text-dark hover:text-primary">
                      {blog.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebHostingModernBlog;
