import AboutMenaSYP from "@/components/about-us/AboutMenaSYP";
import AboutStudentBranch from "@/components/about-us/AboutStudentBranch";
import AboutTunisiaSection from "@/components/about-us/AboutTunisiaSection";
import MeetOurTeam from "@/components/about-us/MeetOurTeam";

const AboutUs = () => {
  return (
    <div>
      <AboutTunisiaSection />
      <AboutStudentBranch />
      <AboutMenaSYP />
      <MeetOurTeam />
    </div>
  );
};

export default AboutUs;
