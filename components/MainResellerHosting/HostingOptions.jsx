import React from 'react';

const OperatingSystems = [
  { name: 'AlmaLinux', imgSrc: '/img/alama linux.png' },
  { name: 'Fedora', imgSrc: '/img/fedora.png' },
  { name: 'CentOS', imgSrc: '/img/centos.png' },
  { name: 'Debian', imgSrc: '/img/debian.png' },
  { name: 'Kali', imgSrc: '/img/kali linux.png' },
  { name: 'Ubuntu', imgSrc: '/img/ubuntu.png' },
  { name: 'Windows 2016', imgSrc: '/img/Widnows-2016.png' },
  { name: 'Windows 2019', imgSrc: '/img/windows server 2019.png' },
  { name: 'Windows 2022', imgSrc: '/img/windows server 2022.png' },

];

const ControlPanels = [
  { name: 'AA Panel', imgSrc: '/img/aa panel.png' },
  { name: 'CWP', imgSrc: '/img/cwp control panel.png' },
  { name: 'Virtualmin', imgSrc: '/img/virtualmin control panel.png' },
  { name: 'cPanel', imgSrc: '/img/cPanel.png' },
  { name: 'Plesk', imgSrc: '/img/Plesk panel.png' },
  { name: 'SolidCP', imgSrc: '/img/solidcp.png' },
];

const HostingOptions = () => {
  return (
    <div className="container my-5 pt-20 pb-30">
      {/* Operating Systems Section */}
      <div className="row g-5">
        <div className="col-xxl-6 col-lg-6 d-flex flex-column justify-content-center">
          <h2>Choose the Perfect OS for Reseller Hosting Success</h2>
          <p>
          The corner of your reseller hosting journey is choosing the right operating system. Choose an OS that accommodates your level of technical expertise and what customers need, for long-term management as well as top reliability.
          </p>
        </div>
        <div className="col-xxl-6 col-lg-6">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            {OperatingSystems?.map((os, index) => (
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
          <h2>Reseller Hosting Reinvented: Control Panel Options That Fit You</h2>
          <p>
          Your business will be enabled through easy-to-use tools, secure management, and complete customization options to suit your goals. Be starting out or scaling up, our cPanel helps you create efficient, reliable, and flexible hosting solutions for whatever need arises. Take charge of your hosting business today.
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
