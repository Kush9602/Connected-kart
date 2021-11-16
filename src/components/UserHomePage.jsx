import CompanyProducts from "./CompanyProducts";
import Header from "./Header";
import Cart from "./Cart";
import { useState } from "react";
import './css/UserHomePage.css';

function UserHomePage(props){
    const [inCart, setInCart] = useState(false); 

    function handleCartClick(){
        setInCart(true);
    }

    function handleLogoClick(){
        setInCart(false);
    }

    return (
        <div className="main-user-div">
            <Header cartClick={handleCartClick} logoClick={handleLogoClick}/>
            {/* List of object should be passed in Cart that contains the added productu by individual users */}
            {inCart? <div className="main-cart-div"><Cart cartItems={props.userData.cart}/></div> : <div className="product"><CompanyProducts /></div>}
        </div>
    );
}

export default UserHomePage;