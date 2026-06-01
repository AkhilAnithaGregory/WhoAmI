import CardDesign from "@/components/ui/cardDesign";
import ExpData from "@/lib/JSON/experience.json";
import { useEffect, useState } from "react";
import type{ ExperienceType } from "@/lib/types/type";

function Experience() {
  const [company, setCompany] = useState(1);
  const [expData, setExpData] = useState<ExperienceType>();
  useEffect(() => {
    const selectedExp = ExpData?.find((exp) => exp.id === company);
    if (selectedExp) {
      setExpData(selectedExp);
    }
  }, [company]);
  return (
    <CardDesign
      content={
        <section id="experience" className="p-5">
          <span className="text-md py-2 text-green-400 text-start">
            Experience
          </span>
          <p className="text-3xl">
            <span className="text-green-500">3 years</span> of relentless
            curiosity and passion <br /> for programming techniques.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 p-5">
            {/* LEFT COLUMN */}
            <div className="xl:col-span-1">
              <div className="grid gap-2 overflow-y-auto">
                {ExpData?.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCompany(item.id)}
                    aria-label={`select ${item.name}`}
                    type="button"
                    className={`bg-white dark:bg-[#272730] ${
                      company === item.id
                        ? "shadow-sm shadow-green-500 dark:shadow-white"
                        : ""
                    } cursor-pointer rounded-xl mb-2 flex items-center gap-2 text-black dark:text-white p-4 border border-darkSecondary`}
                  >
                    <img
                      src={item.image}
                      alt="company logo"
                      width={50}
                      height={100}
                    />
                    <div>
                      <h3 className="text-xl">{item.name}</h3>
                      <p className="text-lightGray">{item.year}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="xl:col-span-2 pl-5 sm:pl-10 overflow-auto">
              <span className="text-green-900 dark:text-[#a8ff53]">
                {expData?.Role}
              </span>
              <ul className="list-disc text-black dark:text-white">
                {expData?.Technologies?.map((item: string) => (
                  <li key={item} className="dark:text-white text-black text-justify">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      }
    />
  );
}

export default Experience;
