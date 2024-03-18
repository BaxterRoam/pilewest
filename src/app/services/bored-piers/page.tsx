import Image from "next/image";

import { Carousel, CarouselItem, Divider, Slider } from "@/components";

import "./styles.scss";

export default function BoredPiers() {
  return (
    <main className="bored-piers-page">
      <section className="bored-piers-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/bored-piers-001.jpg" heading="Bored Piers" isHero />
        </Carousel>
      </section>
      <Divider />
      <section className="bored-piers-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>A Better Retaining Wall Solution</span>
            <h2>Bored Piers</h2>
          </header>
          <div className="grid-2 grid-2--large">
            <div className="content-sm">
              <p>
                Bored piers are used in applications where deep foundations are required, such as for high-rise
                buildings, bridges, and other large structures.
              </p>
              <p>
                They are drilled into the ground and filled with concrete to provide a stable foundation. They offer
                increased stability, durability, and longevity, making them less susceptible to ground movement and
                settling.
              </p>
              <p>
                They are ideal for projects in areas with unstable soil conditions, where traditional shallow
                foundations may not be adequate.
              </p>
            </div>
            <div>
              <Slider>
                <Image src="/images/services/bored-piers/bored-piers-002.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/bored-piers/bored-piers-004.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/bored-piers/bored-piers-006.jpg" alt="" width={1920} height={1080} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
