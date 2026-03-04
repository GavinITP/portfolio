import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface BackgroundImageCardProps {
  imgSrc: string;
  title: string;
  description: string;
  projectUrl: string;
}

export default function BackgroundImageCard({
  imgSrc,
  title,
  description,
  projectUrl
}: BackgroundImageCardProps) {
  return (
    <motion.a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-80 h-96 rounded-xl overflow-hidden shadow-2xl group cursor-pointer block"
    >
      {/* Background Image */}
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Shadow Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-black/70 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div
          className="absolute top-4 right-4 
          px-6 py-3 text-white rounded-full font-semibold
          hover:scale-105 transition-transform duration-200"
        >
          <p className="flex items-center gap-2">
            Visit <FaExternalLinkAlt className="text-xs" />
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white z-10">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </motion.a>
  );
}
