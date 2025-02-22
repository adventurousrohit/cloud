import Link from "next/link";

const WebHostingServerSecurity = () => {
  return (
    <>
       <section className="pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center g-4 justify-content-between">
          <div className="col-xxl-5 col-lg-6">
            <div
              className="d-flex align-items-center gap-3"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="500"
              data-sal-easing="ease-in-out-sine"
            >
              <span>
                <img src="/img/shape/bage-1.png" alt="image" />
              </span>
              <span className="fw-bold">Web Server Security</span>
            </div>
            <h2
              className="mb-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              Advanced Security for Advanced Needs
            </h2>
            <p
              className="mb-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              With over two decades of experience in high-quality, secure web hosting, HostCity is the strategic partner for your online journey. We are with you every step of the way.
            </p>
            <ul
              className="list-unstyled d-flex flex-column gap-3 mb-0"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <li className="d-flex align-items-center gap-2">
                <div className="w-2 h-2 rounded-circle bg-dark"></div>
                <small className="fw-medium">Rated 5 stars on both Google and Trustpilot.</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <div className="w-2 h-2 rounded-circle bg-dark"></div>
                <small className="fw-medium">ISO 27001 Certified.</small>
              </li>
            </ul>
            <div
              className="mt-8"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <Link
                className="btn btn-outline-primary btn-lg fw-bold rounded text-primary fs-14"
                href="/contact/"
                role="button"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/img/security-1.png"
              alt="image"
              className="img-fluid"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default WebHostingServerSecurity
