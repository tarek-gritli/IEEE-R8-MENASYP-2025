import { teamMembers } from "@/constants";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const MeetOurTeam = () => {
  return (
    <section className="bg-dark flex flex-col justify-center items-center p-4 w-full">
      <Carousel className="max-w-5xl">
        <CarouselContent className="-ml-1">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={"member " + index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="border-0 overflow-hidden bg-transparent">
                  <CardContent className="p-0">
                    <div className="bg-white p-3 shadow-lg">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center p-4 bg-white">
                        <h3 className="text-xl font-semibold text-[#FF2057]">
                          {member.name}
                        </h3>
                        <p className="text-gray-500">{member.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
export default MeetOurTeam;
