import React from "react";
import { motion, useTransform } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import * as headerStyle from "../css/header.module.css";

const Header = ({ scrollData }) => {
    const opacity = useTransform(scrollData, [0, 1], ["100%", "0%"]);
    const zoom = useTransform(scrollData, [0, 1], ["100%", "115%"]);

    return (
        <motion.div className={headerStyle.wrapper} style={{ opacity, zoom}}>
            <motion.div className={headerStyle.opacityDiv}>
                <StaticImage
                    className={headerStyle.background}
                    src="../../static/images/lights.webp"
                    alt="Northern Lights"
                    placeholder="blurred"
                />
                <h1 className={headerStyle.text}>Expedition Fairbanks</h1>
            </motion.div>
        </motion.div>
    );
};

export default Header;