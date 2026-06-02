import CardDesign from "@/components/ui/cardDesign";

function Skills() {
  return (
    <CardDesign
      content={
        <section id="skills" className="p-5">
          <div className="text-center py-4">
            <span className="text-md py-2 text-green-400 text-start">
              Skills
            </span>
            <p className="text-3xl">My Skills</p>
          </div>
          <ul className="tracking-wider leading-6 text-md text-justify list-disc list-inside space-y-4 sm:px-10">
            <li><b>Front-End :</b> HTML, React, Next.js, React Native, Flutter, Vue</li>
            <li><b>Style Sheet :</b> CSS, Tailwind CSS, Bootstrap, Sass, Shadcn</li>
            <li><b>Backend :</b> Node.js, Express</li>
            <li><b>Database :</b> MongoDB, MsSQL</li>
            <li><b>Tools & Platforms :</b> Git, Netlify, Render, Gitlab, etc.</li>
            <li><b>Others :</b> REST APIs, Agile or Scrum Methodologies</li>
          </ul>
        </section>
      }
    />
  );
}

export default Skills;
