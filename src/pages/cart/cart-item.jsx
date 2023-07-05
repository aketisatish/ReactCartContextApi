import React,{useContext} from "react";
import { ShopContext } from "../../context/shop-context";
export const CartItem=(props)=>{
   const {id,name,price,img}=props.data;
   const {cartItems,addToCart,removeFromCart,upadateCartItemCount}=useContext(ShopContext);
    return(
        <div className="cartitem">
            <img src={img}/>
            <div className="description">
                <p><b>{name}</b></p>
            <p>${price}</p>
            </div>
            <div className="counthandler">
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e)=>upadateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    );
};