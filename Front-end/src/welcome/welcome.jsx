import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./welcome.css";

class Welcome extends Component {
    render() {
        return (
            <div className="image">
                <div className="container">
                    <div className="row">
                        <br /> <br />
                        <div>
                            <br /> <br />
                            <br /> <br />
                            <br /> <br />
                            <h1>Welcome </h1>
                            <h3> to our book store </h3>
                            <br />
                            <Button href="/signup" size="lg">
                                SignUp
              </Button>{" "}
                            <Button href="/login" variant="outline-primary" size="lg">
                                Login
              </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Welcome;
