import database from "../database/assignmentdb_product.json";
import Card from "./ProductCard";
import './css/CompanyProducts.css';
            
function CompanyProducts(){
    return (
        <div className="product-card">
             {database.map((obj) => {
                 return (
                    <Card key={obj._id.$oid} img={obj.imgUrl} name={obj.name} price={obj.price}/>)
             })}
        </div>
    );
}

export default CompanyProducts;