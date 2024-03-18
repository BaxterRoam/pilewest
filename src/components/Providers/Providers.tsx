"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: React.PropsWithChildren) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
