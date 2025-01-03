import { useState } from 'react';
import LogoHeader from "../assets/LogoHeader.png";
import heart from "../assets/heart.png";
import hamburger from "../assets/hamburger.png";
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <section className="myHeader">
      <div className="logo">
        <Link to="/">
          <img src={LogoHeader} alt="logo" />
        </Link>
      </div>
      <article className="heart_sandwich">
        <Link to="/mina-favorites" className="heart-link">
          <img src={heart} alt="heart" className="heart-icon" />
        </Link>
        <div className="menu-container">
          <img
            src={hamburger}
            alt="hamburger_menu"
            className="hamburger-icon"
            onClick={toggleMenu}
          />
          <ul className={`nav--ul__one ${menuOpen ? 'show-menu' : ''}`}>
            <li className="nav-link">
              <Link to="/HittaHus">Hitta hus</Link>
            </li>
            <li className="nav-link">
              <Link to="/UpptäckOmrådet">Upptäck Området</Link>
            </li>
            <li className="nav-link mina-favorites-link">
              <Link to="/MinaFavorites">Mina Favorites</Link>
            </li>
            <li className="nav-link">
              <Link to="/OmOss">Om Oss</Link>
            </li>
            <li className="nav-link">
              <Link to="/KontaktaOss">Kontakta Oss</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Header;