import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero/program-hero.webp"
    >
      <HeroText
        imgSrc="/images/calendar-logo.png"
        altText="Calendar logo"
        title="Timeline & Schedule"
        description="Learn more about the MENASYP 2025 schedule and activities"
        arrowText="Check the program"
        takeMeTo="#"
      />
    </HeroGradient>
  );
};

export default Hero;
