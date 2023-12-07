import Profile from "./profile/profile";
import Contact from "./contact/contact";
import Footer from "./component/footer-page/Footer";


function App() {
  return (
    <main>
      <section className="bg-white">
        <div className="container bg-color-primary90">
          <h1>Create Branch Develop</h1>
        </div>
        <div>
          <Profile />
          <Contact />
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default App;
