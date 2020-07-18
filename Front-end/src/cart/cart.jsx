import React from "react";
import { useSelector } from 'react-redux';


const Cart = (props) => {
    const counter = useSelector(state => state.totalNum);
        return (
            <div>
                <p>this is cart{counter}</p>
            </div>
        );
}
export default Cart;
