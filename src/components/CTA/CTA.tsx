import Link from "next/link";

import "./CTA.scss";

export type CTAProps = {
  label: string;
  href: string;
};

export function CTA({ label, href }: CTAProps) {
  return (
    <Link className="cta" href={href}>
      {label}
    </Link>
  );
}
