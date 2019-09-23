import React from "react";

const footerStyle = {
    textAlign: "center",
    paddingTop: "10px",
};

function Footer() {
    return (
        <div className="footer" style={footerStyle}>
            <p>Made with &#9829; by <a href="https://github.com/herrenchek">herrenchek</a></p>
        </div>
    );
}

export default Footer;