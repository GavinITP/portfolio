import { motion } from "framer-motion";
import BackgroundImageCard from "../components/BackgroundImageCard";

export default function Projects() {
  return (
    <div className="mt-20 scroll-mt-16" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl my-3 mx-3 md:mx-0">Projects</h2>
        <hr />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-3 md:px-20 gap-10 mt-12">
        <BackgroundImageCard
          imgSrc={"./joygaan-web.png"}
          title={"Joygaan, Donation platform for influencers"}
          description={
            "Donation platform for influencer, resulting in adoption by 40+ users, including influencers and idol groups"
          }
          projectUrl={"https://web.joygaan.co/"}
        />
        <BackgroundImageCard
          imgSrc={"./root-web.png"}
          title={"Root, Coffee shop's membership"}
          description={
            "Fixed critical bugs and improved functionality on the Roots membership website including enhancements to multilingual support (Thai and English), page routing, and the PRIMO CMS query system"
          }
          projectUrl={"https://rootsbkk.com/"}
        />
        <BackgroundImageCard
          imgSrc={"./netflow.png"}
          title={"Netflow Generator (University Capstone Project)"}
          description={
            "Developed a high-performance NetFlow generator in C++ to simulate and output 10 Gbps NetFlow data as PCAP files, enhancing network monitoring, traffic analysis, and cybersecurity testing capabilities"
          }
          projectUrl={"https://github.com/GavinITP/netflow-generator"}
        />
        <BackgroundImageCard
          imgSrc={"./netflow-visualizer.png"}
          title={"Netflow Visualizer (University Capstone Project)"}
          description={
            "Developed a NetFlow visualizer using TypeScript, Go, Svelte.js, and Fiber to effectively visualize and analyze NetFlow data"
          }
          projectUrl={"https://github.com/GavinITP/netflow-visualizer"}
        />
      </div>
    </div>
  );
}
