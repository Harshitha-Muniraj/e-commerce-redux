import { DELETE_FROM_CART } from "../action/ActionTypes";


export const initialState={
    cart:[],
    wishList:[]
}

const handleCart=(state=initialState,action)=>{
  const product=action.payload;
    if(action.type==="ADD_TO_CART"){
        console.log(state)
        const exist= state.cart.find((x)=>x.id===product.id);
        
        if(exist){
           
            return {...state,cart:[...state.cart.map((x)=>
            x.id===product.id?{...x,quantity:x.quantity+1}:x)]}
        }else{
        
         
            return {...state,cart:[...state.cart,action.payload]}
        }
    }
    else if(action.type==="DELETE_FROM_CART"){
  
         return {...state,cart:[]}
    }
    
       else if(action.type==='ITEM_QUANTITY_DECREASE'){
     
            const exist1=state.cart.find((x)=>x.id===product.id);
  
            if(exist1.quantity===1){
                return {...state,cart:[...state.cart.filter((x)=>x.id!==exist1.id)]};
            }else {
                return {...state,cart:[...state.cart.map((x)=>x.id===product.id ? {...x,quantity:x.quantity-1}:x)]}
            }
        }
        else if(action.type==='ITEM_QUANTITY_INCREASE'){
         
                return {...state,cart:[...state.cart.map((x)=>x.id===product.id ? {...x,quantity:x.quantity+1}:x)]}
            
        }
        else if(action.type=="ADD_TO_WISHLIST"){
            const exist= state.wishList.find((x)=>x.id===product.id);
            
            if(exist){
               
                return {...state,wishList:[...state.wishList.map((x)=>
                x.id===product.id?{...x,quantity:x.quantity+1}:x)]}
            }else{
          
             
                return {...state,wishList:[...state.wishList,product]}
            }
        }
        else if(action.type==="REMOVE_FROM_WISHLIST"){
            return {
                ...state,wishList:[...state.wishList.filter((x)=>
                    x.id!=product.id)]
            }
        }
        else {
            return state
        }
           
        //     break;

        // default:
        //     console.log('dd')
        //     return state
        //     break;
    }


export default handleCart