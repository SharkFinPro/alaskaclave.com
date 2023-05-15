import React from "react";
import { Link } from "gatsby";
import * as daysUntilStyles from "../css/daysUntil.module.css";

export default function DaysUntil() {
    const todaysDate = new Date();
    const conclavesDate = new Date("08/11/2023");
    const timeDifference = conclavesDate.getTime() - todaysDate.getTime();
    const daysBetween = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return (
        <section className={daysUntilStyles.daysUntil}>
            <div className={daysUntilStyles.daysCounter}>
                <h1>{~~(daysBetween / 10)}</h1>
                <h1>{~~(daysBetween % 10)}</h1>
            </div>
            <h1>Days until Conclave!</h1>
            <Link to={"https://registration.oa-bsa.org/Event/1198"} target={"_blank"} className={daysUntilStyles.registerButton}>Register!</Link>
        </section>
    );
}