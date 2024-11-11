export interface Service {
  id?: string;
  title: string;
  image: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: 'terensko_jahanje',
    title: 'Terensko jahanje',
    image: '/hero5.jpg',
    description:
      'Uzivajte u jedinstvenom dozirvljaju terenskog jahanja kroz prelepie predele. Prepustite se uzbudljivom jahanju na otvorenom.',
  },
  {
    title: 'Skola jahanja',
    image: '/hero1.jpg',
    description:
      'Naucite sve o osnovama jahanja pod nadzorom iskusnih instruktora. Otkrij ovu uzbudljivu vestinu iz temelja.',
  },
  {
    title: 'Voznja kvadom',
    image: '/hero5.jpg',
    description:
      'Dozivite adrenalinsku voznju na nasim terenima na quad vozilima. Uz profesionalnu opremu i obuku, sigurno cete uzivati.',
  },
  {
    id: 'smestaj',
    title: 'Smestaj',
    image: '/hero1.jpg',
    description:
      'Odmorite se u nasim udobnim smestajanim jedinicama i pripremite se za nova uzbudljiva iskustva na imanju. Uzivajte u spokoju prirode.',
  },
];
