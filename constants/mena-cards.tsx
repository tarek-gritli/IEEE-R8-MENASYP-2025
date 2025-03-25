import { ChartNoAxesCombined, Earth, NetworkIcon } from "lucide-react";

export const menaCards: MenaCard[] = [
  {
    title: "Networking",
    description:
      "Through interactive sessions, panel discussions, and social events, attendees can expand their professional network and explore new collaboration opportunities.",
    icon: <NetworkIcon className="w-16 h-16 text-primary100" />,
  },
  {
    title: "Professional Growth",
    description:
      "Participants will gain valuable insights into emerging technologies, leadership development, and career advancement.",
    icon: <ChartNoAxesCombined className="w-16 h-16 text-primary100" />,
  },
  {
    title: "Cultural Experience",
    description:
      "From traditional music and dance to authentic Tunisian cuisine and historical site visits, participants will experience a vibrant celebration of Tunisia’s history and traditions.",
    icon: <Earth className="w-16 h-16 text-primary100" />,
  },
];
