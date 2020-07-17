import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import "./search.css";
import Axios from 'axios';
import search from '../search.svg';
import { Redirect } from "react-router-dom";
import Bookrow from "./bookrow/bookrow";

class Welcome extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            book_name: "",
            redirect: false,
            searchSuccess: false,
            searchResult: [],
            number:1,
            amount: 0.0
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

    addHandler(index) {
    let num = this.state.number;
    num++;
    this.setState({ number: num });
    console.log("cart total number is: ", this.state.number);
    let amo = this.state.amount;
    amo += this.state.searchResult[index].price;
    console.log("cart total amount is: ", amo);
    this.setState({ number: amo });

}

    renderTableData() {
        return this.state.searchResult.map((bookObj,index) => (
            <tr key={bookObj.ISBN}>
                <td>{index+1}</td>
                <td>{bookObj.ISBN}</td>
                <td>{bookObj.bookname}</td>
                <td>{bookObj.author}</td>
                <td>{bookObj.price}</td>
            <td><Bookrow
                key={index+1} 
                added={() => this.addHandler(index)}
                /></td>
            </tr>
        ));
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
                <div style={{ margin: '2em', width: '70%'}}>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>ISBN</th>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Price</th>
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
