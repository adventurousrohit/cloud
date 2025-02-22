import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div className="server-location-section pt-20 pb-20 bg-white">
  <div className="container">
    <div className="row g-4 align-items-center">
      <div className="col-xl-12">
        <div className="row g-4">
          {/* Contact Us Section */}
          <div className="col-sm-6 col-md-4">
            <div className="card support-card h-100 d-flex flex-column justify-content-between">
              <div className="card-body p-xl-6">
                <div className="mb-4">
                  <img
                    src="/img/icon-call.png"
                    alt="phone icon"
                    className="img-fluid"
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
                <h6 className="fs-16">Contact Us</h6>
                <p>
                  Feel free to call us on <br />
                  <strong>+91 9001110011</strong> <br />
                  Monday - Friday, 10am - 7pm.
                </p>
              </div>
            </div>
          </div>

          {/* Our Email Section */}
          <div className="col-sm-6 col-md-4">
            <div className="card support-card h-100 d-flex flex-column justify-content-between">
              <div className="card-body p-xl-6">
                <div className="mb-4">
                  <img
                    src="/img/email.png"
                    alt="email icon"
                    className="img-fluid"
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
                <h6 className="fs-16">Our Email</h6>
                <p>
                  Drop us a line anytime at <br />
                  <strong>hr@cloudminister.com</strong>, <br />
                  and we'll get back soon.
                </p>
              </div>
            </div>
          </div>

          {/* Our Address Section */}
          <div className="col-sm-6 col-md-4">
            <div className="card support-card h-100 d-flex flex-column justify-content-between">
              <div className="card-body p-xl-6">
                <div className="mb-4">
                  <img
                    src="/img/icons8-location-40.png"
                    alt="location icon"
                    className="img-fluid"
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
                <h6 className="fs-16">Our Address</h6>
                <p>
                  Plot no. 2, Fifth Floor, Ganga Tower, <br />
                  Roop Nagar Colony, Ajmer Road, <br />
                  Chitrakoot Marg, Tagore Nagar, Jaipur, Rajasthan 302021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Support