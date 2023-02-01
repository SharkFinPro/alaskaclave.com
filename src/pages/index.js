import React from "react";
import "../css/global.css";
import * as indexStyle from "../css/index.module.css";

const Page = () => {
    return <div className={indexStyle.comingSoon}>
        <h1>Expedition Fairbanks</h1>
        <h2>August 11-13, 2023</h2>
        <h4><a href={"https://sectiong15.oa-bsa.org/"}>sectiong15.oa-bsa.org</a></h4>
    </div>
}

export const Head = () => (
    <>
        <html lang="en" />
        <title>Expedition Fairbanks</title>
        <meta name="description" content="Section G15's 2023 Conclave: Expedition Fairbanks"/>
    </>
)

export default Page;