import { Carousel, CarouselItem, Divider, TextCard, IconCard, ImageCard, CTA, Window, Slider } from "@/components";

import { statistics, competencies, capabilities, benefits } from "@/constants/cards";
import { services } from "@/constants/windows";

import "./styles.scss";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-page__hero hero">
        <Carousel>
          <CarouselItem
            image="/images/backgrounds/home-001.jpg"
            heading="WA's Piling Specialists"
            body="A Perth based company specialising in the design, supply and installation of steel piling and retaining wall solutions."
            isHero
          />
          <CarouselItem
            image="/images/backgrounds/home-002.jpg"
            heading="Quality Piling Solutions"
            body="Our goal is to deliver a quality piling solution for your next project that will exceed expectations with quality, cost-effective, and timely installations."
            isHero
          />
          <CarouselItem
            image="/images/backgrounds/home-003.jpg"
            heading="Trusted Experts in Piling"
            body="Our experienced team offers specialized knowledge, comprehensive engineering, and state-of-the-art equipment for successful projects."
            isHero
          />
        </Carousel>
      </section>

      <Divider />

      <section className="home-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>WA&apos;s Piling Specialists</span>
            <h2>About Us</h2>
          </header>
          <div className="home-page__about__statistics grid-3">
            {statistics.map((card, index) => (
              <TextCard key={index} {...card} theme="light" />
            ))}
          </div>
          <p>
            Our goal is to deliver a <span>quality piling solution</span> for your next project that will{" "}
            <span>exceed any expectations</span>. From intelligent design all the way through to fast, efficient and
            safe installation, we will deliver piling solutions <span>on time</span> and <span>on budget</span>.
          </p>
          <div className="home-page__about__competencies grid-4">
            {competencies.map((card, index) => (
              <IconCard key={index} {...card} theme="light" />
            ))}
          </div>
          <div className="home-page__about__cta">
            <CTA href="/about" label="Discover Our Mission" />
          </div>
        </div>
      </section>
      <section className="home-page__services">
        <Window {...services} />
      </section>
      <section className="home-page__capabilities section">
        <div className="section-container">
          <header className="section-header">
            <span>Solutions for Any Construction Needs</span>
            <h2>Our Capabilities</h2>
          </header>
          <div className="grid-2">
            {capabilities.map((card, index) => (
              <ImageCard key={index} {...card} theme="light" />
            ))}
          </div>
          <div className="home-page__capabilities__cta">
            <CTA href="/services" label="Explore Our Services" />
          </div>
        </div>
      </section>
      <Divider />
      <section className="home-page__benefits section section--theme-dark">
        <div className="section-container">
          <header className="section-header">
            <span>Quality Screw Piles</span>
            <h2>Benefits of Screw Piling</h2>
          </header>
          <div className="grid-2r">
            <div className="content-sm">
              <p>
                Discover the <span>future</span> of foundation construction with screw piles. With <span>faster</span>{" "}
                installation, greater <span>versatility</span> and minimal <span>environmental</span> impact, they
                outshine traditional foundation methods.
              </p>
              <p>
                Embrace the <span>innovation</span> of screw piles to provide a stable foundation for your next project!
              </p>
              <div className="home-page__benefits__cta">
                <CTA href="/services/screw-piling" label="Learn More" />
              </div>
            </div>
            <div className="grid-4">
              {benefits.map((card, index) => (
                <IconCard key={index} {...card} theme="dark" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="home-page__testimonials section">
        <div className="section-container">
          <header className="section-header">
            <span>What Our Clients Say</span>
            <h2>Testimonials</h2>
          </header>
          <Slider>
            <div className="testimonial">
              <p>
                &quot;Thankyou for the work your staff undertook on the FMG Solomon Spur project. Your product was
                excellent and you installation exceeded my expectation plus your staff had an excellent work and safety
                ethic and would have no hesitation in recommending PileWest.&quot;
              </p>
              <span>Eddy Gaidzionis | Project Manager - UGL</span>
            </div>
            <div className="testimonial">
              <p>
                &quot;PileWest have worked with ATCO Structures and Logistics in a currently successful execution of the
                Wheatstone Project, Jobsite Modular Buildings Contract. At all times have they proved to be helpful in
                design and construction as well as passing on site experiences and contacts as they had already
                established on site.
              </p>
              <p>
                The level of documentation and verification for this particular site is one of the most stringent I have
                faced. PileWest have proven to be more than capable of delivering what was required of them.&quot;
              </p>
              <span>Andrew Rijken | Engineering Manager - ATCO</span>
            </div>
            <div className="testimonial">
              <p>
                &quot;PileWest was the contractor chosen by Decmil for the design and installation of screwpiles for
                Chevron&apos;s Wheatstone 1056 person Fly Camp near Onslow, including central facilities and
                infrastructure buildings.
              </p>
              <p>
                During my time as the overseeing Senior Project Engineer for PileWest I found their quality of work,
                meeting set schedules, and provision of requested documentation to be of the highest standard. Safety
                was always first on their agenda and they always listened to our needs as the client, understanding the
                common goals and demonstrating this through their actions.
              </p>
              <p>
                PileWest&apos;s upper management also showed high levels of interpersonal, leadership and communication
                skills whenever they visited site or during meetings in Perth. I would have no hesitation in engaging
                with PileWest again in future projects due to their professionalism, quality of work and willingness to
                always assist when requested.&quot;
              </p>
              <span>John Reilly | Senior Project Manager - Decmil</span>
            </div>
            <div className="testimonial">
              <p>
                &quot;PileWest provided us with a total solution for a footing and tie down system to allow installation
                of our modular buildings at the Chevron owned Wheatstone LNG project in Onslow, Western Australia. The
                solution included engineering design, supply, install and testing. PileWest carried out their works in a
                professional manner and finished on time meeting all of our expectations.&quot;
              </p>
              <span>Jonathan Wilson | Construction Manager - Ausco Modular</span>
            </div>
            <div className="testimonial">
              <p>
                &quot;PileWest have provided invaluable design and technical support to us over many projects throughout
                many remote sites in WA.
              </p>
              <p>
                I have found their service to exceptionally proficient technically and the follow through on the ground
                in relation to HSE and Quality has exceeded our expectations. Because foundation works is invariably a
                key driver of project delivery on program, we have worked to very tight deadlines and timeframes,
                PileWest has never failed to complete and hand over a stage on time. I have found their site staff to be
                professional and follow up documentation and close out to be more than satisfactory.&quot;
              </p>
              <span>Terry O&apos;Driscoll | Bid Manager - OTOC Australia</span>
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
}
