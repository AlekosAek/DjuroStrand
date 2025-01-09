import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/DJLÖSTRAND.png";
import Insta from "../assets/instagram.png";
import "./footer.css";

export function Footer() {
  return (
    <footer>
      <nav className="footInfo">
        <Link to="/hitta-hus">Hitta hus</Link>
        <Link to="/upptack-omrade">Upptäck området</Link>
        <Link to="/mina-favoriter">Mina favoriter</Link>
        <Link to="/om-oss">Om oss</Link>
        <Link to="/kontakta-oss">Kontakta oss</Link>
      </nav>
      <section className="footSocial">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} className="icon-facebook" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} className="icon-twitter" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
                  <img src={Insta} alt="Strand" className="Insta" />

          {/* <FontAwesomeIcon icon={faInstagram} className="icon-instagram" /> */}
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-linkedin" />
        </a>
      </section>
      <section className="logo">
          <img src={Logo} alt="Strand" className="logo" />
      </section>
    </footer>
  );
}

export default Footer;
