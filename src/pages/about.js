import React from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";

export default function Activities() {
    return (
        <InfoPage title={"About"} description={"The weekend"}>
            <h1>What is Conclave?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum incidunt molestiae nam odio, optio pariatur quaerat. Alias beatae culpa eos ipsum quod quos vero. Debitis ea magnam magni rem.</p>
            <div>
                <h1>Structure</h1>
                <div>
                    <h2>Arrival</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
                <div>
                    <h2>Opening Show</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
                <div>
                    <h2>All Day Activity</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
                <div>
                    <h2>Business Meeting / Auction</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
                <div>
                    <h2>Beach Party</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
                <div>
                    <h2>Closing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
                <div>
                    <h2>Departure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio itaque nostrum suscipit ut. Assumenda corporis eos, excepturi harum illum in ipsum omnis optio quas sapiente soluta tempora ut vitae.</p>
                </div>
            </div>
        </InfoPage>
    );
}

export const Head = () => (
    <SEO title={"About"} />
);