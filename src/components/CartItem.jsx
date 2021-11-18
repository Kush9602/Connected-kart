import './css/CartItem.css';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem(props){

    function deleteProduct(){
        const customer = [props.itemDetail._id, props.userId];
        const id = props.itemDetail._id;
        axios.delete("http://localhost:9002/deleteCartItem", id)
        .then(res => {});
    }
    
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
                        <button onClick={deleteProduct}><DeleteIcon /></button>
                    </div>
                </div>      
        </div>
    );
}

export default CartItem;