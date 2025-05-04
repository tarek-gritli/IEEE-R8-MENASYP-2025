import Image from "next/image";

interface TextWithPattern {
  title: string;
  description?: string;
}

const TextWithPattern = ({ title, description }: TextWithPattern) => {
  return (
    <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col justify-center items-center gap-1 sm:gap-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
          {title}
        </h1>
        {description && (
          <p className="font-medium text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4">
            {description}
          </p>
        )}
      </div>
      <Image
        src="/images/pattern.png"
        alt="Pattern"
        width={100}
        height={50}
        className="object-cover w-16 sm:w-20 md:w-24 lg:w-auto"
      />
    </div>
  );
};

export default TextWithPattern;
