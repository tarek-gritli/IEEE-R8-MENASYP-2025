import TextWithPattern from "./TextWithPattern";

const Section = ({
  title,
  description,
  children,
  className = "",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      id="partners"
      className={`bg-dark min-h-screen flex flex-col max-w- xl py-12 px-4 ${className}`}
    >
      <TextWithPattern title={title} description={description} />

      {children}
    </section>
  );
};

export default Section;
