import Link from "next/link";

import "./Services.scss";

const services = [
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
];

export default function Services() {
  return (
    <ul className="footer__content__navigation__list">
      <h4>Services</h4>
      {services.map((item, index) => (
        <li key={index} className="item">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
