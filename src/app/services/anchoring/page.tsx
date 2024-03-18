import Image from "next/image";

import { Carousel, CarouselItem, Divider, Slider } from "@/components";

import "./styles.scss";

export default function Anchoring() {
  return (
    <main className="anchoring-page">
      <section className="anchoring-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/anchoring-001.jpg" heading="Anchoring" isHero />
        </Carousel>
      </section>
      <Divider />
      <section className="anchoring-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>A Better Retaining Wall Solution</span>
            <h2>Anchoring </h2>
          </header>
          <div className="grid-2 grid-2--large">
            <div className="content-sm">
              <p>
                Mechanical Anchors can be installed to increase the retained height on sheet pile or soldier pile
                retaining walls. The speeds of installion of the anchors exceed that of traditional grouted anchors.
              </p>
              <p>
                Once tenstioned after installation, excavation to a lower depth can begin immediately. Anchors can be
                removed or de-tensioned at a later time.
              </p>
            </div>
            <div>
              <Slider>
                <Image src="/images/services/anchoring/anchoring-001.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/anchoring/anchoring-001.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/anchoring/anchoring-001.jpg" alt="" width={1920} height={1080} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
