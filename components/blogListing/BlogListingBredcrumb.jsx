import Link from "next/link";

const BlogListingBredcrumb = () => {
  return (
    <>
        <div className="breadcrumbs bg-body">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Latest Posts</h2>
            <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" className="d-inline-block text-decoration-none">
                    <span className="d-inline-block me-1">
                      <i className="las la-home"></i>
                    </span>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default BlogListingBredcrumb
