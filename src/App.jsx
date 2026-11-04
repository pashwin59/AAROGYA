import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import OnlineConsultation from "./components/OnlineConsultation";
import Contact from "./components/Contact";
import BookSession from "./components/BookSession";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <OnlineConsultation />
        <Contact />
        <BookSession />
      </main>

      <Footer />
      <Analytics />
    </>
  );
}

export default App;