import Hero from "../components/navbar/Hero";
import Servis from "../components/navbar/Servis";
import Faq from "../components/faq-page/Faq";
import Services from "../components/service-page/Services";
import Profile from "../components/profile/Profile";
import Contact from "../components/contact/contact";
import CardPromo from "../components/promo/CardPromo";
import LayoutPages from "../layout/LayoutPages";

function HomePage() {
  return (
    <LayoutPages>
      <Hero />
      <Servis />
      <Services />
      <CardPromo />
      <Faq />
      <Profile />
      <Contact />
    </LayoutPages>
  );
}

export default HomePage;
