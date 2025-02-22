
const WordpressHostingMigration = () => {
    const featureCards = [
        {
          src: "/img/icon-features-9.png",
          alt: "Feature 1",
          title: "Submit a Support Ticket",
          description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
          delay: 300
        },
        {
          src: "/img/icon-features-9.png",
          alt: "Feature 2",
          title: "Choose Migrations",
          description: "Try our new WordPress toolkit, it makes installing, managing and updating your WordPress website a breeze data.",
          delay: 400
        }
      ];
  return (
    <>
      <div className="pt-60 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-6">
            <div
              className="text-center"
              data-sal="fade"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              <img
                src="/img/migrate-img-1.png"
                alt="Migration"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <h2
              className="mb-4"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              The Hassle-Free Way to Migrate Your WordPress Website
            </h2>
            <p
              className="mb-8"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
            >
              Migrating your site to a new hosting provider is easier than you
              think. Our experts will do it for FREE when you purchase any web
              hosting plan. Kick back with a cold one and let us do the work. It
              will take less than an hour without any interruption.
            </p>
            <div className="row g-4">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="col-md-6"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay={card.delay}
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="card shadow-lg h-100">
      <div className="card-body">
        <div className="mb-8">
          <img
            src={card.src}
            alt={card.alt}
            className="img-fluid"
          />
        </div>
        <h6 className="mb-5">
          {card.title}
        </h6>
        <p className="mb-0">
          {card.description}
        </p>
      </div>
    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default WordpressHostingMigration
