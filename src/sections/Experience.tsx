import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaUniversity,
  FaBuilding
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Experience() {
  const jobs = [
    {
      company: "Quantium Technology Co., Ltd.",
      companyKey: "quantium",
      role: "Full-stack Developer",
      period: "2022 - Present",
      description: "Built scalable web applications and internal systems.",
      tech: ["react", "tailwind", "typescript"]
    },
    {
      company: "Vulcorn Co., Ltd.",
      companyKey: "vulcorn",
      role: "Full-stack Developer",
      period: "2020 - 2022",
      description: "Built responsive dashboards and design systems.",
      tech: ["html", "css", "javascript"]
    },
    {
      company: "Chulalongkorn University",
      companyKey: "chula",
      role: "Teacher Assistant",
      period: "2020 - 2022",
      description: "Assisted in teaching programming and frontend development.",
      tech: ["html", "css", "javascript"]
    },
    {
      company: "Primo World Co., Ltd.",
      companyKey: "primo",
      role: "Full-stack Developer",
      period: "2020 - 2022",
      description: "Developed internal dashboards and CRM systems.",
      tech: ["react", "javascript"]
    },
    {
      company: "CU Innovation Hub",
      companyKey: "chula",
      role: "Automation Engineer",
      period: "2020 - 2022",
      description: "Developed internal dashboards and CRM systems.",
      tech: ["react", "javascript"]
    }
  ];

  // Tech icon mapping
  const techIcons = {
    react: FaReact,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: FaJs
  };

  // Company icon mapping
  const companyIcons = {
    quantium: FaBuilding,
    vulcorn: FaBuilding,
    primo: FaBuilding,
    chula: FaUniversity
  };

  return (
    <div className="mt-20 scroll-mt-16" id="experience">
      <div>
        <h2 className="text-4xl my-3 text-center">Experience</h2>
        <hr />
      </div>

      <section className="relative w-full py-28">
        {/* Vertical Timeline Line */}
        <div className="absolute left-12 top-0 h-full w-px bg-white"></div>

        <div className="space-y-28">
          {jobs.map((job, index) => {
            const CompanyIcon = companyIcons[job.companyKey];

            return (
              <div
                key={index}
                className="relative pl-20 grid md:grid-cols-[60%_40%] gap-12 items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-10 top-3 w-4 h-4 bg-purple-600 rounded-full border-4 border-black"></div>

                {/* LEFT SIDE (Job Info) */}
                <div className="pr-12 md:border-r border-white">
                  <h3 className="text-4xl font-bold">{job.role}</h3>

                  <div className="flex gap-3 mt-4 items-center">
                    {CompanyIcon && (
                      <CompanyIcon className="text-2xl text-purple-500" />
                    )}

                    <p className="text-xl text-purple-600 font-medium">
                      {job.company}
                    </p>

                    <p className="text-sm text-gray-500">{job.period}</p>
                  </div>

                  <p className="text-md mt-4 text-gray-300">
                    {job.description}
                  </p>
                </div>

                {/* RIGHT SIDE (Tech Stack) */}
                <div className="flex flex-wrap gap-4">
                  {job.tech.map((techItem) => {
                    const Icon = techIcons[techItem];

                    return (
                      <div
                        key={techItem}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition"
                      >
                        {Icon && <Icon className="text-lg" />}
                        <span className="capitalize">{techItem}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
