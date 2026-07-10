import "./OfficeLocation.css";

export default function OfficeLocation() {
  return (
    <section className="office-section">

      <div className="office-grid">

        {/* ✅ LEFT SIDE */}
        <div className="office-left">

          <span className="office-small subheading">
            <span className="line"></span>
            OFFICE LOCATION
          </span>

          <h2>Dubai, UAE</h2>

          <div className="office-details">
            <strong>Blue Bay Tower</strong>
            <p>Business Bay</p>
            <p>Dubai, United Arab Emirates</p>
          </div>

          <a
            href="https://www.google.com/maps/place/Blue+Bay+Tower,+Business+Bay,+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            OPEN IN GOOGLE MAPS ↗
          </a>

        </div>

        {/* ✅ RIGHT SIDE (Google Map) */}
        <div className="office-map">
          <iframe
            src="https://maps.google.com/maps?q=Blue%20Bay%20Tower%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="map"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>

    </section>
  );
}