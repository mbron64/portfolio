import { MinimalHero } from "./minimal/components/MinimalHero";
import { MinimalAbout } from "./minimal/components/MinimalAbout";
import { MinimalResearch } from "./minimal/components/MinimalResearch";
import { MinimalExperience } from "./minimal/components/MinimalExperience";
import { MinimalVentures } from "./minimal/components/MinimalVentures";
import { MinimalSkills } from "./minimal/components/MinimalSkills";
import { MinimalAwards } from "./minimal/components/MinimalAwards";
import { MinimalContact } from "./minimal/components/MinimalContact";
import { MinimalHeader } from "./minimal/components/MinimalHeader";

export default function Home() {
  return (
    <>
      <MinimalHeader />
      <main className="relative">
        <MinimalHero />
        <MinimalAbout />
        <MinimalResearch />
        <MinimalExperience />
        <MinimalVentures />
        <MinimalSkills />
        <MinimalAwards />
        <MinimalContact />
      </main>
    </>
  );
}
