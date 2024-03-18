import Link from "next/link";
import Image from "next/image";

import "./Logo.scss";

export default function Logo() {
  return (
    <div className="footer__content__about__logo">
      <Link href="/">
        <Image className="image" src="/images/logo/pilewest-logo--dark.svg" alt="" width={256} height={256} />
      </Link>
    </div>
  );
}
