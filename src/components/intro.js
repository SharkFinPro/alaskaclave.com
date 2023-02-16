import React from "react";
import * as introStyle from "../css/intro.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { motion, useTransform } from "framer-motion";

const Intro = ({ scrollData }) => {
    const waskOpacity = useTransform(scrollData, [0.3, 1.25, 1.5, 2.25], ["0%", "100%", "100%", "0%"]);
    const logoOpacity = useTransform(scrollData, [1.5, 2.25, 2.5, 3.25], ["0%", "100%", "100%", "0%"]);
    const sectionTextOpacity = useTransform(scrollData, [0.5, 1.5, 2], ["0", "100%", "0%"]);
    const yearTextOpacity = useTransform(scrollData, [1.5, 2, 3], ["0%", "100%", "0%"]);

    return (
        <div className={introStyle.wrapper}>
            <div className={introStyle.textColumn}>
                <motion.div className={introStyle.section} style={{ opacity: sectionTextOpacity }}>
                    <h1 className={introStyle.header}>Section G15</h1>
                </motion.div>
                <motion.div className={introStyle.year} style={{ opacity: yearTextOpacity }}>
                    <h1 className={introStyle.header}>2023 CONCLAVE</h1>
                </motion.div>
            </div>
            <div className={introStyle.imageColumn}>
                <motion.div className={introStyle.imageOpacity} style={{ opacity: waskOpacity }}>
                    <StaticImage
                        className={introStyle.logoImage}
                        src="../../static/images/wask.png"
                        alt="Conclave Logo"
                        placeholder="blurred"
                    />
                </motion.div>
                <motion.div className={introStyle.imageOpacity} style={{ opacity: logoOpacity }}>
                    <StaticImage
                        className={introStyle.logoImage}
                        src="../../static/images/logoYellow.png"
                        alt="Conclave Logo"
                        placeholder="blurred"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;