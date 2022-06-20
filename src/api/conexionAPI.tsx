import axios from "axios";

export const conexionAPI = axios.create({
    baseURL : 'http://sesat.fdi.ucm.es:8080/servicios/rest',
});