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

export default function Activities() {
    const activities = useContentfulActivities();

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
                <h1 className={activitiesStyles.activitySetTitle}>In-Camp Festivities</h1>
                <div className={activitiesStyles.activitySet}>
                    <div className={activitiesStyles.activity}>
                        <h2>Hikes</h2>
                        <div className={activitiesStyles.activityContent}>
                            <p>2-3 Miles, Connecting Trails</p>
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2>Shooting Sports</h2>
                        <div className={activitiesStyles.activityContent}>
                            <p>Archery, Rifle, Shotgun</p>
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2>Waterfront</h2>
                        <div className={activitiesStyles.activityContent}>
                            <p>Fishing</p>
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2>COPE & Zipline</h2>
                        <div className={activitiesStyles.activityContent}>
                            <p>COPE Course with a Zipline!</p>
                        </div>
                    </div>
                </div>
                <h1 className={activitiesStyles.activitySetTitle}>Fairbanks Excursions</h1>
                <div className={activitiesStyles.activitySet}>
                    {activities.map(({ node }) => (
                        <div className={activitiesStyles.activity} key={node.id}>
                            <h2><a target={"__blank"} href={node.url}>{node.name} <span>🔗</span></a></h2>
                            <div className={activitiesStyles.activityTags}>
                                {node.tags?.map((tag) => (
                                    <p className={activityTags[tag]}>{tag}</p>
                                ))}
                            </div>
                            <div className={activitiesStyles.activityContent}>
                                <p>{node.description?.description}</p>
                                <GatsbyImage className={activitiesStyles.activityImage} image={node.image.gatsbyImageData} alt={node.name} placeholder={"blurred"} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export const Head = () => (
    <SEO title={"Activities"} />
);