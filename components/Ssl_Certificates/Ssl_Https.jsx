import React from 'react'
import { Link} from 'react-router-dom';
function Ssl_Https() {
  return (
    <>
        <section className=" bg-dark p-20 ">
        <div className="container ">
            <div className="row align-items-center">
                
                <div className="col-lg-8 col-xl-8">
                    
                    <h1 className="text-white mb-4 fs-25" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    What are SSL and HTTPS?
                    <br />
                    
                    </h1>
                    <p className="mb-8 text-white max-text-45 text-opacity-75  " data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine" >
                    The HTTPS standard is a more secure and updated version of the standard. Hyper Text Transfer Protocol Secure is the acronym for this protocol. It is in charge of overseeing the flow of information from the server to the website. SSL is securing the website and encrypting all of the data with HTTPS. Because internet security is vital, we provide SSL certificates for a reasonable price. Protection for your website is just a few clicks away.
                    </p>
                    
                </div>
                <div className="col-lg-5 col-xl-4 text-lg-end">
                    <img src="./img/sslhttp.webp" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  
  )
}

export default Ssl_Https