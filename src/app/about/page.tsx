import { Carousel, CarouselItem, Divider, TextCard, IconCard } from "@/components";

import { statistics, competenciesExtended } from "@/constants/cards";

import "./styles.scss";

export default function About() {
  return (
    <main className="about-page">
      <div className="about-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/about-001.jpg" heading="About Us" isHero />
        </Carousel>
      </div>
      <Divider />
      <section className="about-page__company section section--theme-dark">
        <div className="section-container">
          <header className="section-header">
            <span>Who We Are</span>
            <h2>Our Company</h2>
          </header>
          <div className="content-sm">
            <div className="content-sm">
              <p>
                Our goal is to deliver a <span>quality piling solution</span> for your next project that will{" "}
                <span>exceed any expectations</span>. From intelligent design all the way through to fast, efficient and
                safe installation, we will deliver piling solutions on time and on budget.
              </p>
              <p>
                With the successful completion of a diverse range of large projects across Western Australia, PILEWEST
                has quickly established itself as a <span>leading supplier and installer</span> of steel screwpiles,
                driven piles, sheet piles, soldier piles and anchors. In addition to our piling solutions, PILEWEST also
                provides auger drilling, down the hole hammer and pile testing services.
              </p>
            </div>
            <div className="grid-3">
              {statistics.map((card, index) => (
                <TextCard key={index} {...card} theme="dark" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="about-page__competencies section">
        <div className="section-container">
          <header className="section-header">
            <span>What We Bring To You</span>
            <h2>Our Competencies</h2>
          </header>
          <div className="grid-4">
            {competenciesExtended.map((card, index) => (
              <IconCard key={index} {...card} theme="light" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
