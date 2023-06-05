import React from "react";
import Footer from "../components/footer";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import * as infoPageStyles from "../css/infoPage.module.css";
import * as activitiesStyles from "../css/activities.module.css";

export default function Activities() {
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
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://www.uaf.edu/museum/"}>Museum of the North<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityTags}>
                            <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                            <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                        </div>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Wide range of Exhibits & Theater</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/museum_of_the_north.webp"} alt={"Museum of the North"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://www.pioneerair.museum/"}>Pioneer Air Museum<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityTags}>
                            <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                            <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                        </div>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Air Museum, Guided Tour</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/pioneer_air_museum.jpg"} alt={"Pioneer Air Museum"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://www.fountainheadmuseum.com/"}>Fountainhead Antique Auto Museum<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityTags}>
                            <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                            <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                        </div>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Auto Museum</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/auto_museum.jpeg"} alt={"Fountainhead Antique Auto Museum Car"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://www.fnsb.gov/462/Pioneer-Park"}>Pioneer Park<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Historical Theme Park, Free Roam</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/pioneer_park.jpg"} alt={"Pioneer Park"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://pioneersofalaskafairbanks.org/pioneer-museum"}>Pioneer Museum<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityTags}>
                            <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                            <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                        </div>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Pioneer Museum with Live Show</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/pioneer_museum.webp"} alt={"Pioneer Museum"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://www.morristhompsoncenter.org/"}>Morris Thompson Cultural Center<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityTags}>
                            <p className={activitiesStyles.activityTagGuidedTour}>Guided Tour</p>
                            <p className={activitiesStyles.activityTagMuseum}>Museum</p>
                        </div>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Museum with focus on Native History</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/morris_thompson_cultural_center.webp"} alt={"Morris Thompson Cultural Center"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://www.uaf.edu/lars/"}>Large Animal Research Station<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Research Station for Native Species</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/large_animal_research_station.jpg"} alt={"Large Animal Research Station"} placeholder={"blurred"} />
                        </div>
                    </div>
                    <div className={activitiesStyles.activity}>
                        <h2><a target={"__blank"} href={"https://aksongbird.org/"}>Alaska Songbird Institute<span>🔗</span></a></h2>
                        <div className={activitiesStyles.activityContent}>
                            {/*<p>Research Center, Guided Activity</p>*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut beatae facere ipsum non officia optio rem? Autem culpa delectus deserunt esse laudantium magni quis quo, soluta tempore ullam voluptatem.</p>
                            <StaticImage className={activitiesStyles.activityImage} src={"../../static/images/songbird_institute.jpg"} alt={"Alaska Songbird Institute"} placeholder={"blurred"} />
                        </div>
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
        <Footer />
    </div>
}

export const Head = () => (
    <SEO title={"Activities"} />
);