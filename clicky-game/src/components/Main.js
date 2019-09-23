import React from "react";
import Card from "./Card";

function Main() {
    return (
        <main role="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    {/* ./row */}
                </div>
                {/* ./container */}
            </div>
        </main>
    );
}

export default Main;