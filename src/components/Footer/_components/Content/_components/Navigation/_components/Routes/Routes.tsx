import Link from "next/link";

import "./Routes.scss";

const routes = [
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
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Routes() {
  return (
    <ul className="footer__content__navigation__list">
      <h4>Company</h4>
      {routes.map((item, index) => (
        <li key={index} className="item">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
