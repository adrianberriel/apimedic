import axios from "axios";
import {getToken} from "./auth.service";

const API_URL = "https://sandbox-healthservice.priaid.ch/";

export const getSymptoms = () => {
    const token = getToken();
    return axios.get(API_URL + 'symptoms?token=' + token + '&format=json&language=en-gb');
}

export const getDiagnosis = (symptom, gender, year_of_birth) => {
    const token = getToken();
    return axios.get(API_URL + 'diagnosis?symptoms=['+ symptom +']&gender=' + gender + '&year_of_birth=' + year_of_birth + '&token=' + token + '&format=json&language=en-gb');
}