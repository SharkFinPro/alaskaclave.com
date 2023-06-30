import React, {useState} from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import { StaticImage } from "gatsby-plugin-image";
import * as trekStyles from "../css/treks.module.css";

function Trek() {
  return (
    <div className={trekStyles.trek}>
      <h5 className={trekStyles.trekName}>Alaskan Nature<span className={trekStyles.trekPrice}>$37</span></h5>
      <div className={trekStyles.trekContent}>
        <ul className={trekStyles.trekActivities}>
          <li>
            <a
              href={"/activities#Museum of the North"}
              target={"__blank"}>
              Museum of the North
              <span>🔗</span>
            </a>
          </li>
          <li>Large Animal Research Station</li>
          <li>Creamer's Field Wildlife Refuge</li>
          <li>Alaska Songbird Institute</li>
        </ul>
        <StaticImage className={trekStyles.trekImage} src={"../../static/images/logoGray_512.png"} alt={"logo"} placeholder={"blurred"} />
      </div>
    </div>
  );
}

export default function Treks() {
  const [site, setSite] = useState("camp");
  const [treks, setTreks] = useState([]);

  return (
    <InfoPage title={"Treks"} description={"Carefully selected activities"}>
      <h3>Treks</h3>
      <div className={trekStyles.siteSelection}>
        <button
          className={ site === "camp" ? trekStyles.selected : "" }
          onClick={() => setSite("camp")}>
          In Camp
        </button>
        <button
          className={ site === "fairbanks" ? trekStyles.selected : "" }
          onClick={() => setSite("fairbanks")}>
          In Fairbanks
        </button>
      </div>
      <div className={trekStyles.treks}>
        <Trek />
        <Trek />
        <Trek />
        <Trek />
        <Trek />
      </div>
    </InfoPage>
  );
}

export const Head = () => (
  <SEO title={"Treks"} />
);