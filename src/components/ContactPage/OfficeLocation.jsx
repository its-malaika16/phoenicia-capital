import "./OfficeLocation.css";

export default function OfficeLocation() {
  return (
    <section className="office-section">
      <div className="office-inner">
        <div className="office-copy">
          <span className="office-kicker">Our Location</span>

          <h2>Middle East</h2>

          <div className="office-place">
            <p>
              <span className="is-gold">Dubai</span> - Business Bay
            </p>
            <p>Blue Bay tower</p>
          </div>

          <div className="office-place">
            <p>
              <span className="is-gold">Beirut</span> - Pierre Gemayel Avenue
            </p>
            <p>Rive Gauche Tower - Floor 10</p>
          </div>

          <h2 className="office-region">United Kingdom</h2>

          <div className="office-place">
            <p>
              <span className="is-gold">London</span> - 12 Old Bond Street,
            </p>
            <p>Mayfair, W1S 4PW</p>
          </div>
        </div>

        <div className="office-map">
          <img
            src="/assets/images/location-map.png?v=2"
            alt="United Kingdom and the Middle East"
            width="4542"
            height="3186"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
