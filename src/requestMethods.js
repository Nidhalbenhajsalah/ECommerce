import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODY3YmE5ZGEyODA1MGE4ZTkwYWNlNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjIwMzUzOSwiZXhwIjoxNjM2NDYyNzM5fQ.w2LB4X8DxKMsEBrJhH85XnRrfQLGap9ScxS0UmjAgWM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
