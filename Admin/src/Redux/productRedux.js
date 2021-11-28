import { createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:"product",
    initialState:{
        products: [],
        isFetching: false,
        error: false,
    },
    reducers:{
        // GET ALL PRODUCTS
        getProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        getProductSuccess:(state,action)=>{
            state.isFetching=false;
            state.products=action.payload;
            state.error=false;
        },
        getProductFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
    }
})

export const {getProductStart,getProductSuccess,getProductFailure} = productSlice.actions;
export default productSlice.reducer;