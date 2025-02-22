const experienceData = [
    {
      id: 1,
      title: '99.9% Uptime',
      description: 'Globally distributed Datacenters Datacenters',
      delay: 300,
    },
    {
      id: 2,
      title: '6 Data Centers',
      description: 'Uptime SLA for Droplets & Volumes block storage',
      delay: 400,
    },
    {
      id: 3,
      title: '4.5 GHz',
      description: 'Uptime SLA for Droplets & Volumes block storage',
      delay: 500,
    },
    {
      id: 4,
      title: '250k VMs',
      description: 'Customers building with HostCity Hosting',
      delay: 600,
    },
  ];
const GameHostingPartner = () => {
  return (
    <>
        <section className="pt-60 pb-60 border-bottom border-secondary border-opacity-10">
      <div className="pb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="h5 text-white text-center mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                Our Experience Game Hosting Business
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={item.delay}
              data-sal-easing="ease-in-out-sine"
            >
              <div className="why-service-item position-relative">
                <h5 className="text-white mb-3">
                  <span className="counter">{item.title.split(' ')[0]}</span> {item.title.split(' ').slice(1).join(' ')}
                </h5>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="text-white fw-semibold text-opacity-75">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
};

export default GameHostingPartner
