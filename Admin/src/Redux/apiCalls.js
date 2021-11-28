import { publicRequest, userRequest } from "../requestMethode";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {getProductStart,getProductSuccess,getProductFailure,
    deleteProductStart,deleteProductSuccess,deleteProductFailure} from "./productRedux"

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