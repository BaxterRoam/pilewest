import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@/icons";

export const contacts = [
  {
    icon: <PhoneIcon />,
    label: "+61 892 484 950",
    href: "tel:+61 892 484 950",
  },
  {
    icon: <EnvelopeIcon />,
    label: "admin@pilewest.com.au",
    href: "mailto:admin@pilewest.com.au",
  },
  {
    icon: <MapPinIcon />,
    label: "437 Victoria Road, Malaga, WA 6090",
    href: "https://goo.gl/maps/2Prtr5Dwv4KC4fzs5",
  },
];

export const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Screw Piling",
        href: "/services/screw-piling",
      },
      {
        label: "Soldier Piling",
        href: "/services/soldier-piling",
      },
      {
        label: "Sheet Piling",
        href: "/services/sheet-piling",
      },
      {
        label: "Bored Piers",
        href: "/services/bored-piers",
      },
      {
        label: "Anchoring",
        href: "/services/anchoring",
      },
      {
        label: "Pile Testing",
        href: "/services/pile-testing",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
