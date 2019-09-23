import React from "react";

const images = [
    {
        id: "0",
        image: "/assets/done.jpg",
        alt: "Placeholder."
    },
    {
        id: "1",
        image: "/assets/kim-cant-stop-crying.jpg",
        alt: "Placeholder."
    },
    {
        id: "2",
        image: "/assets/kim-kardashian-crying-on-phone.jpg",
        alt: "Placeholder."
    },
    {
        id: "3",
        image: "/assets/kourtney.jpg",
        alt: "Placeholder."
    },
    {
        id: "4",
        image: "/assets/kris-crying-header.jpg",
        alt: "Placeholder."
    },
    {
        id: "5",
        image: "/assets/kris-jenner-cries-about-bruce.jpg",
        alt: "Placeholder."
    },
    {
        id: "6",
        image: "/assets/kris-jenner.jpg",
        alt: "Placeholder."
    },
    {
        id: "7",
        image: "/assets/tissue.jpg",
        alt: "Placeholder."
    },
    {
        id: "8",
        image: "/assets/joanne.jpg",
        alt: "Placeholder."
    }
]

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} id={props.id} alt={props.alt} />
        </div>
    )
}

export default Card;