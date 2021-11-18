import './css/ProductCard.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from "axios";


function ProductCard(props){

    function addToCart(){
        const details = [props.productDetail, props.userID];
        axios.post("http://localhost:9002/addToCart", details)
        .then(res => {});
    }

    return (
        <div className="card-body">
            <div className="card-img">
                <img src={props.productDetail.imgUrl} />
            </div>
            <div className="card-feature">
                <div>
                    <p style={{fontStyle:"16px"}}>{props.productDetail.name}</p>
                </div>
                <div className="feature">
                    <h6>₹ {props.productDetail.price}</h6>
                    <button onClick={addToCart}><AddShoppingCartIcon/></button>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;