import axios from "axios";

const API_URL = "https://sandbox-authservice.priaid.ch/";

export const getSymptoms = (token) => {
    return axios.get(API_URL + 'symptoms', {

    })
        .then(response => console.log('getSymptoms() => response ', response),
                reason => console.log('getSymptoms() => rejectionReason ', reason))
        .catch(error => console.log('getSymptoms() => error ', error));
}