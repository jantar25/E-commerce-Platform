import axios from "axios";

const BASE_URL = "https://kivugren.herokuapp.com/api/";
// const BASE_URL = "http://localhost:5000/api/";

const currentToken = localStorage.getItem("persist:root");
const TOKEN =currentToken? 
JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken : "";

export const publicRequest = axios.create({baseURL:BASE_URL});

export const userRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${TOKEN}`}});