import CardDesign from "@/components/ui/cardDesign";

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
          <div>
            <div className="text-4xl text-black dark:text-white text-start">
              Hey, I&apos;m Akhil Anitha Gregory
            </div>
            <div className="text-xl py-2 text-green-400 text-start">
              SOFTWARE DEVELOPER
            </div>
            <p className="text-justify leading-8 text-black dark:text-white">
              As a dedicated Software Developer with expertise in React, React
              Native, Next.js, and Flutter, I specialize in building responsive,
              user-friendly interfaces for both web and mobile applications. I
              also have a growing knowledge of backend development using
              Node.js, allowing me to work across the full stack and contribute
              to a wide range of applications. I am committed to continuous
              learning and enjoy tackling challenges to create efficient and
              scalable solutions.
            </p>
            <a
              href="/pdf/CURRICULUM_VITAE_AKHIL_ANITHA_GREGORY.pdf"
              download="CURRICULUM_VITAE_AKHIL_ANITHA_GREGORY.pdf"
            >
              <button
                type="button"
                className="px-4 mt-5 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
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
