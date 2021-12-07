import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const currentToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
const TOKEN =currentToken? 
JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken : "";

export const publicRequest = axios.create({baseURL:BASE_URL});

export const userRequest = axios.create({
    baseURL:BASE_URL,header:{token:`Bearer ${TOKEN}`}});