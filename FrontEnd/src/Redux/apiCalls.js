import { publicRequest } from "../requestMethode";
import { loginFailure, loginStart, loginSuccess,logoutSuccess } from "./userRedux"


export const login = async (dispatch,user) =>{
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const logoutDone = async (dispatch) =>{
    dispatch(logoutSuccess());
}