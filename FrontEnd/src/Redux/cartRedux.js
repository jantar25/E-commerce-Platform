import { createSlice} from '@reduxjs/toolkit'
import {toast } from 'react-toastify';

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
            const itemIndex = state.products.findIndex((product)=>product._id === action.payload._id)
            if (itemIndex>=0){

            } else{
                state.quantity +=1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
                toast.success(`${action.payload.title} is added to cart`,{position:"bottom-left"});
            }
        },

         // DELETE A PRODUCT
        deleteProduct:(state,action)=>{
            const NextItems = state.products.filter((product)=>product._id !== action.payload._id)
            state.products=NextItems;
            state.quantity -=1;
            state.total -= action.payload.price * action.payload.quantity;
         },

                  // DECREASE&INCREASE A PRODUCT QUANTITY
        decreaseProductQuantity:(state,action)=>{
            const itemIndex = state.products.findIndex((product)=>product._id === action.payload._id)
            if (state.products[itemIndex].quantity>1){
                state.products[itemIndex].quantity -=1;
                state.total -= action.payload.price;

            } else if(state.products[itemIndex].quantity===1){
                const NextItems = state.products.filter((product)=>product._id !== action.payload._id)
                state.products=NextItems;
                state.quantity -=1;
                state.total -= action.payload.price * action.payload.quantity;
            }
         },


         IncreamentProductQuantity:(state,action)=>{
            const itemIndex = state.products.findIndex((product)=>product._id === action.payload._id)
                state.products[itemIndex].quantity +=1;
                state.total += action.payload.price;
            }
    }
})

export const {addProduct,deleteProduct,decreaseProductQuantity,IncreamentProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;