"use client";
import axios from 'axios';
import React, { useState } from 'react'
import { Toaster, toast } from "sonner";

type Props = {}

const CTA = (props: Props) => {
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
      <div className="rts-cta-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-solari-wrapper">
                <div className="left-area">
                  <span className="pre skew-up">
                    <span> Feel Free </span> To Contact US
                  </span>
                  <h4 className="title skew-up">
                    Join Green Power Systems today and power <br />a sustainable
                    future!
                  </h4>
                </div>
                <div className="right-area">
                  <form onSubmit={handleSubmit} className="cta-form">
                    <div className="single-input">
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
                        className="mt-3"
                        type="text"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="single-input">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Phone"
                        required
                      />
                      <input
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="mt-3"
                        type="phone"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                    <br />
                    <button disabled={loading} className="rts-btn btn-primary">
                      {loading ? "Sending..." : "Get It Now"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA