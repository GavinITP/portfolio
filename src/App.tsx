import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

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
      <div className="min-h-screen"></div>
      {/* projects */}
      {/* achievements */}
      {/* contact */}
    </div>
  );
}
