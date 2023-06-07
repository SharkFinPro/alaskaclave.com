import React from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import * as aboutStyles from "../css/about.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Activities() {
    return (
        <InfoPage title={"About"} description={"The weekend"}>
            <h1>What is Conclave?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum incidunt molestiae nam odio, optio pariatur quaerat. Alias beatae culpa eos ipsum quod quos vero. Debitis ea magnam magni rem.</p>
            <h1 className={aboutStyles.structureTitle}>Structure</h1>
            <div className={aboutStyles.structure}>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2>Arrival</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/lostlake.jpg"} alt={"Lost Lake"} />
                </div>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2>Opening Show</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/logoRose.png"} alt={"Logo!"} />
                </div>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2><a target={"__blank"} href={"/activities"}>All Day Activity <span>🔗</span></a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/logoRose.png"} alt={"Logo!"} />
                </div>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2>Business Meeting / Auction</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/logoRose.png"} alt={"Logo!"} />
                </div>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2>Beach Party</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/logoRose.png"} alt={"Logo!"} />
                </div>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2>Closing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/logoRose.png"} alt={"Logo!"} />
                </div>
                <div>
                    <div className={aboutStyles.structureEntryContent}>
                        <h2>Departure</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                    </div>
                    <StaticImage className={aboutStyles.structureEntryImage} src={"../../static/images/logoRose.png"} alt={"Logo!"} />
                </div>
            </div>
        </InfoPage>
    );
}

export const Head = () => (
    <SEO title={"About"} />
);