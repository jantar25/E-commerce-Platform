import { createSlice} from '@reduxjs/toolkit'

const farmerSlice = createSlice({
    name:"farmer",
    initialState:{
        currentFarmer: null,
        isFetching: false,
        error: false,
    },
    reducers:{
        farmerLoginStart:(state)=>{
            state.isFetching=true
        },
        farmerLoginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentFarmer=action.payload
        },
        FarmerLoginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        FarmerLogoutSuccess:(state)=>{
            state.currentFarmer= null;
        },

        // FARMER UPDATE
        updateFarmerStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        updateFarmerSuccess:(state,action)=>{
            state.isFetching=false;
            state.products[state.products.findIndex((item)=>item._id === action.payload.id)
            ]=action.payload.product;
        },
        updateFarmerFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
    }
})

export const {farmerLoginStart,farmerLoginSuccess,FarmerLoginFailure,FarmerLogoutSuccess,
    updateFarmerStart,updateFarmerSuccess,updateFarmerFailure} = farmerSlice.actions;
export default farmerSlice.reducer;