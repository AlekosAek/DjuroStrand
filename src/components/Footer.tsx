import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <section className="footInfo">
        <article>Hitta hus</article>
        <article>Upptäck området</article>
        <article>Mina favoriter</article>
        <article>Om oss</article>
        <article>Kontakta oss</article>
      </section>
      <figure className="footSocial">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="icon-facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon-twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon-instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-linkedin" />
        </a>
      </figure>
    </footer>
  );
}

export default Footer;


