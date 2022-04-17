import { publicRequest,farmerRequest } from "../requestMethode";
import { loginFailure, loginStart, loginSuccess,logoutSuccess } from "./userRedux"
import {farmerLoginStart,farmerLoginSuccess,FarmerLoginFailure,FarmerLogoutSuccess} from './farmerRedux'
import {getProductStart,getProductSuccess,getProductFailure,
    deleteProductStart,deleteProductSuccess,deleteProductFailure,
    updateProductStart,updateProductSuccess,updateProductFailure,
    addProductStart,addProductSuccess,addProductFailure} from "./productRedux"

// GET ALL PRODUCTS
export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());

    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFailure());
        console.log(error);
    }
}


// DELETE A PRODUCT
export const deleteProduct = async (id,dispatch) =>{
    dispatch(deleteProductStart());

    try {
        await farmerRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (error) {
        dispatch(deleteProductFailure());
        console.log(error);
    }
}

// UPDATE A PRODUCT
export const updateProduct = async (id,updatedProduct,dispatch) =>{
    dispatch(updateProductStart());
    try {
        const res = await farmerRequest.put(`/products/${id}`,updatedProduct);
        dispatch(updateProductSuccess({id,updatedProduct}));
        console.log(res)
    } catch (error) {
        dispatch(updateProductFailure());
        console.log(error);
    }
}

// ADD A PRODUCT
export const addProduct = async (product,dispatch) =>{
    dispatch(addProductStart());

    try {
        const res = await farmerRequest.post('/products',product);
        dispatch(addProductSuccess(res.data));
    } catch (error) {
        dispatch(addProductFailure());
        console.log(error);
    }
}

export const login = async (dispatch,user) =>{
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const farmerLogin = async (dispatch,farmer) =>{
    dispatch(farmerLoginStart());

    try {
        const res = await publicRequest.post("/farmerAuth/login",farmer);
        dispatch(farmerLoginSuccess(res.data));
    } catch (error) {
        dispatch(FarmerLoginFailure());
    }
}

export const logoutDone = async (dispatch) =>{
    dispatch(logoutSuccess());
}

export const farmerLogoutDone = async (dispatch) =>{
    dispatch(FarmerLogoutSuccess());
}