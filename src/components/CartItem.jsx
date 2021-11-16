import './css/CartItem.css';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem(props){
    return (
        <div className="flex-cart-item">
                <div>
                    <img src={props.itemDetail.imgUrl} />
                </div>  
                <div className="cart-item-detail">
                    <div>
                        <p style={{fontStyle:"16px"}}>{props.itemDetail.name}</p>
                    </div>
                    <div className="flex-detail">
                        <h6>₹ {props.itemDetail.price}</h6>
                        <button><DeleteIcon /></button>
                    </div>
                </div>      
        </div>
    );
}

export default CartItem;