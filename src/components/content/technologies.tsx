import CardDesign from "@/components/ui/cardDesign";
import TechnologiesData from "@/lib/JSON/technologies.json";
import { BsGlobe, BsDatabase } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";
import { IoGitBranchOutline } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { IconComponent } from "@/components/ui/iconComponent";
import { RiAiGenerate2 } from "react-icons/ri";

function Technologies() {
  const icons = [
    BsGlobe,
    BsDatabase,
    TbApi,
    CgPerformance,
    IoGitBranchOutline,
    GrTest,
    RiAiGenerate2
  ];
  const techImages = [
    "/images/technology/html.png",
    "/images/technology/javascript.png",
    "/images/technology/css.png",
    "/images/technology/bootstrap.png",
    "/images/technology/tailwind.png",
    "/images/technology/react.png",
    "/images/technology/next.png",
    "/images/technology/flutter.png",
    "/images/technology/vite.png"
  ];
  return (
    <>
      <CardDesign
        content={
          <section
            id="technologies"
            className=" items-center gap-x-4 rounded-2xl"
          >
            <div className="text-center py-4">
              <span className="text-md py-2 text-green-400 text-start">
                Technologies
              </span>
              <p className="text-3xl">Technologies and Integrations</p>
            </div>
            <span className="flex items-center space-x-4">
              {techImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Technology ${index + 1}`}
                className="w-16 h-16 object-contain mx-auto mb-4"
              />
            ))}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4">
              {TechnologiesData?.map((technology) => (
                <div
                  className="w-full border border-gray-400 p-4 rounded-md dark:bg-[#272730] bg-white"
                  key={technology.id}
                >
                  {icons?.map(
                    (Icon, index) =>
                      technology.logoName === Icon.name && (
                        <IconComponent key={index} icon={Icon} />
                      ),
                  )}
                  <h2 className="underline text-md py-2">{technology.name}</h2>
                  <p className="tracking-wider leading-6 text-sm text-justify">
                    {technology.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        }
      />
    </>
  );
}

export default Technologies;
