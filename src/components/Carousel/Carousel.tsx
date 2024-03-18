"use client";

import { useEffect, useState, useMemo, useCallback, Children } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";

import "./Carousel.scss";

export type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = useMemo(() => Children.count(children), [children]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Children.count(children) - 1 : prev - 1));
  };

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev === Children.count(children) - 1 ? 0 : prev + 1));
  }, [children, setCurrentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, next]);

  return (
    <div className="carousel">
      <div className="carousel__items">
        {Children.map(children, (child, index) => (
          <div className={`carousel__item ${index == currentIndex ? `carousel__item--active` : ""}`}>{child}</div>
        ))}
      </div>
      <div className="carousel__controls">
        {count > 1 && (
          <div className="carousel__controls__indexs">
            <p className="carousel__controls__index">0{currentIndex + 1}</p>
            <p className="carousel__last-index">0{count}</p>
          </div>
        )}
        <div className="carousel__controls__selectors">
          {Children.map(children, (_, index) => (
            <button className="carousel__controls__selector" onClick={() => setCurrentIndex(index)}>
              <div
                className={`carousel__controls__line ${index == currentIndex ? `carousel__controls__line--active` : ""}`}
                key={index}
              ></div>
            </button>
          ))}
        </div>
        {count > 1 && (
          <div className="carousel__controls__navigations">
            <button className="carousel__controls__navigation" onClick={() => prev()}>
              <ArrowLeftIcon />
            </button>
            <button className="carousel__controls__navigation" onClick={() => next()}>
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
