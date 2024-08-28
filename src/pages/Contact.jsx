import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/contactform",
        formData
      );
      setFeedback(response.data.message);
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container pb-5" style={{ paddingTop: "6rem" }}>
      <div className="row">
        <div className="col-md-12 pb-2 mb-4 text-center">
          <h1 style={{ color: "#145889" }}>Contact Us</h1>
          <p>
            Got questions? We'd love to hear from you.
            <strong> If you have any questions</strong>, please fill up the form
            below or you can reach us through email or phone and we'll get back
            to you as soon as possible.
          </p>
        </div>
      </div>
      {feedback && (
        <div
          className={`alert alert-${
            feedback.includes("error") ? "danger" : "success"
          } alert-dismissible fade show`}
          role="alert"
        >
          <strong>{feedback}</strong>
        </div>
      )}
      <div className="row">
        <div className="col-sm">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  className="form-control"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                style={{ height: "10rem" }}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-md" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm">
          <h3 className="pb-3">Contact</h3>
          <h4 className="lead">EMAIL</h4>
          <p className="text-muted pb-3">gssi_enterprise@yahoo.com</p>
          <h4 className="lead">PHONE</h4>
          <p className="text-muted pb-3">
            (02) 8395 4623 / (02) 8293 8026 <br /> (0991) 843 0220 <br /> (0928)
            955 3939
            <br /> (0926) 752 6438
          </p>
          <h4 className="lead">ADDRESS</h4>
          <p className="text-muted pb-3">
            Block 17, Lot 12 Armal Village, Sta.Ana, Taytay, Rizal
          </p>
        </div>
        <div className="col-sm">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.72789317840204!2d121.11334402313203!3d14.552103972591505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7ad7ebd3c8b%3A0x910223ac36b48f9f!2sArmal%20Village%20Neighborhood%20Association%20Inc.!5e0!3m2!1sen!2sph!4v1677237638222!5m2!1sen!2sph"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
