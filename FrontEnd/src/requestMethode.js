import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGZhMGNmMzYyZWFiMDU3ZDg3ODg4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAwNzAzMywiZXhwIjoxNjM3MjY2MjMzfQ.mWaaJKlks-IIJbDfO52fccaCzoVbilRldQxDyEa_3oo";

export const publicRequest = axios.create({baseURL:BASE_URL});

export const userRequest = axios.create({
    baseURL:BASE_URL,header:{token:`Bearer ${TOKEN}`}});