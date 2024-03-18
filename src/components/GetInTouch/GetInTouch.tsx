"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

import { CTA } from "@/components";

import "./GetInTouch.scss";

export function GetInTouch() {
  return (
    <section className="get-in-touch__container">
      <div className="get-in-touch">
        <Parallax className="parallax" translateY={[-20, 20]}>
          <Image
            className="get-in-touch__image"
            src="/images/backgrounds/get-in-touch.jpg"
            alt="Get In Touch"
            width={1920}
            height={1080}
          />
        </Parallax>
        <div className="get-in-touch__overlay">
          <p className="get-in-touch__heading">Need a solution for your next project?</p>
          <CTA href="/contact" label="Get In Touch" />
        </div>
      </div>
    </section>
  );
}
