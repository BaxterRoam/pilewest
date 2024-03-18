import Image from "next/image";

import "./Card.scss";

export type TextCardProps = {
  heading?: string;
  body?: string;
  theme: "light" | "dark";
};

export type IconCardProps = {
  icon: string;
  heading?: string;
  body?: string;
  theme: "light" | "dark";
};

export type ImageCardProps = {
  image: string;
  heading?: string;
  body?: string;
  theme: "light" | "dark";
};

export function TextCard({ heading, body, theme }: TextCardProps) {
  return (
    <div className={`card card--text ${theme && `card--${theme}`}`}>
      <div className="card__container">
        <div className="card__content">
          {heading && <h3 className="card__heading">{heading}</h3>}
          {body && <p className="card__body">{body}</p>}
        </div>
      </div>
    </div>
  );
}

export function IconCard({ icon, heading, body, theme }: IconCardProps) {
  return (
    <div className={`card card--icon ${theme && `card--${theme}`}`}>
      <div className="card__container">
        <Image className="card__icon" src={icon} alt="" width={64} height={64} />
        <div className="card__content">
          {heading && <h3 className="card__heading">{heading}</h3>}
          {body && <p className="card__body">{body}</p>}
        </div>
      </div>
    </div>
  );
}

export function ImageCard({ image, heading, body, theme }: ImageCardProps) {
  return (
    <div className={`card card--image ${theme && `card--${theme}`}`}>
      <div className="card__container">
        <Image className="card__image" src={image} alt="" width={1024} height={1024} />
        <div className="card__content">
          {heading && <h3 className="card__heading">{heading}</h3>}
          {body && <p className="card__body">{body}</p>}
        </div>
      </div>
    </div>
  );
}
