import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "../components/seo";
import Header from "../components/header";
import Intro from "../components/intro";
import LostLake from "../components/lostLake";

import "../css/global.css";
import * as contentFrameStyle from "../css/contentFrame.module.css";

const Index = () => {
    const { scrollYProgress } = useScroll();
    const scrollData = useTransform(scrollYProgress, [0, 1], [0, 5]);

    const y = useTransform(scrollData, [0, 1], ["0%", "-35%"]);

    return (
        <div className={contentFrameStyle.frame}>
            <Header scrollData={scrollData} />
            <motion.div className={contentFrameStyle.content} style={{ translateY: y }}>
                <Intro scrollData={scrollData} />
                <LostLake />
                <div style={{ height: "100%", background: "#030006", color: "#FFFFFF" }}>Hello, World!</div>
            </motion.div>
            {/*<motion.h1 style={{position: "fixed", top: "0", color: "white", background: "blue", height: "100px"}}>{scrollData}</motion.h1>*/}
        </div>
    );
};

export default Index;
export const Head = () => (
    <SEO />
);