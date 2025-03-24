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
