import Section from "../Section";
import SponsorsCarousel from "./SponsorsCarousel";

export default function Sponsors() {
  return (
    <Section
      title="Made Possible By"
      description="Check out our main sponsors and partners"
      className="items-center"
    >
      <SponsorsCarousel />
    </Section>
  );
}
