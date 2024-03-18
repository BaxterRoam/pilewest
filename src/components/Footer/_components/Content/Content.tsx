import { About, Navigation } from "./_components";

import "./Content.scss";

export default function Content() {
  return (
    <div className="footer__content">
      <About />
      <Navigation />
    </div>
  );
}
