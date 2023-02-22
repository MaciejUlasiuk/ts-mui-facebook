import axios from "axios";
    

export const axiosInstance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    headers: {
        'app-id': '63f63630896fbb0b704168bd',
    }
})