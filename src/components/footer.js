import React from "react";
import * as footerStyle from "../css/footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyle.wrapper}>
            <div className={footerStyle.container}>
                <div className={footerStyle.content}>
                    <p>Expedition Fairbanks | alaskaclave.com</p>
                </div>
            </div>
        </footer>
    );
}