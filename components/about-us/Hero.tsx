import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero/about-us-hero.jpg"
    >
      <HeroText
        imgSrc="/logo-icon-white.svg"
        altText="MenaSYP logo"
        title="About us"
        description="Get to know the MENASYP organizers"
        arrowText="Scroll to learn more"
        takeMeTo="about"
      />
    </HeroGradient>
  );
};

export default Hero;
