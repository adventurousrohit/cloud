import Link from "next/link";

const AboutDomainFaq = () => {
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
                            Frequently Asked Queries
                            </h2>
                            {/* <p className="mb-0 max-text-52 mx-auto">
                                The best thing we love about Hostcity is it does two-way sync with Google us to better
                                organize & keep everything on track.
                            </p> */}
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
                                    <span className="text-body fs-16 fw-bold">What is Web hosting?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwoA" aria-expanded="false" aria-controls="faq-collapseTwoA">
                                    <span className="text-body fs-16 fw-bold">Is Cloudminister good for small businesses?</span>
                                </button>
                            </h2>
                            <div id="faq-collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Cloudminister is dedicated to getting your idea online! Whether you’re a blogger, a small business, web designer or developer, Cloudminister has something for you. Cloudminister enables small businesses to create an online identity by equipping them with the right tools - domain web hosting, marketing tools, recommended SEO keywords, analytics dashboards and more, all at affordable prices, apt for a small business budget.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse3A" aria-expanded="false" aria-controls="faq-collapse3A">
                                    <span className="text-body fs-16 fw-bold">Why is Cloudminister a reliable cloud web hosting company?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse3A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">Cloudminister has been a trusted cloud web hosting provider since 2011 and continues to revolutionize the website creation experience. Over 2 million websites are powered by Cloudminister and we continue to provide world class cloud web hosting services and products to our global customer base. As one of the top recommended WordPress cloud web hosting providers by WordPress.org, we provide cloud web hosting and domain solutions that can optimize WordPress websites for speed, performance and design through our innovative products.</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">How do I buy a domain name on Cloudminister?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">It’s simple! Follow these steps to buy a domain name on Cloudminister: - Head to the Domains section, linked here or through the Menu - Use the Search bar to look for a Domain Name of your choice - If your desired domain name is available, simply ‘Add to Cart’, - Next provide your billing and payment details - Review the information and ensure the data is correct - Choose your payment method & you’re done!</div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-3 mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                            <h2 className="accordion-header">
                                <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse4A" aria-expanded="false" aria-controls="faq-collapse4A">
                                    <span className="text-body fs-16 fw-bold">What features are offered in Cloudminister’s cheap cloud web hosting plan?</span>
                                </button>
                            </h2>
                            <div id="faq-collapse4A" className="accordion-collapse collapse" data-bs-parent="#accordionFaq2">
                                <div className="accordion-body pt-0">With our cloud web hosting plans, we offer everything you need to succeed on the online platform. Meaning, you get a super-fast and affordable cloud web hosting service with unlimited features such as disk space, bandwidth, email addresses. A free domain and website building tool is included too. We also provide 24x7 customer service to help you with any of your concerns related to cloud web hosting services.</div>
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

export default AboutDomainFaq