import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

     <main>
      <Hero />

      <section id="listings">
        <h2>Property Listings</h2>
      </section>

      <section id="about">
        <h2>About this app</h2>
      </section>
      
     </main>

     <Footer />
    </>
  );
}

export default App;
