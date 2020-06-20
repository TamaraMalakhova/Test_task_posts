import * as axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'http://jsonplaceholder.typicode.com/'
    }
);

export const postsAPI = {
    getPosts() {
        return instance.get(`posts`)
            .then(response => {
                return response.data;
            });
    }
}

export const userAPI = {
    getUsers() {
        return instance.get(`users/`)
            .then(response => {
                return response.data;
            });
    }
}