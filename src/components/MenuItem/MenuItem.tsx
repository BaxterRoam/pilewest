"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronDownIcon } from "@/icons";

import "./MenuItem.scss";

export type MenuItemProps = {
  icon?: React.ReactNode;
  label: string;
  href: string;
  dropdown?: MenuItemProps[];
};

export default function MenuItem({ icon, label, href, dropdown }: MenuItemProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li className="menu-item">
      <div className="menu-item__label">
        <Link className="menu-item__link" href={href}>
          {icon}
          {label}
        </Link>
        {dropdown && (
          <button
            className={`menu-item__dropdown-button ${dropdownOpen && `menu-item__dropdown-button--active`}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <ChevronDownIcon />
          </button>
        )}
      </div>
      {dropdown && (
        <ul className={`menu-item__dropdown ${dropdownOpen && `menu-item__dropdown--active`}`}>
          {dropdown.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
}
