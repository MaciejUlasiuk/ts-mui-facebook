import axios from "axios";
    

export const axiosInstance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    responseType: 'json',
    headers: {
        'app-id': '63f63630896fbb0b704168bd',
    }
})