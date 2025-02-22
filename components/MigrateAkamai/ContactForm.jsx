import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
    setCaptchaValue(value);
  };

  const sendFormDataToAPI = async () => {
    try {
      setLoading(true);
      
      const payload = {
        to: formData.email,
        subject: formData.subject,
        body: `
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.fullName || ""}</p>
          <p><strong>Email:</strong> ${formData.email || ""}</p>
          <p><strong>Phone:</strong> ${formData.phone || ""}</p>
          <p><strong>Message:</strong> ${formData.message || ""}</p>
        `,
      };
  
      const response = await axios.post("https://updateproject.com/test/smtpmail/mail.php", payload, {
        headers: { "Content-Type": "application/json" },
      });
  
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", subject: "", phone: "", message: "" });
      setCaptchaValue(null);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }
    sendFormDataToAPI();
  };


  return (
    <section className="pt-10 pb-10">
     
    <div className="container">
           
      <div className="row align-items-center g-4">
        <div className="col-lg-12">
          <h2 className="h3 mb-2 text-white text-start">Get Started with Our Offer</h2>
       
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center g-3">
              <div className="col-lg-6  text-start">
                <label className="text-black fs-14 fw-bold mb-1 text-start text-white">
                  Full Name: <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-control input-small"
                  required
                />
              </div>
              <div className="col-lg-6  text-start">
                <label className="text-black fs-14 fw-bold mb-1 text-start text-white">
                  Email Address: <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-control input-small"
                  required
                />
              </div>
              <div className="col-lg-6  text-start">
                <label className="text-black fs-14 fw-bold mb-1 text-start text-white">Company Name:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter Your Company Name"
                  className="form-control input-small"
                />
              </div>
              <div className="col-lg-6  text-start">
                <label className="text-black fs-14 fw-bold mb-1 text-start text-white">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Number"
                  className="form-control input-small"
                />
              </div>
              <div className="col-lg-12">
                <ReCAPTCHA sitekey="6LdH590qAAAAACO-hIjdfiy9MfhCZtwGK5LgYHIa" onChange={handleCaptchaChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-dark btn-sm mt-4 text-start" style={{background:"#ee9408",float:"left"}}>
              Contact Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ContactForm;