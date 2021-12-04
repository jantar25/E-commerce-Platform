import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        //ADD PRODUCT
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },

         // DELETE A PRODUCT
        deleteProduct:(state,action)=>{
            const NextItems = state.products.filter((product)=>product._id !== action.payload._id)
            state.products=NextItems;
            state.quantity -=1;
            state.total -= action.payload.price * action.payload.quantity;
         },
    }
})

export const {addProduct,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;