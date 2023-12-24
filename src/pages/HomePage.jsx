import Hero from "../components/navbar/Hero";
import Servis from "../components/navbar/Servis";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer-page/Footer";
import Faq from "../components/faq-page/Faq";
import Services from "../components/service-page/Services";
import Profile from "../components/profile/Profile";
import Contact from "../components/contact/contact";
import CardPromo from "../components/promo/CardPromo";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servis />
      <Services />
      <CardPromo />
      <Faq />
      <Profile />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
