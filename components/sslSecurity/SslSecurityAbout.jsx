
const SslSecurityAbout = () => {
  return (
    <>
        <section className="bg-white pt-60 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex gap-12 flex-wrap flex-xl-nowrap">
                        <div className=" flex-shrink-0">
                            <img src="/img/about-ssl.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                        </div>
                        <div>
                            <h2 className="mb-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">SSL & HTTPS: How Do
                                They Work?</h2>
                            <p className="mb-0" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">HTTPS is a more secure and updated version of the HTTP
                                standard, and it stands
                                for HyperText Transfer Protocol Secure and manages the data between the server and the
                                website. In HTTPS, the ‘S’ shows that the SSL protects the website and all the data is
                                encrypted.
                                <br/> <br/>
                                ne of the most common questions our clients ask is “What is SSL?” SSL is a common name that
                                is loosely used for both the transport layer security (TLS) and secure sockets layer (SSL)
                                cryptographic protocols. SSL was the most popular protocol for communication security used
                                on the web, and thus, the name is still used for the newer upgraded versions such as TLS as
                                well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default SslSecurityAbout
