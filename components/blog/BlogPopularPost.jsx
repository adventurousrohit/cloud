import Link from "next/link";

const blogPosts = [
    {
      id: 1,
      title: "What is cPanel? Complete Guide To Master The Control Panel",
      date: "Feb 18, 20223",
      image: "/img/blog-img-1.jpg",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details/1",
    },
    {
      id: 2,
      title: "The Ultimate Guide to WordPress Hosting for Bloggers",
      date: "Feb 18, 20223",
      image: "/img/blog-img-2.jpg",
      description: "With over two decades of experience in high secure web hosting journey.",
      link: "/blog-details/2",
    },
    {
        id: 1,
        title: "What is cPanel? Complete Guide To Master The Control Panel",
        date: "Feb 18, 20223",
        image: "/img/blog-img-5.jpg",
        description: "With over two decades of experience in high secure web hosting journey.",
        link: "/blog-details/1",
      },
      {
        id: 2,
        title: "The Ultimate Guide to WordPress Hosting for Bloggers",
        date: "Feb 18, 20223",
        image: "/img/blog-img-6.jpg",
        description: "With over two decades of experience in high secure web hosting journey.",
        link: "/blog-details/2",
      },
      {
        id: 1,
        title: "What is cPanel? Complete Guide To Master The Control Panel",
        date: "Feb 18, 20223",
        image: "/img/blog-img-3.jpg",
        description: "With over two decades of experience in high secure web hosting journey.",
        link: "/blog-details/1",
      },
      {
        id: 2,
        title: "The Ultimate Guide to WordPress Hosting for Bloggers",
        date: "Feb 18, 20223",
        image: "/img/blog-img-4.jpg",
        description: "With over two decades of experience in high secure web hosting journey.",
        link: "/blog-details/2",
      },
    // Add more blog posts here
  ];
const BlogPopularPost = () => {
  return (
    <>
      <section className="pt-60 pb-120">
      <div className="pb-40">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <h2 className="mb-4">Popular Insight Post</h2>
                <p className="mb-0 max-text-60 mx-auto">
                  Payment gateway integrations: The platform should support multiple payment methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {blogPosts.map((post,i) => (
             <div key={i} className="col-md-6 col-lg-4">
             <div className="card rounded-3 h-100">
               <div className="card-header pt-4 border-bottom-0">
                 <Link href="/blog-details" className="d-block text-decoration-none">
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
                   <Link href="/blog-details" className="text-decoration-none text-dark hover:text-primary">
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

export default BlogPopularPost
