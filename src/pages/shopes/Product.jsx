import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product=(props)=>{
   const {id,name,price,img}=props.data;


   const {addToCart,cartItems}=useContext(ShopContext);
const cartItemAmount=cartItems[id];
    return <div className="product">
        <img src={img} />
        <div className="description">
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>
             <button className="addtocartbtn" onClick={()=>addToCart(id)}>Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
             </button><br></br><br></br>
    </div>;
}