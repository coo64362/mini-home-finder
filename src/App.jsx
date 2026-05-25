import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
    </>
  );
}

export default App;
