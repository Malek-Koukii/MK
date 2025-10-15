import React, { useState } from "react";
import "./contact.scss";
import Title_Data from "../../data/titleData";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [popup, setPopup] = useState({ visible: false, message: "", type: "" });

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Full name is required.";
    if (!formValues.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Please enter a valid email.";
    if (!formValues.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const formData = new FormData(event.target);
    formData.append("access_key", "419b2ef0-a10f-4731-896c-06d9846fed23");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setPopup({
        visible: true,
        message: "Message sent successfully!",
        type: "success",
      });
      setFormValues({ name: "", email: "", message: "" });
    } else {
      setPopup({
        visible: true,
        message: "Error sending message. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => {
      setPopup({ visible: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <div className="bloc-desc">
            <h2>{Title_Data.contact_title}</h2>
          </div>

          <div className="row">
            <div className="col-lg col-md-6">
              <div className="left-section">
                <p>
                  I'm currently available for new projects and would be happy to
                  discuss any work opportunities. You can contact me anytime.
                </p>

                <div className="box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>koukimalek97@gmail.com</span>
                </div>
                <div className="box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  <span>Tunisia</span>
                </div>
                <div className="box-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.72 11.72 0 003.68.59c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.21 2.47.59 3.68.11.35.03.74-.25 1.02l-2.22 2.09z" />
                  </svg>
                  <span>+216 58 787 449</span>
                </div>
              </div>
            </div>

            <div className="col-lg col-md-6">
              <form onSubmit={onSubmit} noValidate>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formValues.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Message *</label>
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Enter your message"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}

                <button type="submit" className="contact-submit">
                  Submit
                </button>
              </form>

              {popup.visible && (
                <div className={`popup ${popup.type}`}>{popup.message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
