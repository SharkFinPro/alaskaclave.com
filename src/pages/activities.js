import React from "react";
import SEO from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import useContentfulActivities from "../hooks/useContentfulActivities";
import InfoPage from "../components/infoPage";
import * as activitiesStyles from "../css/activities.module.css";

const activityTagColors = {
  "Guided Tour": "#ffbc1f",
  "Museum": "#3ec228",
  "Interactive Activity": "#00bfff",
  "Staff Pick": "#b56af6"
};

function displayActivitySet(title, activities) {
  return (
    <div key={title}>
      <h3 className={activitiesStyles.activitySetTitle}>{title}</h3>
      <div className={activitiesStyles.activitySet}>
        {activities.map((activity) => (
          <div className={activitiesStyles.activity} id={activity.name} key={activity.id}>
            {
            activity.url ? <h5 className={activitiesStyles.activityName}>
                <a target={"__blank"} href={activity.url} rel={"external"}>{activity.name} <span>🔗</span></a>
              </h5>
              : <h5 className={activitiesStyles.activityName}>{activity.name}</h5>
            }
            <div className={activitiesStyles.activityTags}>
              {activity.tags?.map((tag) => (
                <p style={{ backgroundColor: activityTagColors[tag] }} key={tag}>{tag}</p>
              ))}
            </div>
            <div className={activitiesStyles.activityContent}>
              <p>{activity.description?.description}</p>
              <GatsbyImage className={activitiesStyles.activityImage} image={activity.image?.gatsbyImageData} alt={activity.name} placeholder={"blurred"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Activities() {
  const activities = useContentfulActivities();
  const inCampActivities = [];
  const fairbanksActivities = [];

  for (const { node } of activities) {
    if (node.inCamp) {
      inCampActivities.push(node);
    } else {
      fairbanksActivities.push(node);
    }
  }

  return (
    <InfoPage title={"Activities"} description={"Customize your experience"}>
      {displayActivitySet("In-Camp Festivities", inCampActivities)}
      {displayActivitySet("Fairbanks Excursions", fairbanksActivities)}
    </InfoPage>
  );
}

export const Head = () => (
  <SEO title={"Activities"} />
);