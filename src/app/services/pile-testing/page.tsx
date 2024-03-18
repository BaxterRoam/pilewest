import Image from "next/image";

import { Carousel, CarouselItem, Divider, Slider } from "@/components";

import "./styles.scss";

export default function PileTesting() {
  return (
    <main className="pile-testing-page">
      <section className="pile-testing-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/pile-testing-001.jpg" heading="Pile Testing" isHero />
        </Carousel>
      </section>
      <Divider />
      <section className="pile-testing-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>A Better Retaining Wall Solution</span>
            <h2>Pile Testing</h2>
          </header>
          <div className="grid-2 grid-2--large">
            <div className="content-sm">
              <p>
                Pile testing assesses foundation piles for structural integrity and load capacity. It ensures
                compliance, identifies issues, and enhances stability and safety through rigorous analysis and
                evaluation.
              </p>
            </div>
            <div>
              <Slider>
                <Image src="/images/services/pile-testing/pile-testing-001.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/pile-testing/pile-testing-002.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/pile-testing/pile-testing-003.jpg" alt="" width={1920} height={1080} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
