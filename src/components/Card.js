import React from "react";

const cardStyle = {
    border: "2px solid #db8bd2",
    cursor: "pointer",
    margin: "10px 0px 10px 85px",
    width: "184px",
}

function Card(props) {
    return (
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src="./assets/images/done.jpg" /*{props.image}*/ id={props.id} alt={props.alt} />
        </div>
    )
}

export default Card;