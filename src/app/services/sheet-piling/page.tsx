import Image from "next/image";

import { Carousel, CarouselItem, Divider, Slider } from "@/components";

import "./styles.scss";

export default function SheetPiling() {
  return (
    <main className="sheet-piling-page">
      <section className="sheet-piling-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/sheet-piling-001.jpg" heading="Sheet Piling" isHero />
        </Carousel>
      </section>
      <Divider />
      <section className="sheet-piling-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>A Better Retaining Wall Solution</span>
            <h2>Sheet Piling</h2>
          </header>
          <div className="grid-2 grid-2--large">
            <div className="content-sm">
              <p>
                Sheet piles are a retaining wall solution that consists of interlocking steel sheets that are driven
                vertically into the ground to form a continuous barrier.
              </p>
              <p>
                They are commonly used in waterfront construction including cofferdams and retaining walls erected to
                enable permanent works to proceed.
              </p>
            </div>
            <div>
              <Slider>
                <Image src="/images/services/sheet-piling/sheet-piling-001.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/sheet-piling/sheet-piling-002.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/sheet-piling/sheet-piling-007.jpg" alt="" width={1920} height={1080} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
