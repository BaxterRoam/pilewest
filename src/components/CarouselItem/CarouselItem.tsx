"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

import "./CarouselItem.scss";

export type CarouselItemProps = {
  image: string;
  heading?: string;
  body?: string;
  isHero?: boolean;
};

export function CarouselItem({ image, heading, body, isHero }: CarouselItemProps) {
  return (
    <div className="carousel-item">
      <Parallax className="carousel-item__parallax" translateY={[-20, 20]}>
        <Image className="carousel-item__image" src={image} alt="" width={1920} height={1080} />
      </Parallax>
      <div className="carousel-item__content">
        {isHero
          ? heading && <h1 className="carousel-item__heading">{heading}</h1>
          : heading && <h3 className="carousel-item__heading">{heading}</h3>}
        {body && <p className="carousel-item__body">{body}</p>}
      </div>
    </div>
  );
}
