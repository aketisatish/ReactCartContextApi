import { PRODUCTS } from "../../products";
import { Product } from "./Product.jsx";

export const Shop=()=>{
    return <div className="shop">
        <div className="shoptitle">
            <h1>Easy Shopping</h1>
        </div>
        <div className="products">{PRODUCTS.map((product)=>(<Product data={product} />))}</div>
    </div>;
        
    
}