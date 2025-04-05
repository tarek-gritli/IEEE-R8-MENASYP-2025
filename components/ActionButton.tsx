import { Button } from "./ui/button";

const ActionButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Button
      className={`bg-primary100 cursor-pointer hover:bg-[#C31B44] font-bold text-white ${className}`}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
