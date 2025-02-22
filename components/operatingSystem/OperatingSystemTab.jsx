
const OperatingSystemTab = () => {
  return (
    <>
         <section className="pb-60 mt-n30">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="pricing-nav-pills overflow-x-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <ul className="nav nav-pills flex-nowrap justify-content-center" role="tablist">
                            <li className="nav-item flex-shrink-0" role="presentation">
                                <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-bold px-3 pb-2 active" href="#" data-bs-toggle="pill" data-bs-target="#partner-1" aria-selected="true" role="tab">
                                    Operating System
                                </a>
                            </li>
                            <li className="nav-item flex-shrink-0" role="presentation">
                                <a className="partner-tab-nev d-inline-block text-decoration-none text-white fw-bold px-3 pb-2" href="#" data-bs-toggle="pill" data-bs-target="#partner-2" aria-selected="true" role="tab">
                                    Panels & Apps
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-xl-8">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="partner-1" role="tabpanel">
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/opensuse.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">open SUSE</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/webmin.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Webmin</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/docker.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Docker</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/proxmox.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">ProxMox</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/plesk.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Plesk</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/cpanel.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Cpanel</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/rockylinux.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Rocky Linux</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/partner-logo-5.png" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Alma Linux</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/debian.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Debian Linux</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/freebsd.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Free BSD</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="partner-2" role="tabpanel">
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/freebsd.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Free BSD</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/debian.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Debian Linux</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/partner-logo-5.png" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Alma Linux</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/rockylinux.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Rocky Linux</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/opensuse.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">open SUSE</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/webmin.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Webmin</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/docker.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Docker</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/proxmox.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">ProxMox</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/plesk.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Plesk</h6>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tech-partner transition bg-white px-6 py-8 rounded-2 text-center h-100 border border-dark border-opacity-10">
                                                <img src="/img/cpanel.svg" alt="icon" className="img-fluid w-12"/>
                                                <h6 className="fs-16 fw-bold mt-4">Cpanel</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default OperatingSystemTab
