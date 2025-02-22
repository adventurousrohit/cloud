import React from 'react';

const OperatingSystems = [
  { name: 'AlmaLinux', imgSrc: '/img/icons8-linux-96.png' },
  { name: 'Fedora', imgSrc: '/img/icons8-fedora-96.png' },
  { name: 'CentOS', imgSrc: '/img/icons8-centos-96.png' },
  { name: 'Debian', imgSrc: '/img/icons8-debian-96.png' },
  { name: 'Ubuntu', imgSrc: '/img/icons8-ubuntu-96.png' },
  { name: 'Rocky Linux', imgSrc: '/img/rocky-linux-.png' },
  { name: 'Windows', imgSrc: '/img/icons8-windows-10-96.png' },
];

const ControlPanels = [
  { name: 'Plesk', imgSrc: '/img/icons8-plesk-96.png' },
  { name: 'CyberPanel', imgSrc: '/img/CyberPanel.png' },
  { name: 'Webuzo', imgSrc: '/img/webuzo-small-white.png' },
  { name: 'cPanel', imgSrc: '/img/icons8-cpanel-96.png' },
  { name: 'DirectAdmin', imgSrc: '/img/directadmin.png' },
];

const HostingOptions = () => {
  return (
    <div className="container my-5 pt-20 pb-30">
      {/* Operating Systems Section */}
      <div className="row g-5">
        <div className="col-xxl-6 col-lg-6 d-flex flex-column justify-content-center">
          <h2>Pick the Operating System that Dominates your Trades</h2>
          <p>
          Choose the operating system that suits your trading needs and ensures seamless performance. Personalize your Forex VPS for optimal speed, reliability, and control.
          </p>
        </div>
        <div className="col-xxl-6 col-lg-6">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            {OperatingSystems.map((os, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center justify-content-center p-3 shadow rounded"
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '50%',
                }}
              >
                <img
                  src={os.imgSrc}
                  alt={os.name}
                  className="img-fluid"
                  style={{ maxWidth: '60px', maxHeight: '60px' }}
                />
                <p className="mt-2 text-center" style={{ fontSize: '14px', fontWeight: '500' }}>
                  {os.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Control Panels Section */}
      <div className="row g-5 mt-5">
        <div className="col-xxl-6 col-lg-6 order-lg-2 d-flex flex-column justify-content-center">
          <h2>Choose the Perfect Control Panel for Your Forex VPS Hosting</h2>
          <p>
          Choosing the right control panel for your Forex VPS hosting ensures easy management, security, and seamless performance, providing tools for efficient trading and server configuration.
          </p>
        </div>
        <div className="col-xxl-6 col-lg-6 order-lg-1">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            {ControlPanels.map((panel, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center justify-content-center p-3 shadow rounded"
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '50%',
                }}
              >
                <img
                  src={panel.imgSrc}
                  alt={panel.name}
                  className="img-fluid"
                  style={{ maxWidth: '60px', maxHeight: '60px' }}
                />
                <p className="mt-2 text-center" style={{ fontSize: '14px', fontWeight: '500' }}>
                  {panel.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingOptions;
