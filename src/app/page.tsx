import { ForestNavbar } from "@/components/ForestNavbar/ForestNavbar";
import { ForestHero } from "@/components/ForestHero/ForestHero";
import { ForestIntro } from "@/components/ForestIntro/ForestIntro";
import { ValuesSection } from "@/components/ValuesSection/ValuesSection";
import { ForestFooter } from "@/components/ForestFooter/ForestFooter";

export default function HomePage() {
  return (
    <>
      <ForestNavbar />
      <main>
        <ForestHero />
        <ForestIntro />
        <ValuesSection />
      </main>
      <ForestFooter />
    </>
  );
}
