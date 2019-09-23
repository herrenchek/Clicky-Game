import React from "react";

const cardStyle = {
    border: "2px solid #db8bd2",
    cursor: "pointer",
    margin: "10px 0px 10px 85px",
    width: "184px",
};

const images = [
    {
        id: "0",
        image: "assets/images/done.jpg",
        alt: "Placeholder."
    },
    {
        id: "1",
        image: "assets/images/kim-cant-stop-crying.jpg",
        alt: "Placeholder."
    },
    {
        id: "2",
        image: "assets/images/kim-kardashian-crying-on-phone.jpg",
        alt: "Placeholder."
    },
    {
        id: "3",
        image: "assets/images/kourtney.jpg",
        alt: "Placeholder."
    },
    {
        id: "4",
        image: "assets/images/kris-crying-header.jpg",
        alt: "Placeholder."
    },
    {
        id: "5",
        image: "assets/images/kris-jenner-cries-about-bruce.jpg",
        alt: "Placeholder."
    },
    {
        id: "6",
        image: "assets/images/kris-jenner.jpg",
        alt: "Placeholder."
    },
    {
        id: "7",
        image: "assets/images/tissue.jpg",
        alt: "Placeholder."
    },
    {
        id: "8",
        image: "assets/images/joanne.jpg",
        alt: "Placeholder."
    }
]

function Card(props) {
    return (
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src={props.image} id={props.id} alt={props.alt} />
        </div>
    )
}

export default Card;