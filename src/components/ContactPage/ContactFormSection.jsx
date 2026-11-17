import "./ContactFormSection.css";
import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  inquiry: "Phoenicia Capital Holdings",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const name = `${form.firstName} ${form.lastName}`.trim();

    try {
      const response = await fetch(
        "https://phoeniciacapital.co.uk/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8",
          },
          body: JSON.stringify({
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            name,
            email: form.email.trim(),
            company: form.organization.trim() || "Not provided",
            type: form.inquiry,
            description: form.message.trim(),
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "ok",
          text: "Your inquiry has been sent. We will be in touch shortly.",
        });
        setForm(initialForm);
      } else {
        setStatus({
          type: "err",
          text: result.message || "Please check the form and try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "err",
        text: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-form-inner">
        <span className="contact-form-kicker">Send Us a Message</span>

        <p className="contact-form-intro">
          Connect with Phoenicia Capital Holdings for strategic partnerships,
          business collaborations, investment opportunities, product support,
          and corporate inquiries.
        </p>

        <div className="contact-meta">
          <div className="contact-block">
            <span>General Inquiries</span>
            <p>support@phoeniciacapital.co.uk</p>
          </div>

          <div className="contact-block">
            <span>Office of the Founder</span>
            <p>Ali A Hammoud — Founder &amp; CEO</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-name-row">
            <label>
              First Name*
              <input
                type="text"
                name="firstName"
                placeholder="John"
                autoComplete="given-name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last Name*
              <input
                type="text"
                name="lastName"
                placeholder="Smith"
                autoComplete="family-name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            E-mail Address*
            <input
              type="email"
              name="email"
              placeholder="John@company.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Organization
            <input
              type="text"
              name="organization"
              autoComplete="organization"
              value={form.organization}
              onChange={handleChange}
            />
          </label>

          <label>
            Type
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
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {status && (
            <p className={`contact-status is-${status.type}`} role="status">
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
