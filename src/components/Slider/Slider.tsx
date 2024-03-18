"use client";

import { useState, Children } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";

import "./Slider.scss";

export type SliderProps = {
  children: React.ReactNode;
};

export default function Slider({ children }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Children.count(children) - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === Children.count(children) - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="slider__slides">
        {Children.map(children, (child, index) => (
          <div className={index === currentIndex ? "slide active" : "slide"}>{child}</div>
        ))}
      </div>
      <div className="slider__controls">
        {Children.count(children) > 1 && (
          <div className="slider__controls__indexs">
            <p className="slider__controls__index">0{currentIndex + 1}</p>
            <p className="slider__last-index">0{Children.count(children)}</p>
          </div>
        )}
        <div className="slider__controls__selectors">
          {Children.map(children, (_, index) => (
            <button className="slider__controls__selector" onClick={() => setCurrentIndex(index)}>
              <div
                className={`slider__controls__line ${index == currentIndex ? `slider__controls__line--active` : ""}`}
                key={index}
              ></div>
            </button>
          ))}
        </div>
        {Children.count(children) > 1 && (
          <div className="slider__controls__navigations">
            <button className="slider__controls__navigation" onClick={() => prev()}>
              <ArrowLeftIcon />
            </button>
            <button className="slider__controls__navigation" onClick={() => next()}>
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
