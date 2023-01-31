import React from "react";
import "../css/wrapper.css";
import * as indexStyle from "../css/index.module.css";

const Page = () => {
    return <div className={indexStyle.comingSoon}>
        <h1>Expedition Fairbanks</h1>
        <h2><a href={"https://sectiong15.oa-bsa.org/"}>sectionG15.org</a></h2>
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