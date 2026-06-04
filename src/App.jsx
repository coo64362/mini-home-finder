import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PropertyList from "./components/PropertyList";

function App() {
  return (
    <>
      <Navbar />

     <main>
      <Hero />

      <PropertyList />

      <section id="about" className="section">
        <h2>About this app</h2>
      </section>
      
     </main>

     <Footer />
    </>
  );
}

export default App;
