import Link from "next/link";

const BoostApplicationCta = () => {
  return (
    <>
        <section className="bg-secondary pt-60 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="text-center">
                        <h2 className="mb-3">Boost Your Application's Performance </h2>
                        <p className="mb-5">Powerful Bare Metal Servers at low prices, so you can do more for less starting</p>
                        <Link href="price" className="btn btn-primary btn-arrow btn-arrow-lg btn-lg fs-14 fw-semibold rounded transition">
                            <span className="btn-arrow__text">
                                View Pricing
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default BoostApplicationCta
