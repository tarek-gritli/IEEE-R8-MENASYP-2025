interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

interface Contributor {
  name: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
}

interface NavbarLink {
  route: string;
  label: string;
}

interface Currency {
  code: string;
  name: string;
}

interface MenaCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface Country {
  name: string;
  image: string;
}

interface ProgramEvent {
  title: string;
  icon: string | React.ReactNode;
}

interface CongressProgram {
  [day: string]: ProgramEvent[];
}
