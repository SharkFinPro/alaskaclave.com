import React from "react";
import "../css/explore.css";

export default function Explore() {
    return (
        <section className={"explore"}>
            <section className={"container"}>
                <div className={"card"}>
                    <h1>Activities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={"btn"} href={"/activities"}>Learn More</a>
                </div>
                <div className={"card"}>
                    <h1>Logistics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={"btn"} href={"/logistics"}>Learn More</a>
                </div>
                <div className={"card"}>
                    <h1>aaa</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={"btn"}>Learn More</a>
                </div>
                <div className={"card"}>
                    <h1>aaa</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut, delectus deserunt error ex exercitationem explicabo nesciunt reprehenderit suscipit. Corporis culpa doloremque dolorum ducimus eos esse optio perspiciatis ut.</p>
                    <a className={"btn"}>Learn More</a>
                </div>
            </section>
        </section>
    );
}