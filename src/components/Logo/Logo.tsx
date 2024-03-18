import Link from "next/link";
import Image from "next/image";

import "./Logo.scss";

export type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark }: LogoProps) {
  const src = dark ? "/images/logo/pilewest-logo--dark.svg" : "/images/logo/pilewest-logo--light.svg";
  const alt = dark ? "Pilewest Dark Logo" : "Pilewest Light Logo";

  return (
    <div className="logo">
      <Link className="logo__link" href="/">
        <Image className="logo__image" src={src} alt={alt} width={256} height={256} />
      </Link>
    </div>
  );
}
