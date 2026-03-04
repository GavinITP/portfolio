import Achievement from "./sections/Achievement";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div className="mx-auto max-w-7xl font-display">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Achievement />
      <Contact />
    </div>
  );
}
