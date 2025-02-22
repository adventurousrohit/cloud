import Link from "next/link";

const SharedHostingfaq = () => {
  return (
    <>
         <div className="pt-120 pb-120" style={{background:"#1062FE0D"}}>
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
                            Shared Web Hosting in India– FAQs
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
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne" aria-expanded="false" aria-controls="faq-collapseOne">
                            <span className="text-body fs-16 fw-bold">What are shared hosting plans, and how do they work?</span>
                        </button>
                    </h2>
                    <div id="faq-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            Shared hosting plans in India offer a cheap way of using multiple websites hosted on the same server resources. It is well suited for small to medium-sized websites that have good performance without a high cost. Your website shares space with others, reduces costs, yet still offers some essential features, such as security and uptime.
                        </div>
                    </div>
                </div>

            
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwo" aria-expanded="false" aria-controls="faq-collapseTwo">
                            <span className="text-body fs-16 fw-bold">What is the difference between shared hosting and other forms of hosting?</span>
                        </button>
                    </h2>
                    <div id="faq-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            Shared web hosting is cheaper than VPS or dedicated hosting, where server resources are shared with numerous websites. Perfect for moderate-traffic websites, it offers a basic feature list, including email, backups, and database, without the costs of private servers.
                        </div>
                    </div>
                </div>

              
                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4" aria-expanded="false" aria-controls="faq-collapse4">
                            <span className="text-body fs-16 fw-bold">Is shared website hosting safe?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                            Yes, shared hosting is secure as long as the management of shared hosting is handled properly. It includes basic safeguards and regular updates to ensure protection against threats.
                        </div>
                    </div>
                </div>


                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse5" aria-expanded="false" aria-controls="faq-collapse5">
                            <span className="text-body fs-16 fw-bold"> Is it possible to upgrade the plan later?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                        Absolutely! Our shared hosting plans come with flexibility-just upgrade whenever your website is growing. Scalable resources enable you to keep up with more traffic without the hassle.
                        </div>
                    </div>
                </div>


                <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse6" aria-expanded="false" aria-controls="faq-collapse6">
                            <span className="text-body fs-16 fw-bold">How do I handle my shared hosting account?</span>
                        </button>
                    </h2>
                    <div id="faq-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                        <div className="accordion-body pt-0">
                        It's simple with our easy-to-use cPanel interface when it comes to managing your shared web hosting account. You get easy access to all hosting features, including your website files, databases, and emails, with a few clicks only.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
    </>
  )
};

export default SharedHostingfaq