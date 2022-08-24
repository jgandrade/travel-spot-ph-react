import React from "react";
import Card from "./Card";
import data from "../assets/data";

function MainContent() {

    let travelCards = data.map(item => {
        return <Card
            key={item.id}
            {...item}
        />
    });

    return (
            <main id="main">
                <h1>Places</h1>
                {travelCards}
            </main>
    );
}

export default MainContent;