import React from "react";
import { Link } from "react-router-dom";
import Djulo from "../assets/hast.png";
import starnd from "../assets/strand.png";


import "./Header.css";

export function Header() {
  return (
    <header className="header-container">
      {/* Branding Section */}
      <figure className="image-container">
        <img src={Djulo} alt="Djulo" className="horse" />
      </figure>
      <figure className="image-container">
        <img src={starnd} alt="Strand" className="strand" />
      </figure>
    {/* <article>
        Djulö strand-Lyxigt vid vattnet
        med central läge i Katrineholm till ett attraktivt pris
    </article> */}
    </header>
  
  );
}

export default Header;

