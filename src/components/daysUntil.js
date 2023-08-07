import React from "react";
import * as daysUntilStyles from "../css/daysUntil.module.css";

export default function DaysUntil() {
  const todaysDate = new Date();
  const conclavesDate = new Date("08/11/2023");
  const timeDifference = conclavesDate.getTime() - todaysDate.getTime();
  const daysBetween = Math.max(Math.ceil(timeDifference / (1000 * 3600 * 24)), 0);

  return (
    <section className={daysUntilStyles.container}>
      <div className={daysUntilStyles.daysUntil}>
        <div className={daysUntilStyles.daysCounter}>
          <p>{~~(daysBetween / 10)}</p>
          <p>{~~(daysBetween % 10)}</p>
        </div>
        <p>Days until Conclave!</p>
        <a href={"https://registration.oa-bsa.org/Event/1198"} target={"__blank"} rel={"external"} className={daysUntilStyles.registerButton}>Register!</a>
      </div>
    </section>
  );
}