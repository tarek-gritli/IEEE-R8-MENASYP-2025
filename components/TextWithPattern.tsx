import Image from "next/image";

interface TextWithPattern {
  title: string;
  description: string;
}

const TextWithPattern = ({ title, description }: TextWithPattern) => {
  return (
    <div className="mb-12 flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
          {title}
        </h1>
        <p className="font-medium text-center text-white text-xl md:text-2xl mt-4">
          {description}
        </p>
      </div>
      <Image
        src="/images/pattern.png"
        alt="Countries Pattern"
        width={100}
        height={50}
        className="object-cover"
      />
    </div>
  );
};

export default TextWithPattern;
