import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/content/heroSection";
import Technologies from "@/components/content/technologies";
import Experience from "@/components/content/experience";
import Education from "@/components/content/education";
import Skills from "@/components/content/skills";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-5 mt-5">
      <HeroSection />
      <Technologies />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}
