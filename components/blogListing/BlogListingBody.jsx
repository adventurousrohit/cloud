import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: '/img/blog-list-img-1.jpg',
    category: 'Organic Vegetable',
    date: 'Feb 18, 20223',
    title: 'What is cPanel? Complete Guide To Master The Control Panel',
    description: 'Payment gateway integrations The platform should support multiple payment methods including credit cards, Internet banking, and e-wallets.',
    link: '/blog-details',
  },
  {
    id: 2,
    image: '/img/blog-list-img-2.jpg',
    category: 'Organic Vegetable',
    date: 'Feb 18, 20223',
    title: 'Practical Examples of How A Bash Case Statement Can Be Used In Shell Scripts',
    description: 'Payment gateway integrations The platform should support multiple payment methods including credit cards, Internet banking, and e-wallets.',
    link: '/blog-details',
  },
  {
    id: 3,
    image: '/img/blog-list-img-3.jpg',
    category: 'Organic Vegetable',
    date: 'Feb 18, 20223',
    title: 'Practical Examples of How A Bash Case Statement Can Be Used In Shell Scripts',
    description: 'Payment gateway integrations The platform should support multiple payment methods including credit cards, Internet banking, and e-wallets.',
    link: '/blog-details',
  },
];
const BlogListingBody = () => {
  return (
    <>
       <div className="pt-120 pb-120">
        <div className="container">
            <div className="row g-4">
            <div className="col-md-7 col-lg-8">
      <div className="vstack gap-6">
        {blogPosts.map(post => (
          <div
            className="card border-0 shadow-sm rounded-3 h-100"
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
            key={post.id}
          >
            <div className="card-header pt-4 pt-xl-6 px-xl-6 border-bottom-0">
              <Link href={post.link} className="d-block text-decoration-none">
                <img src={post.image} alt="blog post" className="img-fluid w-100" />
              </Link>
            </div>
            <div className="card-body px-xl-6 pb-xl-6">
              <div className="hstack gap-4 align-items-center mb-2">
                <div className="hstack gap-1 align-items-center">
                  <span className="d-block flex-shrink-0 fs-18">
                    <i className="las la-tags"></i>
                  </span>
                  <span className="d-block fs-14">{post.category}</span>
                </div>
                <div className="hstack gap-1 align-items-center">
                  <span className="d-block flex-shrink-0 fs-18">
                    <i className="las la-stopwatch"></i>
                  </span>
                  <span className="d-block fs-14">{post.date}</span>
                </div>
              </div>
              <h4 className="mb-4">
                <Link
                  href={post.link}
                  className="text-decoration-none tt-line-clamp tt-clamp-2 text-dark hover:text-primary"
                >
                  {post.title}
                </Link>
              </h4>
              <p className="tt-line-clamp tt-clamp-2 mb-6">{post.description}</p>
              <Link
                href={post.link}
                className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded"
              >
                <span className="btn-arrow__text">
                  Explore More
                  <span className="btn-arrow__icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
                <div className="col-md-5 col-lg-4">
                    <div className="rounded-3 bg-body shadow-sm">
                        <div className="p-4 p-xl-6" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h6 className="widget-title">Search Now</h6>
                            <div className="search-bar flex-shrink-0 rounded-1">
                                <div className="search-bar__content rounded-1 rounded-end-0">
                                    <input type="text" className="form-control form-control-lg fs-14 search-bar__input px-xl-4" placeholder="Search in Product"/>
                                </div>
                                <button type="button" className="search-bar__btn bg-primary rounded-end-1">
                                    <i className="las la-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="p-4 p-xl-6" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h6 className="widget-title">Recent Post</h6>
                            <ul className="list-unstyled m-0">
                                <li>
                                    <div className="d-flex align-items-center gap-3 py-4">
                                        <div className="d-inline-block flex-shrink-0">
                                            <img src="/img/recent-post-1.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="d-block fs-14 mb-1">
                                                May 24, 2022
                                            </span>
                                            <h6 className="mb-0 fw-800">
                                                <Link href="/blog-details" className="d-block fs-16 text-decoration-none tt-line-clamp tt-clamp-2 text-dark hover:text-primary">
                                                    Perfect quality reasonable price
                                                    for your family
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-3 py-4">
                                        <div className="d-inline-block flex-shrink-0">
                                            <img src="/img/recent-post-2.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="d-block fs-14 mb-1">
                                                May 24, 2022
                                            </span>
                                            <h6 className="mb-0 fw-800">
                                                <Link href="/blog-details" className="d-block fs-16 text-decoration-none tt-line-clamp tt-clamp-2 text-dark hover:text-primary">
                                                    10 Best UK Vegetable Gardening Blogs and Websites
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-3 py-4">
                                        <div className="d-inline-block flex-shrink-0">
                                            <img src="/img/recent-post-3.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="d-block fs-14 mb-1">
                                                May 24, 2022
                                            </span>
                                            <h6 className="mb-0 fw-800">
                                                <Link href="/blog-details" className="d-block fs-16 text-decoration-none tt-line-clamp tt-clamp-2 text-dark hover:text-primary">
                                                    Perfect quality reasonable price
                                                    for your family
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-3 py-4">
                                        <div className="d-inline-block flex-shrink-0">
                                            <img src="/img/recent-post-1.png" alt="image" className="img-fluid"/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="d-block fs-14 mb-1">
                                                May 24, 2022
                                            </span>
                                            <h6 className="mb-0 fw-800">
                                                <Link href="/blog-details" className="d-block fs-16 text-decoration-none tt-line-clamp tt-clamp-2 text-dark hover:text-primary">
                                                    Perfect quality reasonable price
                                                    for your family
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 p-xl-6" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h6 className="widget-title">Categories</h6>
                            <ul className="list-unstyled m-0">
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Fresh Fruits
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            08
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Coffee
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            06
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Fresh Meat
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            03
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Bread & Bakery
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            14
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Organic Vegetable
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            21
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Milk Cream
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            09
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 p-xl-6" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h6 className="widget-title">Tags</h6>
                            <div className="d-flex flex-wrap align-items-center gap-3">
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Marketing
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Design
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    UX/UI
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Meat
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Vegetable
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Healthy
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Meat
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    UX/UI
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Organic
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    Nature
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    fish
                                </Link>
                                <Link href="#" className="btn btn-sm btn-light hover:bg-dark hover:text-white flex-shrink-0">
                                    food
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 p-xl-6" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h6 className="widget-title">Archive</h6>
                            <ul className="list-unstyled m-0">
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Fresh Fruits
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            08
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Coffee
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            06
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Fresh Meat
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            03
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Bread & Bakery
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            14
                                        </span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Organic Vegetable
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            21
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-2 sidebar-link">
                                        <Link href="/blog-listing" className="d-block text-decoration-none flex-grow-1 text-dark hover:text-primary fw-medium">
                                            Milk Cream
                                        </Link>
                                        <span
                                            className="d-grid place-content-center w-8 h-8 bg-secondary rounded-circle text-dark">
                                            09
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default BlogListingBody
