import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero/sponsors-partners-hero.jpg"
    >
      <HeroText
        imgSrc="/images/coin-logo.png"
        altText="Coin logo"
        title="Sponsors & Partners"
        description="Partners of the MENASYP 2025 Congress"
        arrowText="Check them out"
        takeMeTo="#partners"
      />
    </HeroGradient>
  );
};

export default Hero;
