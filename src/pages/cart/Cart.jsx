import {ShopContext} from "../../context/shop-context"
import { PRODUCTS} from "../../products";
import React, {useContext} from "react"; 
import {CartItem} from "./cart-item";
import {useNavigate } from "react-router-dom";
export const Cart=()=>{
   const{cartItems,getTotalCartAmount}=useContext(ShopContext);
   const totalAmount=getTotalCartAmount();
   const navigate=useNavigate()
    return(
       <div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartitems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !== 0){
                    return <CartItem data={product} />;
                }
            })}
        </div>
        {totalAmount>0?
        <div className="checkout">
            <p>SubTotal: ${totalAmount}</p>
            <button onClick={()=>navigate("/")} style={{marginRight:50}}>Continue Shopping</button>
            <button>CheckOut</button>
        </div> 
       
:(<h1>Your Cart Empty</h1>) }
</div>
    )
}