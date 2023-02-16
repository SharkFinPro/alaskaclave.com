import React from "react";
import * as lostLakeStyle from "../css/lostLake.module.css";

const LostLake = () => {
    return (
        <div className={lostLakeStyle.wrapper}>
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