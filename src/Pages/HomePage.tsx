import darkerHero from "../assets/darkerHero.jpg";
import './css/HomePage.css';
import { Link } from 'react-router-dom';
import house1 from '../assets/borohus_karisma2-1280x830.jpg'; // Adjust the path accordingly
/*  import house2 from '../assets/borohus_karisma10-1280x830.jpg';*/
import house3 from '../assets/Satesgarden_Fram-1-1920x1080.jpg';
import house4 from '../assets/tallbackenexterior .jpg';
import babyBoy from '../assets/babyBoy.jpg';
import littleGirls from '../assets/littleGirls.jpg';
import littleBoy from '../assets/littleBoy.jpg';

import Carousel from '../components/Carousel'; // Adjust path based on actual location



interface HouseData {
  image: string;
  title: string;
}

const houseData: HouseData[] = [
  {
    image: house1,
    title: "Villa Julliet",
  },
/*   {
    image: house2,
    title: "Villa Malliet",
  }, */
  {
    image: house3,
    title: "Villa Falliet",
  },
  {
    image: house4,
    title: "Villa Dalliet",
  },
  
];

const ExploreData = [
  { image: babyBoy, title: "Upptäck sjön på egen hand med din egen båt" },
  { image: littleGirls, title: "Utforska skogsstigen och naturens skönhet" },
  { image: littleBoy, title: "Paddla längs floden och njut av stillheten" },
];
function HomePage() {
  return (
    <section className="myHomepage">
      <figure>
        <img src={darkerHero} alt="heroImage" className="heroImage" />
        <figcaption className="primary-caption">
          Djulö strand-Lyxigt vid vattnet med central läge i Katrineholm till ett attraktivt pris
        </figcaption>
        <figcaption className="secondary-caption">
          Upptäck paradiset vid vattnet och nära centrum i vackra Katrineholm.
          Boka ett möte redan nu för en oförglömlig boende vid Djulö Strand.
        </figcaption>
      </figure>
      <div className="hittaHus">
        <Link to="/HittaHus">
          <button className="hittaHus-button">Hitta Ditt Nya Hus</button>
        </Link>
        <p>Upptäck våra hus</p>
      </div>
      <Carousel data={houseData} />
      <article>
        <p className="Känns">Känns som semester året om </p>
        <Carousel data={ExploreData} />
      </article>
    </section>

  );
}

export default HomePage;