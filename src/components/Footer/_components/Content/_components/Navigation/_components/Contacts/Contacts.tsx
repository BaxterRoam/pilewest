import Link from "next/link";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@/icons";

import "./Contacts.scss";

const contacts = [
  {
    href: "tel:+61 892 484 950",
    label: "+61 892 484 950",
    icon: <PhoneIcon />,
  },
  {
    href: "mailto:admin@pilewest.com.au",
    label: "admin@pilewest.com.au",
    icon: <EnvelopeIcon />,
  },
  {
    href: "https://goo.gl/maps/2Prtr5Dwv4KC4fzs5",
    label: "437 Victoria Road, Malaga, WA 6090",
    icon: <MapPinIcon />,
  },
];

export default function Contacts() {
  return (
    <ul className="footer__content__navigation__list">
      <h4>Contacts</h4>
      {contacts.map((item, index) => (
        <li key={index} className="item">
          <Link href={item.href}>
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
