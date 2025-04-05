import AboutMenaSYP from "@/components/about-us/AboutMenaSYP";
import AboutStudentBranch from "@/components/about-us/AboutStudentBranch";
import AboutTunisiaSection from "@/components/about-us/AboutTunisiaSection";
import MeetOurTeam from "@/components/about-us/MeetOurTeam";
import ParticipatingCountries from "@/components/home/ParticipatingCountries";
import TunisiaImages from "@/components/tunisia-images";

const AboutUs = () => {
  return (
    <div>
      <AboutTunisiaSection />
      <AboutStudentBranch />
      <AboutMenaSYP />
      <TunisiaImages isAboutUsPage={true} />
      <ParticipatingCountries />
      <MeetOurTeam />
    </div>
  );
};

export default AboutUs;
