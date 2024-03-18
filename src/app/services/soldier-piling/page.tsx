import Image from "next/image";

import { Carousel, CarouselItem, Divider, Slider } from "@/components";

import "./styles.scss";

export default function SoldierPiling() {
  return (
    <main className="soldier-piling-page">
      <section className="soldier-piling-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/soldier-piling-001.jpg" heading="Soldier Piling" isHero />
        </Carousel>
      </section>
      <Divider />
      <section className="soldier-piling-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>A Better Retaining Wall Solution</span>
            <h2>Soldier Piling</h2>
          </header>
          <div className="grid-2 grid-2--large">
            <div className="content-sm">
              <p>
                At PILEWEST, we are proud to be your go-to experts in in soldier piling solutions that deliver strength,
                stability, and structural excellence. With a steadfast commitment to quality, safety, and innovation, we
                are your trusted partner for all your soldier piling needs.
              </p>
            </div>
            <div>
              <Slider>
                <Image src="/images/services/soldier-piling/soldier-piling-003.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/soldier-piling/soldier-piling-004.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/soldier-piling/soldier-piling-013.jpg" alt="" width={1920} height={1080} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
