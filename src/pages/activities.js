import React from "react";
import Footer from "../components/footer";
import * as activitiesStyles from "../css/activities.module.css";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

export default function Activities() {
    return <div className={activitiesStyles.wrapper}>
        <div className={activitiesStyles.header}>
            <div className={activitiesStyles.container}>
                <div className={activitiesStyles.headerContent}>
                    <h1>Activities</h1>
                    <p>Customize your experience</p>
                </div>
            </div>
        </div>
        <div className={activitiesStyles.main}>
            <div className={activitiesStyles.container}>
                <div>
                    <h1 className={activitiesStyles.activitySetTitle}>In-Camp Festivities</h1>
                    <div className={activitiesStyles.activitySet}>
                        <div className={activitiesStyles.activity}>
                            <h2>Hikes</h2>
                            <p>2-3 Miles, Connecting Trails</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Shooting Sports</h2>
                            <p>Archery, Rifle, Shotgun</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Waterfront</h2>
                            <p>Fishing</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>COPE & Zipline</h2>
                            <p>COPE Course with a Zipline!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={activitiesStyles.activitySetTitle}>Fairbanks Excursions</h1>
                    <div className={activitiesStyles.activitySet}>
                        <div className={activitiesStyles.activity}>
                            <h2>Museum of the North</h2>
                            <div className={activitiesStyles.activityTags}>
                                <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                                <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                            </div>
                            <p>Wide range of Exhibits & Theater</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Pioneer Air Museum</h2>
                            <div className={activitiesStyles.activityTags}>
                                <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                                <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                            </div>
                            <p>Air Museum, Guided Tour</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Fountainhead Antique Auto Museum</h2>
                            <div className={activitiesStyles.activityTags}>
                                <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                                <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                            </div>
                            <div className={activitiesStyles.activityContent}>
                                {/*<p>Auto Museum</p>*/}
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                                <StaticImage src={"../../static/images/auto_museum.jpeg"} alt={"Fountainhead Antique Auto Museum Car"} placeholder={"blurred"} />
                            </div>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Pioneer Park</h2>
                            <p>Historical Theme Park, Free Roam</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Pioneer Museum</h2>
                            <div className={activitiesStyles.activityTags}>
                                <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                                <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                            </div>
                            <p>Pioneer Museum with Live Show</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Morris Thompson Cultural Center</h2>
                            <div className={activitiesStyles.activityTags}>
                                <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                                <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                            </div>
                            <p>Museum with focus on Native History</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Large Animal Research Station</h2>
                            <p>Research Station for Native Species</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Alaska Songbird Institute</h2>
                            <p>Research Center, Guided Activity</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Ice Museum</h2>
                            <div className={activitiesStyles.activityTags}>
                                <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                            </div>
                            <p>Work in Progress</p>
                        </div>
                        <div className={activitiesStyles.activity}>
                            <h2>Fairbanks Curling Club</h2>
                            <p>Work in Progress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export const Head = () => (
    <SEO title={"Activities"} />
);