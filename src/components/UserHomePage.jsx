import CompanyProducts from "./CompanyProducts";
import Header from "./Header";
import Cart from "./Cart";
import { useState} from "react";
import './css/UserHomePage.css';

function UserHomePage(props){
    const [inCart, setInCart] = useState(false); 

    function handleCartClick(){
        setInCart(true);
    }

    function handleLogoClick() {
        setInCart(false);
    }
    return (
        <div className="main-user-div">
            <Header cartClick={handleCartClick} logoClick={handleLogoClick} />
            {inCart? <div className="main-cart-div"><Cart userID={props.userInfo._id}/></div> : <div className="product"><CompanyProducts userID={props.userInfo._id}/></div>}
        </div>
    );
}

export default UserHomePage;