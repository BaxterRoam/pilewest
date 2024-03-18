import { Contacts, Routes, Services } from "./_components";

import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className="footer__content__navigation row--large">
      <Routes />
      <Services />
      <Contacts />
    </div>
  );
}
