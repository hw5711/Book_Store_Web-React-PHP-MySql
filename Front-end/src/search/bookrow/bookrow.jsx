import React from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../redux/action';



const Bookrow = (props) => {
   const dispatch = useDispatch();
   // const counter = useSelector(state => state.totalNum);
   return (
      <div>
      {/* <p>{counter}</p>  */}
    <button clicked={props.added} onClick={() => dispatch(addtocart())}>Add to Cart</button>
      </div>
   );
}


export default Bookrow;