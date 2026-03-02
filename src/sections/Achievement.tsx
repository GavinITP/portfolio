import ExpandableCard from "../components/ExpandableCard";

export default function Achievement() {
  return (
    <div className="mt-20 scroll-mt-16" id="achievements">
      <div>
        <h2 className="text-4xl my-3">Achievements & Certificates</h2>
        <hr />
      </div>

      <div className="flex flex-col gap-6 bg-black p-6">
        <ExpandableCard
          title={
            "1st Place in HighTech Sandbox 2023 Competition | Full-stack Developer (Hackathon Competitor)"
          }
          description={
            "Won 1st place as the top team in the HighTech Sandbox 2023 Competition, collaborating with a five-person business team to design and develop a restaurant CRM website that showcased our business model prototype, leveraging React.js, TypeScript, Chakra UI for the frontend, and Express.js with MongoDB for a scalable backend architecture."
          }
          imgSrc={[
            "hightech-sandbox-image.png",
            "hightech-sandbox-certificate.jpg"
          ]}
          year={"2023"}
        />
        <ExpandableCard
          title={
            "Hacktoschool 2022 Hackathon | Front-end Developer (Hackathon Competitor)"
          }
          description={
            "Developed the e-learning website using Next.js with Tailwind CSS to compete in Hacktoschool 2022 Hackathon and got job offer to work on CU Newbie project with Thinc."
          }
          imgSrc={[]}
          year={"2022"}
        />
        <ExpandableCard
          title={"ChAMP Career Center, Software Engineer Track | Trainee"}
          description={
            "Participated in diverse training activities to gain exposure to multiple roles and career paths within the software engineering field, developing a broader understanding of industry practices, technical specializations, and professional growth opportunities."
          }
          imgSrc={["certificate-champ.png"]}
          year={"2022 - 2023"}
        />
      </div>
    </div>
  );
}
