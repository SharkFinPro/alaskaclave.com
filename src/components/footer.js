import React from "react";
import * as footerStyle from "../css/footer.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className={footerStyle.wrapper}>
      <div className={footerStyle.container}>
        <div className={footerStyle.content}>
          <h5>Expedition Fairbanks | alaskaclave.com</h5>
          <p>
            <a href={"mailto:info@alaskaclave.com"}>info@alaskaclave.com</a>
          </p>
          <p>
            <a href={"https://sectiong15.oa-bsa.org/"} target={"__blank"} rel={"external"}>sectionG15.oa-bsa.org</a>
          </p>
          <div className={footerStyle.icons}>
            <a href={"https://www.facebook.com/sectiong15"} title={"Section G15 Facebook"} target={"__blank"} rel={"external"}>
              <StaticImage src={"../../static/images/facebookIcon.svg"} alt={"Facebook Icon"} />
            </a>
            <a href={"https://www.instagram.com/sectiong15/"} title={"Section G15 Instagram"} target={"__blank"} rel={"external"}>
              <StaticImage src={"../../static/images/instagramIcon.svg"} alt={"Instagram Icon"} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}