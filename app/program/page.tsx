import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { program } from "@/constants";

const Program = () => {
  return (
    <section className="bg-dark min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl text-white font-bold">Our Program</h1>
        <p className="font-bold text-primary100 text-xl mt-4 md:mt-6">
          A dynamic mix of technical sessions, networking, and cultural
          experiences
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <Tabs defaultValue="Day 1" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex gap-4 bg-white px-4 py-8 rounded-lg">
              {Object.keys(program).map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  className={`p-4 rounded-lg font-bold transition-colors duration-200
                      data-[state=active]:bg-[#ff2057] data-[state=active]:text-white
                      data-[state=inactive]:text-[#ff2057] cursor-pointer`}
                >
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(program).map(([day, events]) => (
            <TabsContent
              key={day}
              value={day}
              className="w-full flex flex-col items-center relative"
            >
              <div className="relative w-full max-w-3xl">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

                {events.map((event, index) => (
                  <div
                    key={`${day}-${index}`}
                    className={`flex items-center w-full mb-8 relative ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Line Connector */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ff2057] rounded-full"></div>

                    {/* Event Card */}
                    <div className="w-1/2 p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4">
                      {event.icon && (
                        <div className="text-[#ff2057] text-2xl">
                          {event.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-lg">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Program;
