import { MinimalHero } from "./components/MinimalHero";
import { MinimalAbout } from "./components/MinimalAbout";
import { MinimalResearch } from "./components/MinimalResearch";
import { MinimalExperience } from "./components/MinimalExperience";
import { MinimalVentures } from "./components/MinimalVentures";
import { MinimalSkills } from "./components/MinimalSkills";
import { MinimalAwards } from "./components/MinimalAwards";
import { MinimalContact } from "./components/MinimalContact";
import { MinimalHeader } from "./components/MinimalHeader";

export default function MinimalPage() {
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

