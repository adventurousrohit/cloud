import Link from "next/link";

const CpanelHostingfaq = () => {
  return (
    <>
         <div className="pt-120 pb-120">
        <div className="pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <span className="fs-18 fw-semibold text-primary mb-2" data-sal="slide-up" data-sal-duration="1000"
                                data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                                FAQ
                            </span>
                            <h2>
                            Frequently Asked Queries
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-4 justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <div className="accordion border-0 vps-hosting-accordion" id="accordionFaq2">
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOneA" aria-expanded="false" aria-controls="faq-collapseOneA">
                                    <span className="text-body fs-16 fw-bold"> What is Hyper-V Server Management and why do I need it?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Hyper-V Server Management deals with the management, optimization, and maintenance of your Hyper-V virtual environments. It ensures your virtualized infrastructure runs smoothly, securely, and with little or no downtime. By our expert Hyper-V Support Services, you can focus on growing your business, as we take care of all things from configuration to monitoring.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                                    <span className="text-body fs-16 fw-bold">How do Hyper-V Server Administration Services enhance the performance of my system?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Our Hyper-V System Administration Services are made to configure your Hyper-V environment at maximum efficiency. We refine the performance of your systems by customizing server setups, and resource utilization, and running your virtual machines seamlessly. Our approach also features continuous monitoring of your system to minimize downtime and run it at maximum efficiency at all times.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                                    <span className="text-body fs-16 fw-bold">Is it possible to increase the Hyper-V infrastructure while the business scales?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Absolutely! Our Hyper-V Server Management Plan is scalable. Your virtual environment will grow with your business needs. We provide flexible solutions to support increased workloads and resource demands so that your system adapts easily to future growth without a compromise in performance.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">What is Hyper-V Manager?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Hyper-V Manager is a Windows-based graphical tool used for managing Hyper-V virtual machines and hosts. It allows you to create, configure, and monitor virtual environments.</div>
                            </div>
                        </div>
                        {/* <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">What is SolusVM panel?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">SolusVM (Solus Virtual Manager) – is a VPS management system with grapical interface. With it, you can reboot, reinstall OS and change hostname, see resources statistics and access your VPS from serial console in case SSH doesn't respond.</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default CpanelHostingfaq