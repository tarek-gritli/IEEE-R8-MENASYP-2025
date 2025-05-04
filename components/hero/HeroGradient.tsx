interface HeroGradientProps {
  children: React.ReactNode;
  backgroundType?: "image" | "video";
  backgroundSrc?: string;
  className?: string;
}

const HeroGradient = ({
  children,
  backgroundType = "image",
  backgroundSrc = "/images/hero.jpg",
  className = "",
}: HeroGradientProps) => {
  const baseGradientStyle = {
    backgroundImage:
      backgroundType === "image"
        ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(44, 28, 56, 1) 100%),
       linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
       url('${backgroundSrc}')`
        : `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(44, 28, 56, 1) 100%),
       linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  if (backgroundType === "image") {
    return (
      <section
        className={`h-screen w-full relative overflow-hidden ${className}`}
      >
        <div
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(44, 28, 56, 1) 100%),
                            linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
        />

        <div className="absolute inset-0 z-10" style={baseGradientStyle} />

        <div className="relative z-20 h-full w-full">{children}</div>
      </section>
    );
  } else if (backgroundType === "video") {
    return (
      <section
        className={`h-screen w-full relative overflow-hidden ${className}`}
      >
        <div
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(44, 28, 56, 1) 100%),
                            linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(44, 28, 56, 1) 100%),
                            linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
        />
        <div className="relative z-20 h-full w-full">{children}</div>
      </section>
    );
  }
};

export default HeroGradient;
