import React from 'react';

const osLogos = [
  'service9-logo-1.png',
  'service9-logo-2.png',
  'service9-logo-3.png',
  'service9-logo-4.png',
  'service9-logo-5.png',
  'service9-logo-6.png',
  'service9-logo-7.png',
  'service9-logo-8.png',
  'service9-logo-9.png',
  'service9-logo-10.png',
  'service9-logo-11.png',
  'service9-logo-12.png',
  'service9-logo-13.png',
  'service9-logo-14.png',
];

const WebHostingModerService = () => {
  return (
    <section className="bg-warning-2 pt-120 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <h3 className="mb-8">Operating Systems Deployment Options for Hosting Service</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
              {osLogos.map((logo, index) => (
                <img
                  key={index}
                  src={`/img/shape/${logo}`}
                  alt={`icon-${index + 1}`}
                  className="img-fluid"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingModerService;
