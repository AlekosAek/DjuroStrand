import darkerHero from "../assets/darkerHero.jpg";
import './css/HomePage.css';


function HomePage() {
  return (
    <section className="myHomepage" >
      <figure>
        <img src={darkerHero} alt="heroImage" className="heroImage" />
        <figcaption className="primary-caption">
          Djulö strand-Lyxigt vid vattnet
          med central läge i Katrineholm till ett attraktivt pris</figcaption>
        <figcaption className="secondary-caption">Upptäck paradiset vi vattnet
          och nära centrum i vackra Katrineholm.
          Boka ett möte redan nu för en oförglömlig
          boende vid Djulö Strand</figcaption>
      </figure>
      
    </section>
  )
}

export default HomePage
