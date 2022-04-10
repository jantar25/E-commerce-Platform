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
    }
})

export const {farmerLoginStart,farmerLoginSuccess,FarmerLoginFailure,FarmerLogoutSuccess} = farmerSlice.actions;
export default farmerSlice.reducer;