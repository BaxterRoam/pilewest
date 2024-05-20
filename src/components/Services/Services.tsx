"use client";

import { useState } from "react";
import { ServiceItem } from "./_components/ServiceItem";
import { ServiceContent } from "./_components/ServiceContent";
import { ServiceImage } from "./_components/ServiceImage";
import { services } from "./constants";

import "./Services.scss";

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSetIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="services">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} onClick={() => handleSetIndex(index)} />
        ))}
      </section>
      <section className="service-details">
        <div className="service-details__content-wrapper">
          {services.map((service, index) => (
            <ServiceContent key={index} service={service} isActive={index === currentIndex} />
          ))}
        </div>
        <div className="service-details__image-wrapper">
          {services.map((service, index) => (
            <ServiceImage key={index} service={service} isActive={index === currentIndex} />
          ))}
        </div>
      </section>
    </>
  );
}
