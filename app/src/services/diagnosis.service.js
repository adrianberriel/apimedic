import axios from "axios";
import {getToken} from "./auth.service";

const API_URL = "https://sandbox-healthservice.priaid.ch/";

export const getSymptoms = () => {
    const token = getToken();
    return axios.get(API_URL + 'symptoms?token=' + token + '&format=json&language=en-gb');
}


//https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[238]&gender=male&year_of_birth=1985&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJlcnJpZWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDg2MCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMi0wNi0yNiIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjU2Mzg2NTkzLCJuYmYiOjE2NTYzNzkzOTN9.2cdVkeU6qn7-MvP30pqSB-33ocVD5GwVuVDLIntab-M&format=json&language=en-gb

export const getDiagnosis = () => {
    const token = getToken();
    return axios.get(API_URL + 'diagnosis?symptoms=[238]&gender=male&year_of_birth=1985&token=' + token + '&format=json&language=en-gb');
}