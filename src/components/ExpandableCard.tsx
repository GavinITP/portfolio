import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiGithub } from "react-icons/fi";

type ExpandableCardProps = {
  title: string;
  year: string;
  description: string;
  githubUrl?: string;
  imgSrc?: string[]; // optional array of image URLs
};

export default function ExpandableCard({
  title,
  year,
  description,
  githubUrl,
  imgSrc
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, imgSrc]); // include imgSrc in case images change height

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="w-full cursor-pointer border border-purple-600/70 bg-black text-white 
      transition-all duration-300
      hover:shadow-[0_0_28px_rgba(168,85,247,0.6)]"
    >
      <div className="flex items-center justify-between p-6">
        <div>
          <div className="flex items-center gap-3 justify-between">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            {year && (
              <span className="text-sm text-gray-500 font-medium">{year}</span>
            )}
          </div>
          <p className="text-xs text-gray-300">
            Click to {isOpen ? "collapse" : "expand"}
          </p>
        </div>
        <FiChevronDown
          className={`h-5 w-5 text-purple-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        style={{ height }}
        className="overflow-hidden transition-all duration-300"
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className="border-t border-white pt-4">
            <p className="text-md leading-relaxed text-gray-300">
              {description}
            </p>

            {/* Render images if provided */}
            {imgSrc && imgSrc.length > 0 && (
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {imgSrc.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${title} image ${index + 1}`}
                    className="w-full border border-white object-cover "
                    onClick={(e) => e.stopPropagation()}
                  />
                ))}
              </div>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-6 inline-flex items-center gap-3 
               border border-purple-600 px-4 py-2 
               text-purple-400 transition-all duration-300
               hover:bg-purple-600 hover:text-white 
               hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
              >
                <FiGithub className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
