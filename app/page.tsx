import AboutHostCountry from "@/components/home/AboutHostCountry";
import AboutMenaSYP from "@/components/home/AboutMenaSYP";
import Contributors from "@/components/home/Contributors";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Speakers from "@/components/home/Speakers";
import Sponsors from "@/components/home/Sponsors";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMenaSYP />
      <AboutHostCountry />
      <Speakers />
      <Contributors />
      <Sponsors />
      <Partners />
    </div>
  );
}
