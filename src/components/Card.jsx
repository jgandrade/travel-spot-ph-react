import React from "react";

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={props.img} />
            <div className="travel-name">
                <h3>{props.name}</h3>
                <h3>{props.location}</h3>
            </div>
            <p>{props.description}</p>
            <div className="perks">
                <p>PERFECT FOR YOU, IF YOU LIKE</p>
                <div>
                    {props.perks.map(perk => <p>{perk}</p>)}
                </div>
            </div>
            <a href={props.map} target="_blank"><button>Check Location</button></a>
        </div>
    );
}

export default Card;