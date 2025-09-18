"use client";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

type Props = {};

const ContactUsForm = (props: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/send-email", {
        name: form.name,
        email: form.email,
        message: `${form.message}\n\nPhone: ${form.phone}`,
      });

      if (res.status === 200) {
        toast.success("Email sent successfully 😊");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong, please try again 😔");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, please try again 😔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="rts-contact-wrapper-form-area rts-section-gapBottom">
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="form--area">
                <div className="title-area-left">
                  <p className="pre">
                    <span>Feel Free</span> To Contact Us
                  </p>
                  <h2 className="title">Let’s Get in Touch</h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-page-form mt--30"
                >
                  <div className="name-email-wraper">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type Your Message"
                    required
                  ></textarea>

                  <button
                    disabled={loading}
                    className="rts-btn btn-primary"
                    type="submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="map-area-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8069774.227153786!2d29.621267774999996!3d9.034596299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b91e914422f79%3A0x95b314d9f6de5cfd!2zS2lkdXMgTWljaGFlbCBCdWlsZGluZyB8IFdlc2VuIHwg4YmF4Yux4Yi1IOGImuGKq-GKpOGIjSDhiIXhipXhjLsgfCDhi4jhiLDhipU!5e0!3m2!1sen!2set!4v1758216688100!5m2!1sen!2set"
                  width="100%"
                  height="690"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default ContactUsForm;
