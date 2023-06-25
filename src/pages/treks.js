import React from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";

export default function Treks() {
  return (
    <InfoPage title={"Treks"} description={"Carefully selected activities"}>

    </InfoPage>
  );
}

export const Head = () => (
  <SEO title={"Treks"} />
);