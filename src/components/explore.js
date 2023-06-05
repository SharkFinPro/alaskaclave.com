import React from "react";
import * as exploreStyle from "../css/explore.module.css";

export default function Explore() {
    return (
        <section className={exploreStyle.explore}>
            <section className={exploreStyle.container}>
                <div className={exploreStyle.card}>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={exploreStyle.btn} href={"/about"}>Learn More</a>
                </div>
                <div className={exploreStyle.card}>
                    <h1>Activities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={exploreStyle.btn} href={"/activities"}>Learn More</a>
                </div>
            </section>
        </section>
    );
}