import { ADD_TO_CART,DELETE_FROM_CART,ITEM_QUANTITY_DECREASE,REMOVE_FROM_WISHLIST,ITEM_QUANTITY_INCREASE,ADD_TO_WISHLIST } from "./ActionTypes"

export const delFromCart=()=>{
    return{
        type:DELETE_FROM_CART,

    }
}
export const removeFromWishlist=(item)=>{
    return {
        type:REMOVE_FROM_WISHLIST,
        payload:item
    }
}
export const addToCart=(product)=>{
    return {
        type:ADD_TO_CART,
        payload:product
    }
}

export const addToWishlist=(product)=>{
    return {
        type:ADD_TO_WISHLIST,
        payload:product
    }
}

export const itemQuantityIncrease = (item) => {
    return ({
        type: ITEM_QUANTITY_INCREASE,
        payload: item
    })
} 

export const itemQuantityDecrease = (item) => {
    return (
        {
            type: ITEM_QUANTITY_DECREASE,
            payload: item
        }
    )
} 