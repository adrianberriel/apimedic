import axios from "axios";
import CryptoJS from "crypto-js";

const API_URL = "https://sandbox-authservice.priaid.ch/login";

const getHash = (password) => {
    const uri = API_URL;
    const computedHash = CryptoJS.HmacMD5(uri, password);
    const computedHashString = computedHash.toString(CryptoJS.enc.Base64);
    return computedHashString;
}

export const login = (username, password) => {
    const hash = getHash(password);
    return axios.post(API_URL, {}, {
        headers: {
            Authorization: `Bearer ${username}:${hash}`
        }
    })
        .then(response => {
            if (response.data.Token) {
                localStorage.setItem("token", JSON.stringify(response.data.Token));
            }
            return response.data;
        })
        .catch(error => alert(error));
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
}