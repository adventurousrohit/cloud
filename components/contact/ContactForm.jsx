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
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
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
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="h3 mb-2">Reach Out – Drop a Message</h2>
            <p className="mb-6">Drop us a message—we're here for queries, collaborations, or just a friendly chat!</p>
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center g-3">
                <div className="col-lg-6">
                  <label className="text-black fs-14 fw-bold mb-2">Full Name: <span className="text-primary">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name" className="form-control px-6 py-4 border bg-white bg-opacity-50" required />
                </div>
                <div className="col-lg-6">
                  <label className="text-black fs-14 fw-bold mb-2">Email Address: <span className="text-primary">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control px-6 py-4 border bg-white bg-opacity-50" required />
                </div>
                <div className="col-lg-6">
                  <label className="text-black fs-14 fw-bold mb-2">Subject:</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter Your Subject" className="form-control px-6 py-4 border bg-white bg-opacity-50" />
                </div>
                <div className="col-lg-6">
                  <label className="text-black fs-14 fw-bold mb-2">Phone:</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Number" className="form-control px-6 py-4 border bg-white bg-opacity-50" />
                </div>
                <div className="col-lg-12">
                  <label className="text-black fs-14 fw-bold mb-2">Message: <span className="text-primary">*</span></label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="form-control px-6 py-4 border h-30 bg-white bg-opacity-50" required></textarea>
                </div>
                <div className="col-lg-12">
                  <ReCAPTCHA sitekey="6LdH590qAAAAACO-hIjdfiy9MfhCZtwGK5LgYHIa" onChange={handleCaptchaChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-dark btn-lg mt-6">Contact Now</button>
            </form>
          </div>
          <div className="col-lg-6">
            <img src="/img/contact-us.png" alt="Contact Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;