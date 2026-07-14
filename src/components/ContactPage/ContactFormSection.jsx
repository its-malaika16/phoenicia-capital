import "./ContactFormSection.css";
import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: "Phoenicia Capital Holdings",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://phoeniciacapital.co.uk/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.organization,
            type: form.inquiry,
            description: form.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Inquiry submitted successfully!");

        setForm({
          name: "",
          email: "",
          organization: "",
          inquiry: "Phoenicia Capital Holdings",
          message: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-grid">

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

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="organization"
            placeholder="ORGANIZATION"
            value={form.organization}
            onChange={handleChange}
          />

          <select
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
          >
            <option value="Phoenicia Capital Holdings">
              Phoenicia Capital Holdings
            </option>
            <option value="Partnership">Partnership</option>
            <option value="Investment">Investment</option>
            <option value="Support">Support</option>
          </select>

          <textarea
            name="message"
            placeholder="MESSAGE"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "SENDING..." : "SEND INQUIRY"}
          </button>

        </form>

      </div>
    </section>
  );
}
