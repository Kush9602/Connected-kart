import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from "react-router-dom";
import './css/Header.css';

function Header(props) {
    const history = useHistory();

    return (
        <div className="header">
            <div>
                <p onClick={props.logoClick}>Connected Kart</p>
            </div>
            <div style={{width:"66%"}}>
                <input className="header-searchbar" type="search" placeholder="Search for products, brand and more"/>
            </div>
            <div style={{display:"flex"}}>
                <button className="header-button" onClick={() => {history.push("/")}}><LogoutIcon /></button>
                <button className="header-button" onClick={props.cartClick}><ShoppingCartIcon />Cart</button>
                <button className="header-button"><PersonIcon /></button>
            </div>
            
           
            
        </div>
    );
}

export default Header;