import { Link } from "react-router-dom";
import Facebook from "../assets/Facebook.png";
import linkedin from "../assets/linkedin.png";
import Insta from "../assets/instagram.png";
import logoFooter from "../assets/logoFooter.png";
import Twitter from "../assets/Twitter.png";


import "./footer.css";

export function Footer() {
  return (
    <footer>
      <nav className="footInfo">
        <Link to="/HittaHus">Hitta hus</Link>
        <Link to="/UpptäckOmrådet">Upptäck området</Link>
        <Link to="/MinaFavorites">Mina favoriter</Link>
        <Link to="/OmOss">Om oss</Link>
        <Link to="/KontaktaOss">Kontakta oss</Link>
      </nav>
      <section className="footSocial">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img src={Facebook} alt="heart" className="Facebook" />
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
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <img src={Twitter} alt="heart" className="Twitter" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedin} alt="Strand" className="linkedin" />
        </a>
      </section>
      <section className="logo">
        <img src={logoFooter} alt="heart" className="logoFooter" />
      </section>
    </footer>
  );
}

export default Footer;