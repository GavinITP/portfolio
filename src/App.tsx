import Achievement from "./sections/Achievement";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div className="container- mx-auto max-w-7xl font-display">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* education */}
      <Education />
      {/* experience */}
      <Experience />
      {/* achievements */}
      <Achievement />
      {/* projects */}
      <Projects />
      {/* contact */}
      <Contact />
    </div>
  );
}
