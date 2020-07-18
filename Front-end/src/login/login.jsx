import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import { login } from "../../utils/JWTAuth.js";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
            redirect: false,
            errorMessage: "",
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        // const obj = {
        //     role: this.state.role,
        //     email: this.state.email,
        //     password: this.state.password,
        // };
        // let result = await login(obj);
        // if (result === undefined) {
        //     alert("Login error, check your email and password");
        // } else {
        //     this.setState({ redirect: true });
        //     var arr = result.split(",");
        //     var arr1 = JSON.parse(arr);
        //     this.setState({ role: arr1.role });
        //     this.setState({ email: arr1.email });
        // }
       
    }

    render() {
        let redirect = this.state.redirect;
        let email = this.state.email;
        console.log( email);
        if (redirect) {
            // return <Redirect to="/home" />;
        } 
        return (
            <div className="img">
                <br /> <br />
                <div className="col-md-6">
                    <br /> <br />
                    <Form onSubmit={this.onSubmit}>
                        
                        <h3>Login</h3>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </Form.Group>
                        <p className="text-center">
                                Don't have an account? <a href="/register">Signup</a>
                            <span style={{marginLeft: '2em'}}>|</span>
                            <span style={{ marginLeft: '2em' }}></span>
                                Forgot <a href="/">Password</a>
                        </p>
                        <Button variant="primary" size="lg" block type="submit">
                            Login
        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Login;
