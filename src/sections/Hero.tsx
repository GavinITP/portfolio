import { motion } from "framer-motion";
import ScrollDown from "../components/ScrollDown";

export default function Hero() {
  return (
    <section className="relative text-white min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4 text-3xl">Hi, I am</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <h1 className="font-extrabold text-5xl md:text-7xl uppercase tracking-tight bg-linear-to-b from-purple-400 via-purple-600 to-purple-900 md:to-black bg-clip-text text-transparent">
          Ittipat Yodprasit
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="leading-6 my-10 text-lg max-w-3xl font-light text-gray-300">
          Collaborative Full-Stack Developer with 1+ years of experience
          delivering real-world solutions across finance, engineering, and CRM
          sectors. Specializing in building scalable backend architectures and
          crafting polished, high-performance user interfaces.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="flex flex-col items-center"
      >
        <hr className="w-20" />
        <a
          href="#education"
          className="absolute bottom-10 font-display px-6 bg-black py-3 border border-white transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
        >
          View My Journey
        </a>
        <div className="absolute bottom-20">
          <ScrollDown />
        </div>
      </motion.div>
    </section>
  );
}
