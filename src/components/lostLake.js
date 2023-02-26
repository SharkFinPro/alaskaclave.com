import React from "react";
import * as lostLakeStyle from "../css/lostLake.module.css";
import { StaticImage } from "gatsby-plugin-image";

const LostLake = () => {
    return (
        <div className={lostLakeStyle.wrapper}>
            <StaticImage
                className={lostLakeStyle.image}
                src="../../static/images/lostlake.jpg"
                alt="Lost Lake Scout Camp"
            />
            <div className={lostLakeStyle.opacityOverlay}>
                <div className={lostLakeStyle.content}>
                    <h1>Hosted At</h1>
                    <h2>Lost Lake Scout Camp</h2>
                </div>
            </div>
        </div>
    );
}

export default LostLake;