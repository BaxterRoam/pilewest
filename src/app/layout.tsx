import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Header, Providers } from "@/components";

import "@/styles/globals.scss";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pilewest.com.au"),
  title: "Pilewest",
  description: "WA's Piling Specialist",
  keywords:
    "Screw piling, Soldier piling, Sheet piling, Anchoring, Bored piers, Pile testing, Piling services, WA piling, Pilewest, Piling specialist, Foundation solutions, Construction support, Structural stability, Ground improvement, Deep foundation, Geotechnical engineering, Pile installation, Structural piling, Pile contractors, Foundation testing",
  authors: [
    {
      name: "BaxterCooper",
      url: "http://github.com/BaxterCooper",
    },
  ],
  creator: "BaxterCooper",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://pilewest.com.au",
    title: "Pilewest",
    description: "WA's Piling Specialist",
    siteName: "Pilewest",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
