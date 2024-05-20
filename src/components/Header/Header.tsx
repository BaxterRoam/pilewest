"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Logo, Navbar, Menu } from "@/components";
import { BarsIcon } from "@/icons";

import { contacts, routes } from "@/constants/lists";

import "./Header.scss";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <Logo />
        <div className="header__navbar">
          <Navbar items={contacts} seperator />
        </div>
        <button
          className="header__menu-button"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <BarsIcon />
        </button>
      </header>
      <div className={menuOpen ? "header-menu header-menu--active" : "header-menu header-menu--inactive"}>
        <Menu items={routes} />
      </div>
    </>
  );
}
