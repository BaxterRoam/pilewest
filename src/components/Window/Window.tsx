"use client";

import Image from "next/image";
import { useState } from "react";

import { CTA } from "@/components";

import "./Window.scss";

export type WindowProps = {
  items: {
    image: string;
    heading: string;
    href: string;
  }[];
};

export default function Window({ items }: WindowProps) {
  const [itemIndex, setItemIndex] = useState(-1);

  return (
    <div className="window">
      <div className="window__images">
        {items.map((item, index) => (
          <Image
            key={index}
            className={`window__image ${index == itemIndex && `window__image--active`}`}
            src={item.image}
            alt={`${item.heading} Image`}
            width={1920}
            height={1080}
          />
        ))}
      </div>
      <div className="window__items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index == itemIndex && `item--active`}`}
            onMouseOver={() => setItemIndex(index)}
            onMouseOut={() => setItemIndex(-1)}
          >
            <h3 className="item__heading">{item.heading}</h3>
            <CTA href={item.href} label="Learn More" />
          </div>
        ))}
      </div>
    </div>
  );
}
