import React from "react";
import * as exploreStyle from "../css/explore.module.css";

export default function Explore() {
    return (
        <section className={exploreStyle.explore}>
            <section className={exploreStyle.container}>
                <div className={exploreStyle.card}>
                    <h1>Activities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={exploreStyle.btn} href={"/activities"}>Learn More</a>
                </div>
                <div className={exploreStyle.card}>
                    <h1>Logistics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={exploreStyle.btn} href={"/logistics"}>Learn More</a>
                </div>
                <div className={exploreStyle.card}>
                    <h1>Promotion</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={exploreStyle.btn} href={"/promotion"}>Learn More</a>
                </div>
                <div className={exploreStyle.card}>
                    <h1>aaa</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={exploreStyle.btn}>Learn More</a>
                </div>
            </section>
        </section>
    );
}