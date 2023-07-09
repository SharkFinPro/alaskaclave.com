import React, {useEffect, useState} from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import { StaticImage } from "gatsby-plugin-image";
import * as trekStyles from "../css/treks.module.css";
import useTreks from "../hooks/useTreks";

function Trek({ name, price, activities }) {
  return (
    <div className={trekStyles.trek}>
      <h5 className={trekStyles.trekName}>{name}<span className={trekStyles.trekPrice}>${price}</span></h5>
      <div className={trekStyles.trekContent}>
        <ul className={trekStyles.trekActivities}>
          {activities.map((activity) => (
            <li>
              <a
                href={`/activities#${activity}`}
                target={"__blank"}>
                {activity}
                <span>🔗</span>
              </a>
            </li>
          ))}
        </ul>
        <StaticImage className={trekStyles.trekImage} src={"../../static/images/logoGray_512.png"} alt={"logo"} placeholder={"blurred"} />
      </div>
    </div>
  );
}

export default function Treks() {
  const [site, setSite] = useState("camp");
  const [treks, setTreks] = useState([]);

  const trekList = useTreks();

  useEffect(() => {
    if (site === "camp") {
      setTreks(trekList.filter(({ node }) => node.inCamp));
    } else if (site === "fairbanks") {
      setTreks(trekList.filter(({ node }) => !node.inCamp));
    }
  }, [site])

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
        {treks.map(({ node }) => (
          <Trek
            name={node.name}
            price={node.price}
            activities={node.activities}
            key={node.name}
          />
        ))}
      </div>
    </InfoPage>
  );
}

export const Head = () => (
  <SEO title={"Treks"} />
);