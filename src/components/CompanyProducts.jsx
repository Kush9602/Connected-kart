import Card from "./ProductCard";
import './css/CompanyProducts.css';
import axios from "axios";
import {useState, useEffect} from "react";

function CompanyProducts(props){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9002/productInfo")
        .then(res => setProducts(res.data));
     }, []);

    
    return (
        <div className="product-card">
            {products.map((obj) => {
                 return (
                    <Card key={obj._id} productDetail={obj} userID={props.userID}/>)
             })}
        </div>
    );
}

export default CompanyProducts;