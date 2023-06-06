import React from "react";
import Footer from "../components/footer";
import SEO from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import * as infoPageStyles from "../css/infoPage.module.css";
import * as activitiesStyles from "../css/activities.module.css";
import useContentfulActivities from "../hooks/useContentfulActivities";

const activityTags = {
    "Guided Tour": activitiesStyles.activityTagGuidedTour,
    "Museum": activitiesStyles.activityTagMuseum
};

function displayActivitySet(title, activities) {
    return <>
        <h1 className={activitiesStyles.activitySetTitle}>{title}</h1>
        <div className={activitiesStyles.activitySet}>
            {activities.map((activity) => (
                <div className={activitiesStyles.activity} key={activity.id}>
                    {
                        activity.url ? <h2><a target={"__blank"} href={activity.url}>{activity.name} <span>🔗</span></a></h2>
                            : <h2>{activity.name}</h2>
                    }
                    <div className={activitiesStyles.activityTags}>
                        {activity.tags?.map((tag) => <p className={activityTags[tag]}>{tag}</p>)}
                    </div>
                    <div className={activitiesStyles.activityContent}>
                        <p>{activity.description?.description}</p>
                        <GatsbyImage className={activitiesStyles.activityImage} image={activity.image?.gatsbyImageData} alt={activity.name} placeholder={"blurred"} />
                    </div>
                </div>
            ))}
        </div>
    </>
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

    return <div className={infoPageStyles.wrapper}>
        <div className={infoPageStyles.header}>
            <div className={infoPageStyles.container}>
                <div className={infoPageStyles.headerContent}>
                    <h1>Activities</h1>
                    <p>Customize your experience</p>
                </div>
            </div>
        </div>
        <div className={infoPageStyles.main}>
            <div className={infoPageStyles.container}>
                {displayActivitySet("In-Camp Festivities", inCampActivities)}
                {displayActivitySet("Fairbanks Excursions", fairbanksActivities)}
            </div>
        </div>
        <Footer />
    </div>
}

export const Head = () => (
    <SEO title={"Activities"} />
);