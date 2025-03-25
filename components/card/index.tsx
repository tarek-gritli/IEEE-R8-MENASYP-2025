type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-primary100 text-xl font-semibold text-center mb-3">
        {title}
      </h3>
      <p className="text-[#6D6D6D] text-center">{description}</p>
    </div>
  );
};

export default Card;
