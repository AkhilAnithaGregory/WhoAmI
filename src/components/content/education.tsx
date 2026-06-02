import CardDesign from "@/components/ui/cardDesign";
import EducationData from "@/lib/JSON/education.json";

function Education() {
  return (
    <CardDesign
      content={
        <section id="education" className="p-2 sm:p-5">
          <span className="text-md py-2 text-green-400 text-start">
            Education
          </span>
          <div>
            <ol className="relative border-s border-default">
              {EducationData?.map((education) => (
                <li key={education?.id} className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-[#374151] rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
                  <time className="text-sm font-normal leading-none text-[#6c7280]">
                    {education?.duration}
                  </time>
                  <h3 className="text-lg font-semibold text-heading">
                    {education?.title}
                  </h3>
                  <p className="text-base font-normal text-[#9da3af]">
                    {education?.institution}
                  </p>
                  <p className="mb-4 text-base font-normal text-[#9da3af]">
                    {education?.grade}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      }
    />
  );
};

export default Education;