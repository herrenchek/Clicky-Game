import React from "react";
import Card from "./Card/Card";

function Main() {
    return (
        <main role="main" className="py-5">
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