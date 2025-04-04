import CountriesCarousel from "./CountriesCarousel";
import Section from "../Section";

const ParticipatingCountries = () => {
  return (
    <Section
      title="Participating Countries"
      description="15+ Countries of the MENA Region"
      className="items-center"
    >
      <CountriesCarousel />
    </Section>
  );
};

export default ParticipatingCountries;
