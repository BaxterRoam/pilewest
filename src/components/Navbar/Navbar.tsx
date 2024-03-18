import Link from "next/link";

import { ChevronDownIcon } from "@/icons";

import "./Navbar.scss";

export type NavItem = {
  icon?: React.ReactNode;
  label: string;
  href: string;
  dropdown?: NavItem[];
};

export type NavbarProps = {
  items: NavItem[];
  seperator?: boolean;
};

export default function Navbar({ items, seperator }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        {items.map((item, index) => (
          <li className={`nav-item ${seperator && `nav-item--seperator`}`} key={index}>
            <div className="nav-item__container">
              {item.icon}
              <Link className="nav-item__link" href={item.href}>
                {item.label}
              </Link>
              {item.dropdown && <ChevronDownIcon />}
            </div>
            {item.dropdown && (
              <ul className="nav-item__dropdown">
                {item.dropdown.map((item, index) => (
                  <li className="dropdown-item" key={index}>
                    <Link className="dropdown-item__link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
