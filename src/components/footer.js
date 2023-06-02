import React from "react";
import * as footerStyle from "../css/footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyle.wrapper}>
            <div className={footerStyle.container}>
                <div className={footerStyle.content}>
                    <h1>Expedition Fairbanks | alaskaclave.com</h1>
                    <p><a href={"mailto:info@alaskaclave.com"}>info@alaskaclave.com</a></p>
                </div>
            </div>
        </footer>
    );
}