import AboutMenaSYP from "@/components/home/AboutMenaSYP";
import Hero from "@/components/home/Hero";
import ParticipatingCountries from "@/components/home/ParticipatingCountries";
import Partners from "@/components/Partners";
import Sponsors from "@/components/home/Sponsors";
import TunisiaImages from "@/components/tunisia-images";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMenaSYP />
      <TunisiaImages isHomePage={true} />
      <ParticipatingCountries />
      <Partners />
      <Sponsors />
    </div>
  );
}
