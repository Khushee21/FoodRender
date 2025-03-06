import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../utils/cartSlice";

const Cart =() => {

    const cartItem = useSelector((store)=> store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart =()=>{
        dispatch(clearcart());
    }

    return(
        <div className="cart-container">
            <div className="cart">
            Cart
            </div>
            <div className="cart-items">
                <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
                {cartItem.length===0 && <h1>Cart is Empty . Please add some items to cart</h1> } 
                <ItemList items = {cartItem}/>
            </div>
        </div>
    )
};

export default Cart;