import Image from "next/image";

import { Carousel, CarouselItem, CTA } from "@/components";

import "./styles.scss";

const services = [
  {
    reverse: true,
    image: "/images/backgrounds/screw-piling-001.jpg",
    heading: "Screw Piling",
    body: "Screw piles are a cost-effective alternative to conventional piling. They are versatile, efficient, and used in various applications such as residential and commercial building, bridges, and telecommunications.",
    href: "/services/screw-piling",
  },
  {
    image: "/images/backgrounds/soldier-piling-001.jpg",
    heading: "Soldier Piling",
    body: "Soldier piles are vertical steel beams used as retaining walls. They are effective in ground conditions from stiff clay to rock and can be used as temporary shoring or permanent walls.",
    href: "/services/soldier-piling",
  },
  {
    reverse: true,
    image: "/images/backgrounds/sheet-piling-001.jpg",
    heading: "Sheet Piling",
    body: "Sheet piles are interlocking steel sheets driven into the ground for retaining walls. They are commonly used in waterfront construction and enable permanent works to proceed.",
    href: "/services/sheet-piling",
  },
  {
    image: "/images/backgrounds/bored-piers-001.jpg",
    heading: "Bored Piers",
    body: "Bored piers provide stable foundations for high-rise buildings, bridges, and large structures. They offer increased stability, durability, and are ideal for areas with unstable soil conditions.",
    href: "/services/bored-piers",
  },
  {
    reverse: true,
    image: "/images/backgrounds/anchoring-001.jpg",
    heading: "Anchoring",
    body: "Mechanical anchors increase retained height on retaining walls. Load testing can be done using hydraulic jacks.",
    href: "/services/anchoring",
  },
  {
    image: "/images/backgrounds/pile-testing-001.jpg",
    heading: "Pile Testing",
    body: "Pile testing assesses foundation piles for structural integrity and load capacity. It ensures compliance, identifies issues, and enhances stability and safety through rigorous analysis and evaluation.",
    href: "/services/pile-testing",
  },
];

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/services-001.jpg" heading="Our Services" isHero />
        </Carousel>
      </section>
      <section className="services-page__cards">
        {services.map((item, index) => (
          <div key={index} className="card">
            {item.reverse ? (
              <>
                <div className="card__content">
                  <h3 className="card__heading">{item.heading}</h3>
                  <p className="card__body">{item.body}</p>
                  <CTA href={item.href} label="Learn More" />
                </div>
                <Image className="card__image" src={item.image} alt="" width={1920} height={1080} />
              </>
            ) : (
              <>
                <Image className="card__image" src={item.image} alt="" width={1920} height={1080} />
                <div className="card__content">
                  <h3 className="card__heading">{item.heading}</h3>
                  <p className="card__body">{item.body}</p>
                  <CTA href={item.href} label="Learn More" />
                </div>
              </>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
