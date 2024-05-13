"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import "./Window.scss";

export type WindowProps = {
  items: {
    image: string;
    heading: string;
    href: string;
  }[];
};

export default function Window({ items }: WindowProps) {
  const [itemIndex, setItemIndex] = useState(0);

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
          <Link
            key={index}
            href={item.href}
            className={`item ${index == itemIndex && `item--active`}`}
            onMouseOver={() => setItemIndex(index)}
            onMouseOut={() => setItemIndex(0)}
          >
            <div>
              <h3 className="item__heading">{item.heading}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
