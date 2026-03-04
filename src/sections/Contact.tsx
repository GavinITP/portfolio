import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactCard() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center my-20 px-4"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-white">
        Let's Connect!
      </h2>

      {/* Glow Wrapper */}
      <div className="relative group w-full max-w-md">
        {/* Gradient Glow Background */}
        <div
          className="absolute -inset-0.5 bg-linear-to-r from-purple-900 to-indigo-900 
                        rounded-2xl blur opacity-0 
                        group-hover:opacity-70 transition duration-500"
        ></div>

        {/* Card */}
        <div
          className="relative bg-white/5 backdrop-blur-xl 
                        border border-white/10 
                        rounded-2xl 
                        shadow-2xl 
                        p-8 
                        text-slate-100 
                        transition-all duration-500 
                        group-hover:-translate-y-2 
                        group-hover:shadow-purple-500/40 
                        hover:border-purple-400/40"
        >
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-3xl font-semibold tracking-tight">
              Ittipat Yodprasit
            </h3>
            <p className="text-lg text-gray-400 mt-1">Full-stack Developer</p>
          </div>

          {/* Contact List */}
          <ul className="space-y-6 text-lg">
            <li className="flex items-center gap-4 group/item">
              <FaEnvelope className="text-purple-400 transition-transform duration-200 group-hover/item:scale-110" />
              <a
                href="mailto:ittipat.yodprasit@gmail.com"
                className="font-light hover:text-purple-400 transition-colors duration-200"
              >
                ittipat.yodprasit@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-4 group/item">
              <FaPhoneAlt className="text-purple-400 transition-transform duration-200 group-hover/item:scale-110" />
              <a
                href="tel:+66995145996"
                className="font-light hover:text-purple-400 transition-colors duration-200"
              >
                099-514-5996
              </a>
            </li>

            <li className="flex items-center gap-4 group/item">
              <FaLinkedin className="text-purple-400 transition-transform duration-200 group-hover/item:scale-110" />
              <a
                href="https://www.linkedin.com/in/ittipat-yodprasit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light hover:text-purple-400 transition-colors duration-200"
              >
                Ittipat Yodprasit
              </a>
            </li>

            <li className="flex items-center gap-4 group/item">
              <FaGithub className="text-purple-400 transition-transform duration-200 group-hover/item:scale-110" />
              <a
                href="https://github.com/GavinITP"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light hover:text-purple-400 transition-colors duration-200"
              >
                GavinITP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
