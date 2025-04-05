import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ActionButton = ({
  isHomePage,
  text,
  className,
}: {
  isHomePage: boolean;
  text: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        `bg-primary100 cursor-pointer hover:bg-[#C31B44] font-bold ${className}`,
        isHomePage ? "text-white" : "text-black"
      )}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
