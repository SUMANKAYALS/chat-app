// import axios from "axios"

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:5001/api",
//     withCredentials: true
// });

// import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//     withCredentials: true,
// });

// import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: import.meta.env.MODE === "development"
//         ? "http://localhost:5001/api"
//         : "https://looptalk-backend-8y9h.onrender.com/api",
//     withCredentials: true,
// });


import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://looptalk-backend-8y9h.onrender.com/api",
    withCredentials: true,
});
