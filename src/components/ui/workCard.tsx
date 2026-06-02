import type { WorkCardType } from "@/lib/types/type";

export const WorkCard = ({
  id,
  productImage,
  title,
  url,
  tags,
  technologies,
  description,
}: WorkCardType) => {
  return (
    <a
      href={url}
      key={id}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-full xl:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full h-full"
    >
      <div className="sm:flex">
        <div className="md:shrink-0 p-2 sm:max-w-[150px] w-full">
          <img
            className="h-48 w-full object-contain md:h-full md:w-48"
            src={productImage}
            alt="product_logo"
          />
        </div>
        <div className="p-2">
          <span className="block mb-1 text-lg leading-tight font-medium text-black">
            {title}
          </span>
          <div className="flex flex-wrap gap-2 py-2">
            {technologies.map((tech, index) => (
              <span
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                key={index + 1}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-2 text-slate-500 text-justify">{description}</p>
          <span className="flex flex-wrap mt-4">
            {tags.map((tag, index) => (
              <span className="text-xs text-gray-500 pr-2" key={index + 1}>
                {tag}
              </span>
            ))}
          </span>
        </div>
      </div>
    </a>
  );
};
