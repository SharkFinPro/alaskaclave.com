import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Museo_Slab_500_2.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="museoSlab500"
    />,
    <link
      rel="preload"
      href="/fonts/Museo_Slab_500italic.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="museoSlab500i"
    />,
    <link
      rel="preload"
      href="/fonts/MuseoSans_500.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="museoSans500"
    />,
    <link
      rel="preload"
      href="/fonts/MuseoSans_500_Italic.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="museoSans500i"
    />
  ]);
}