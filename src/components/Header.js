import React from "react";

const headerStyle = {
    textAlign: "center",
    backgroundImage: `url(require("/assets/images/light-grey-terrazo.png"))`
};

function Header() {
    return (
        <header>
            <div className="jumbotron" style={headerStyle}>
                <h1>Which Kardashian Crying Are You?</h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
                <div className="pr-2">Score: <span className="mr-2">0</span></div>
            </div>
        </header>
    );
}

export default Header;