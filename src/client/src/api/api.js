import axios from 'axios';

const basePath = `http://${window.location.hostname}/api/`;

// todo: return clean data or error from api

export function apiGet(path) {
    return axios.get(basePath + path);
}

export function apiPost(path, data) {
    return axios.post(basePath + path, data);
}
