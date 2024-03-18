import Image from "next/image";

import { Carousel, CarouselItem, Divider, IconCard, Slider } from "@/components";

import { benefitsL } from "@/constants/cards";

import "./styles.scss";

export default function ScrewPiling() {
  return (
    <main className="screw-piling-page">
      <section className="screw-piling-page__hero hero">
        <Carousel>
          <CarouselItem image="/images/backgrounds/screw-piling-001.jpg" heading="Screw Piling" isHero />
        </Carousel>
      </section>
      <Divider />
      <section className="screw-piling-page__about section">
        <div className="section-container">
          <header className="section-header">
            <span>Foundations of the Future</span>
            <h2>Screw Piling</h2>
          </header>
          <div className="grid-2 grid-2--large">
            <div className="content-sm">
              <p>
                At PILEWEST, we take pride in being a leading designer, supplier, and installer of steel piling
                solutions across Australia. With a strong commitment to excellence, innovation, and safety, we are your
                trusted partner for all your screw piling needs.
              </p>
              {/* <h3>Applications</h3>
              <ul>
                <li>Cyclonic anchors for modular or transportable buildings.</li>
                <li>Piling close to sewer lines and easements.</li>
                <li>Concrete tilt up construction.</li>
                <li>Solar panel foundations.</li>
                <li>Remove surcharge loads off retaining walls.</li>
                <li>Tension anchors for temporary structures requiring guy wires.</li>
                <li>Ground anchors for slope stability.</li>
                <li>Communication towers and mono poles.</li>
                <li>Lighting and signage foundations.</li>
                <li>Compression piles for poor sites with reactive clay, peat or uncontrolled fill.</li>
                <li>Boardwalks, decks or jetties in eco sensitive areas or with limited access.</li>
                <li>Bridge abutments, piers and widening.</li>
                <li>Underpinning and footing repair.</li>
                <li>Pipelines above ground and creek or river crossings</li>
                <li>Tension piles for basement uplift loads when below the water table.</li>
                <li>To resist earthquake load in multi storey stair or lift wells.</li>
                <li>Construction crane bases or heavy lifting support.</li>
              </ul> */}
            </div>
            <div>
              <Slider>
                <Image src="/images/services/screw-piling/screw-piling-001.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/screw-piling/screw-piling-004.jpg" alt="" width={1920} height={1080} />
                <Image src="/images/services/screw-piling/screw-piling-016.jpg" alt="" width={1920} height={1080} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="screw-piling-page__benefits section section--theme-dark">
        <div className="section-container">
          <header className="section-header">
            <span>Fast, Efficient, Cost-Effective</span>
            <h2>Benefits of Screw Piling</h2>
          </header>
          <div className="grid-4">
            {benefitsL.map((card, index) => (
              <IconCard key={index} {...card} theme="dark" />
            ))}
          </div>
        </div>
      </section>
      {/* <Divider />
      <section className="screw-piling-page__x section">
        <div className="section-container">
          <header className="section-header">
            <span>jfkdla</span>
            <h2>Our Screw Piling Service</h2>
          </header>
          <div>
            <h3>1. Design Experience</h3>
            <p>
              Our experienced team is dedicated to delivering tailored screw piling solutions that precisely meet the
              unique requirements of your project. From conducting thorough site assessments to designing
              cost-effective, efficient, and environmentally responsible piling systems, we ensure that every aspect of
              your project is meticulously planned and executed.
            </p>
          </div>
          <div>
            <h3>2. High Quality Supply</h3>
            <p>
              We source our materials from reputable suppliers, ensuring that you receive top-quality steel piles and
              related products. Our commitment to quality extends to every aspect of our supply chain, guaranteeing that
              your project benefits from durable, long-lasting materials that stand the test of time.
            </p>
          </div>
          <div>
            <h3>3. Precision Installation</h3>
            <p>
              Our certified installation teams are well-versed in the intricacies of screw piling installation. Equipped
              with state-of-the-art machinery and tools, we ensure that each pile is precisely installed to the required
              depths and tolerances. This level of precision minimizes project downtime and maximizes structural
              integrity.
            </p>
          </div>
          <div>
            <h3>4. Versatile Applications</h3>
            <p>
              Screw piling is a versatile solution that can be applied to a wide range of civil engineering projects,
              including:
            </p>
            <ul>
              <li>Cyclonic anchors for modular or transportable buildings.</li>
              <li>Piling close to sewer lines and easements.</li>
              <li>Concrete tilt up construction.</li>
              <li>Solar panel foundations.</li>
              <li>Remove surcharge loads off retaining walls.</li>
              <li>Tension anchors for temporary structures requiring guy wires.</li>
              <li>Ground anchors for slope stability.</li>
              <li>Communication towers and mono poles.</li>
              <li>Lighting and signage foundations.</li>
              <li>Compression piles for poor sites with reactive clay, peat or uncontrolled fill.</li>
              <li>Boardwalks, decks or jetties in eco sensitive areas or with limited access.</li>
              <li>Bridge abutments, piers and widening.</li>
              <li>Underpinning and footing repair.</li>
              <li>Pipelines above ground and creek or river crossings</li>
              <li>Tension piles for basement uplift loads when below the water table.</li>
              <li>To resist earthquake load in multi storey stair or lift wells.</li>
              <li>Construction crane bases or heavy lifting support.</li>
            </ul>
          </div>
          <div>
            <h3>5. Cost-Effective Solutions</h3>
            <p>
              Our screw piling solutions offer exceptional cost-effectiveness, reducing construction time and expenses.
              By minimizing the need for extensive excavation and concrete work, we help you stay within budget while
              maintaining the highest quality standards.
            </p>
          </div>
          <div>
            <h3>6. Environmental Responsibility</h3>
            <p>
              At PILEWEST, we are committed to sustainable engineering practices. Our screw piling solutions minimize
              soil disturbance and reduce the carbon footprint of your project. We prioritize environmental
              responsibility to create a greener future for our communities.
            </p>
          </div>
          <div>
            <h3>7. Regulatory Compliance</h3>
            <p>
              We understand the importance of complying with local and national regulations. Our team is well-versed in
              the permitting and regulatory processes, ensuring that your project meets all required standards and
              guidelines.
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="screw-piling-page__y section">
        <div className="section-container">
          <header className="section-header">
            <span>hdklas</span>
            <h2>Why Choose Us</h2>
          </header>
          <div className="content-sm">
            <p>
              <strong>Proven Experience:</strong> With years of experience in the industry, we have successfully
              completed numerous projects, demonstrating our expertise and reliability.
            </p>
            <p>
              <strong>Client-Centric Approach:</strong> We prioritize communication, transparency, and collaboration
              with our clients throughout every project phase.
            </p>
            <p>
              <strong>Safety First:</strong> Safety is paramount in our operations. We adhere to the highest safety
              standards to protect our team, your project, and the environment.
            </p>
            <p>
              <strong>Cutting-Edge Technology:</strong> We stay at the forefront of industry innovations, employing the
              latest technology and techniques to deliver superior results.
            </p>
            <p>
              <strong>Custom Solutions:</strong> We understand that every project is unique. Our custom-designed screw
              piling solutions cater to your specific needs and challenges.
            </p>
          </div>
          <p>
            When it comes to steel piling and retaining wall solutions, PILEWEST is the name you can trust. Contact us
            today to discuss your project, request a quote, or learn more about how we can bring your vision to life
            with our expertise in screw piling. We look forward to partnering with you on your next project.
          </p>
        </div>
      </section> */}
    </main>
  );
}
