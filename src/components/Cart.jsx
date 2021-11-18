// import './css/Cart.css';
import CartItem from "./CartItem";
import {useState, useEffect} from "react";
import axios from "axios";

function Cart(props){
    const [cart, setCart] = useState([]);
    const id=props.userID;
    useEffect(() => {    
        axios.post("http://localhost:9002/getUserCart" , id)
        .then(res => {setCart(res.data)});
    }, []);

    return (
        <div className="cart">
            {cart.map((item) => {
                console.log(item);
                return (
                    <CartItem key={item._id} itemDetail={item} userId ={props.userID}/>
                );
            })}
        </div>
    );
}

export default Cart;