import React from "react";

function Card(props) {
    const cardStyle = {
        border: "2px solid #db8bd2",
        cursor: "pointer",
        margin: "10px 0px 10px 85px",
        width: "184px",
        backgroundImage: "url(" + props.src + ")",
    }
    return (
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src={props.image} id={props.id} alt={props.alt} />
        </div>
    )
}

export default Card;