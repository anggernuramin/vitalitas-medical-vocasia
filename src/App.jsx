import Hero from "./components/navbar/Hero";
import Servis from "./components/navbar/Servis";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer-page/Footer";
import Faq from "./components/faq-page/Faq";
import Services from "./components/service-page/Services";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servis />
      <Services />
      <Faq />
      <Profile />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
