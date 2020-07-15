import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import "./search.css";
import Axios from 'axios';
import search from '../search.svg';
import { Redirect } from "react-router-dom";

class Welcome extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            book_name: "",
            redirect: false,
            searchSuccess: false,
            searchResult: []
        };
    }
    bookNumber = 0;

    handleAdd = async e => {
        await this.setState({
            book_name: e.target.value
        })
    }
    handleSubmit = async e => {
        this.setState({ redirect: true });
        e.preventDefault();
        let formData = new FormData();
        formData.append("book_name", this.state.book_name);
        const url = "http://localhost:8080/react-backend/back.php?bookname=" + this.state.book_name;
        Axios.post(url, formData)
            .then(res => {
                console.log(res.data);
                if (res.data.length > 0) {
                    this.setState({ searchSuccess: true });
                    this.setState({ searchResult: res.data });
                }
            })
            .catch(err => console.log(err));
        
    }

    renderTableData() {
        if (!this.state.searchResult) {
            return;
        }
        return this.state.searchResult.map((row, index) => {
            console.log("in! ", this.state.searchResult);
            const {
                ISBN,
                bookname,
                author
            } = row;
            return (
                <tr key={this.state.book_name}>
                    <td>{ISBN}</td>
                    <td>{bookname}</td>
                    <td>{author}</td>
                    <td>
                        <button
                            // onClick={() => this.register(eventId)}
                            // className="btn btn-primary"
                        >
                            Add to Cart
            </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        if(this.state.addbook){
            this.bookNumber++;
            console.log(this.bookNumber);
            return <Redirect to="/cart" />

        }
        return (
            <div className="App-inline" style={{ margin: '1em'}}>
                <input onChange={this.handleAdd} type="text" id="text" placeholder="enter some text" />
                <button onClick={this.handleSubmit} id="submit" ><img src={search} alt="logo" />search</button>
            <div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Book Name</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderTableData()}</tbody>
                    </table>
            </div>
            </div>
        );
    }
}
export default Welcome;
