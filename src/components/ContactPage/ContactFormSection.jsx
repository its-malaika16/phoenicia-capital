import "./ContactFormSection.css";
import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: "Phoenicia Capital Holdings",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SEND EMAIL USING mailto
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Inquiry from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization}
Inquiry: ${form.inquiry}

Message:
${form.message}
    `;

    window.location.href = `mailto:support@phoeniciacapital.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section">

      <div className="contact-grid">

        {/* ✅ LEFT SIDE */}
        <div className="contact-left">
          <p>
            Connect with Phoenicia Capital Holdings for strategic partnerships,
            business collaborations, investment opportunities, product support,
            and corporate inquiries.
          </p>

          <div className="contact-block">
            <span>GENERAL INQUIRIES</span>
            <h3>support@phoeniciacapital.co.uk</h3>
          </div>

          <div className="contact-block">
            <span>OFFICE OF THE FOUNDER</span>
            <h3>Ali A Hammoud — Founder & CEO</h3>
          </div>
        </div>

        {/* ✅ RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="NAME"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="organization"
            placeholder="ORGANIZATION"
            onChange={handleChange}
          />

          <select name="inquiry" onChange={handleChange}>
            <option>Phoenicia Capital Holdings</option>
            <option>Partnership</option>
            <option>Investment</option>
            <option>Support</option>
          </select>

          <textarea
            name="message"
            placeholder="MESSAGE"
            rows="5"
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-btn">
            SEND INQUIRY
          </button>
        </form>

      </div>

    </section>
  );
}