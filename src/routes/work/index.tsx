import { createFileRoute } from "@tanstack/react-router";
import WorkData from "../../lib/JSON/works.json";
import { WorkCard } from "@/components/ui/workCard";

export const Route = createFileRoute("/work/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="bg-linear-to-r text-center pb-4 from-white via-blue-400 to-purple-500 bg-clip-text font-black tracking-tight text-transparent text-3xl lg:text-6xl">
        My Works
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start p-8">
        {WorkData?.map((work) => (
          <WorkCard
            id={work.id}
            productImage={work.img}
            title={work.title}
            url={work.url}
            tags={work.tags}
            technologies={work.technologies}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}
