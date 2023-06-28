import React from "react";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import DaysUntil from "../components/daysUntil";
import Explore from "../components/explore";
import Footer from "../components/footer";
import "../css/global.css";
import * as indexStyles from "@stylesheets/index.module.css";

const Index = () => {
  return (
    <div className={indexStyles.contentContainer}>
      <div className={indexStyles.contentWrapper}>
        <header>
          <div className={indexStyles.headerContent}>
            <div>
              <h1>Expedition Fairbanks</h1>
              <p>North to the Future</p>
            </div>
          </div>
          <StaticImage className={indexStyles.headerBackground} src={"../../static/images/lights_1080.webp"} alt={"Northern Lights"} placeholder={"blurred"} />
        </header>
        <section className={indexStyles.intro}>
          <div className={indexStyles.introContentWrapper}>
            <div className={indexStyles.introContent}>
              <h2>Section G15's Conclave</h2>
              <p>August 11<sup>th</sup> - 13<sup>th</sup>, 2023</p>
            </div>
          </div>
          <div className={indexStyles.introLogoWrapper}>
            <StaticImage className={indexStyles.introLogo} src={"../../static/images/wask_512.png"} alt={"Section G15 Logo"} placeholder={"blurred"} />
          </div>
        </section>
        <section className={indexStyles.intro}>
          <div className={indexStyles.introLogoWrapper}>
            <div className={indexStyles.introContent}>
              <h2>Hosted at Lost Lake Scout Camp</h2>
              <p>Fairbanks, Alaska</p>
            </div>
          </div>
          <div className={indexStyles.introLogoWrapper}>
            <StaticImage className={indexStyles.introLogo} src={"../../static/images/logoYellow_512.png"} alt={"Expedition Fairbanks Logo"} placeholder={"blurred"} />
          </div>
        </section>
        <DaysUntil />
        <Explore />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
export const Head = () => (
  <SEO />
);