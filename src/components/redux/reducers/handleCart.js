

export const initialState=[]

const handleCart=(state=initialState,action)=>{
    const product=action.payload;
   
    if(action.type==="ADDITEM"){
        const exist= state.find((x)=>x.id===product.id);
            
        if(exist){
           
            return state.map((x)=>
            x.id===product.id?{...x,quantity:x.quantity+1}:x)
        }else{
      
         
            return [...state,{...product}]
        }
    }
    // switch (product) {
    //     case "ADDITEM":
            
            
        //     break;
        // case 'DELITEM':
       else if(action.type==='DELITEM'){
            const exist1=state.find((x)=>x.id===product.id);
            if(exist1.quantity===1){
                return state.filter((x)=>x.id!==exist1.id);
            }else {
                return state.map((x)=>x.id===product.id ? {...x,quantity:x.quantity-1}:x)
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