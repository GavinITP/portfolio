import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaUniversity,
  FaBuilding,
  FaNodeJs,
  FaAws,
  FaSass
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVuedotjs,
  SiNestjs,
  SiDotnet,
  SiAngular
} from "react-icons/si";

import { PiFileSqlFill } from "react-icons/pi";

export default function Experience() {
  const jobs = [
    {
      company: "Quantium Technology Co., Ltd.",
      companyKey: "quantium",
      role: "Full-stack Developer",
      jobType: "Contract, Hybrid",
      period: "2025 - 2026",
      description: [
        "Redesigned archived report loading flow in Quantium CORE using Angular.js and ASP.NET Core by replacing new tab reloads with in-page SPA navigation, resulting in reduced load time 75% (8s to 2s) and eliminated redundant API static asset calls",
        "Built a centralized interceptor-based audit logging system in ASP.NET Core covering 40+ API paths in Quantium CORE, removing per-endpoint logging logic, resulting in 100% consistent audit trail coverage"
      ],
      tech: ["Angular", "TypeScript", "SCSS", "ASP.NET", "MSSQL"]
    },
    {
      company: "Vulcorn Co., Ltd.",
      companyKey: "vulcorn",
      role: "Full-stack Developer",
      jobType: "Part-Time, Remote",
      period: "2025",
      description: [
        "Streamlined management of 1,000+ engineering drawings by designing an AI-powered price prediction system, reducing manual review time",
        "Developed a full-stack AI Engineering Drawing Manager from scratch using Next.js, TypeScript, GraphQL, TailwindCSS, Node.js, Express.js and MongoDB, resulting in convenient access to engineering drawings",
        "Implemented secure file uploads, drawing data editing, filtering and a responsive UI to improve usability"
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB"
      ]
    },
    {
      company: "Chulalongkorn University",
      companyKey: "chula",
      role: "Teacher Assistant",
      jobType: "Part-Time, On-Site",
      period: "2024",
      description: [
        "Collaborated with 3 teachers and other teaching assistants to prepare worksheets and solutions for the Introduction to Computer Engineering and Digital Technology course focused on frontend development",
        "Answered technical questions from over 200 students on topics in the course, especially the software engineering part, including HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and AWS EC2"
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS EC2"
      ]
    },
    {
      company: "Primo World Co., Ltd.",
      companyKey: "primo",
      role: "Full-stack Developer",
      jobType: "Intern, Hybrid",
      period: "2024",
      description: [
        "Collaborated with developers and UX/UI designers to develop Joygaan, a donation platform (https://web.joygaan.co) using Vue.js, TypeScript, Firebase, GraphQL, and SCSS. Implemented anonymous authentication and a donation system, resulting in adoption by 40+ users, including influencers and idol groups",
        "Fixed critical bugs and improved functionality on the Roots membership website (https://rootsbkk.com) using Vue.js, TypeScript, SCSS, Nest.js, and AWS S3, including enhancements to multilingual support (Thai and English), page routing, and the PRIMO CMS query system"
      ],
      tech: [
        "Vue.js",
        "TypeScript",
        "Firebase",
        "GraphQL",
        "SCSS",
        "Nest.js",
        "AWS S3"
      ]
    },
    {
      company: "CU Innovation Hub",
      companyKey: "chula",
      role: "Automation Developer",
      jobType: "Freelance, Remote",
      period: "2023",
      description: [
        "Automated data scraping from Chula Deep Tech Demo Day 2023 register form API using AppScript (JS platform)",
        "Scheduled AppScript's trigger to run every 12 hours, ensuring real-time updates",
        "Successfully organized and transferred the data of over 100 participants to Google Sheets"
      ],
      tech: ["JavaScript"]
    }
  ];

  // Tech icon mapping
  const techIcons = {
    react: FaReact,
    "next.js": SiNextdotjs,
    vue: SiVuedotjs,
    "vue.js": SiVuedotjs,
    angular: SiAngular,
    "angular.js": SiAngular,
    typescript: SiTypescript,
    javascript: FaJs,
    html: FaHtml5,
    css: FaCss3Alt,
    scss: FaSass,
    tailwindcss: SiTailwindcss,
    tailwind: SiTailwindcss,
    "node.js": FaNodeJs,
    node: FaNodeJs,
    express: SiExpress,
    "express.js": SiExpress,
    mongodb: SiMongodb,
    graphql: SiGraphql,
    firebase: SiFirebase,
    "nest.js": SiNestjs,
    mssql: PiFileSqlFill,
    "asp.net": SiDotnet,
    "asp.net core": SiDotnet,
    "aws ec2": FaAws,
    "aws s3": FaAws
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
        <h2 className="text-4xl my-3">Experience</h2>
        <hr />
      </div>

      <section className="relative w-full py-28">
        {/* Vertical Timeline Line */}
        <div className="absolute left-12 top-0 h-full w-px bg-white"></div>

        <div className="space-y-28">
          {jobs.map((job, index) => {
            const CompanyIcon = companyIcons[job.companyKey];

            return (
              <div key={index} className="relative pl-20 items-start">
                {/* Timeline Dot */}
                <div className="absolute left-10 top-3 w-4 h-4 bg-purple-600 rounded-full border-4 border-black"></div>

                {/* (Job Info) */}
                <div className=" max-w-[80%]">
                  <h3 className="text-4xl font-bold inline mr-4">{job.role}</h3>{" "}
                  <span className="text-xl inline text-gray-500">
                    {job.jobType}
                  </span>
                  <div className="flex gap-3 mt-4 items-center">
                    {CompanyIcon && (
                      <CompanyIcon className="text-2xl text-purple-400" />
                    )}

                    <p className="text-xl text-purple-400 font-medium">
                      {job.company}
                    </p>

                    <p className="text-md text-gray-300">{job.period}</p>
                  </div>
                  <ul className="mt-6 space-y-4 list-disc list-inside marker:text-white">
                    {job.description.map((bulletPoint, index) => (
                      <li
                        key={index}
                        className="text-base text-gray-300 leading-relaxed"
                      >
                        {bulletPoint}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* (Tech Stack) */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {job.tech.map((techItem) => {
                    const normalizedTech = techItem.toLowerCase();
                    const Icon = techIcons[normalizedTech];

                    return (
                      <div
                        key={techItem}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg text-sm hover:bg-purple-700 transition hover:cursor-pointer hover:scale-105 duration-200"
                      >
                        {Icon && <Icon className="text-lg" />}
                        <span>{techItem}</span>
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
