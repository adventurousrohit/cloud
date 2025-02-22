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
          <h2>Choose the Operation System That Fits Your Needs Perfectly</h2>
          <p>
          Whether you prefer the familiarity of Windows or the reliability of Linux, the choice is yours. Customize your hosting environment to match your preferences, ensuring optimal performance, security, and ease of use for your business.
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
          <h2>Choose the Perfect Control Panel for Your VPS Hosting</h2>
          <p>
          Use the control panel that best suits your needs to take total control of your virtual server hosting. We provide a variety of configurable control panel solutions that let you efficiently and easily manage your hosting environment be it VPS Linux Hosting or Windows VPS hosting, regardless of your level of experience.
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
