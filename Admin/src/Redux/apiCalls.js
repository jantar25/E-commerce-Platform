import { publicRequest, userRequest } from "../requestMethode";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {getProductStart,getProductSuccess,getProductFailure,
    deleteProductStart,deleteProductSuccess,deleteProductFailure,
    updateProductStart,updateProductSuccess,updateProductFailure,
    addProductStart,addProductSuccess,addProductFailure} from "./productRedux"


// LOGIN ADMIN   
export const login = async (dispatch,user) =>{
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
        console.log(error);
    }
}

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
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (error) {
        dispatch(deleteProductFailure());
        console.log(error);
    }
}

// UPDATE A PRODUCT
export const updateProduct = async (id,product,dispatch) =>{
    dispatch(updateProductStart());

    try {
        //UPDATE const res = await userRequest.put(`/products/${id}`);
        dispatch(updateProductSuccess({id,product}));
    } catch (error) {
        dispatch(updateProductFailure());
        console.log(error);
    }
}

// ADD A PRODUCT
export const addProduct = async (product,dispatch) =>{
    dispatch(addProductStart());

    try {
        const res = await userRequest.post('/products',product);
        dispatch(addProductSuccess(res.data));
    } catch (error) {
        dispatch(addProductFailure());
        console.log(error);
    }
}