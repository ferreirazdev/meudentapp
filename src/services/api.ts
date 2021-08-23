import axios from 'axios';

const api = axios.create({
    baseURL: '192.168.1.3:3333'
})

export {api};