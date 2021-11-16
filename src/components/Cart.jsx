// import './css/Cart.css';
import CartItem from "./CartItem";

function Cart(props){
    return (
        <div className="cart">
            {props.cartItems.map((item) => {
                return (
                    <CartItem key={item._id.$oid} itemDetail={item}/>
                );
            })}
        </div>
    );
}

export default Cart;