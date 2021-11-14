import './css/ProductCard.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductCard(props){
    
    function addToCart(){
        
    }

    return (
        <div className="card-body">
            <div className="card-img">
                <img src={props.img} />
            </div>
            <div className="card-feature">
                <div>
                    <p style={{fontStyle:"16px"}}>{props.name}</p>
                </div>
                <div className="feature">
                    <h6>₹ {props.price}</h6>
                    <button onClick={addToCart}><AddShoppingCartIcon/></button>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;