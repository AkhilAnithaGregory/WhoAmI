import CardDesign from "@/components/ui/cardDesign";
import { FiDownload } from "react-icons/fi";

function HeroSection() {
  return (
    <CardDesign
      content={
        <section className="grid grid-cols-1 md:grid-cols-2 rounded-2xl items-center">
          <div id="about" className="flex justify-center items-center">
            <img
              src="/images/profile.jpeg"
              alt="profile picture"
              width={300}
              height={100}
              className="rounded-lg md:custom_polygon m-auto"
            />
          </div>
          <div className="p-2">
            <div className="text-4xl text-black dark:text-white text-start">
              Hey, I&apos;m Akhil Anitha Gregory
            </div>
            <div className="text-xl py-2 text-green-400 text-start">
              SOFTWARE DEVELOPER
            </div>
            <p className="text-justify leading-8 text-black dark:text-white">
              Software Developer specializing in React, React Native, and
              Next.js, with experience developing responsive and user-centric
              web and mobile applications. Skilled in building modern
              interfaces, optimizing user experiences, and delivering
              maintainable frontend solutions. Currently broadening my expertise
              by learning Vue.js, Flutter, and backend API development using
              Node.js. Driven by continuous learning and a passion for
              technology, I enjoy tackling new challenges and contributing to
              innovative, scalable applications.
            </p>
            <a
              href="/pdf/CURRICULUM_VITAE_AKHIL_ANITHA_GREGORY.pdf"
              download="CURRICULUM_VITAE_AKHIL_ANITHA_GREGORY.pdf"
            >
              <button
                type="button"
                className="px-4 my-5 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
              >
                <FiDownload className="mt-1" />
                <span className="ml-2">Know About Me</span>
              </button>
            </a>
          </div>
        </section>
      }
    />
  );
}

export default HeroSection;
