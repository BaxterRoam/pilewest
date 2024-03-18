import { Company, Logo } from "./_components";
import "./About.scss";

export default function About() {
  return (
    <div className="footer__content__about">
      <Logo />
      <Company />
    </div>
  );
}
