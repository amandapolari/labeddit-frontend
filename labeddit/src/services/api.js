import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const Login = async (body) => {
    try {
        const { data } = await axios.post(`${BASE_URL}users/login`, body);
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const Signup = async (body) => {
    try {
        const { data } = await axios.post(`${BASE_URL}users/signup`, body);
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const CreatePost = async (body) => {
    try {
        const { data } = await axios.post(`${BASE_URL}posts`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const CreateComment = async (body, id) => {
    try {
        const { data } = await axios.post(`${BASE_URL}comments/${id}`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const DeletePost = async (id) => {
    try {
        const { data } = await axios.delete(`${BASE_URL}posts/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const DeleteComment = async (id) => {
    try {
        const { data } = await axios.delete(`${BASE_URL}comments/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const editPost = async (body, id) => {
    try {
        const { data } = await axios.put(`${BASE_URL}posts/${id}`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const editComment = async (body, id) => {
    try {
        const { data } = await axios.put(`${BASE_URL}comments/${id}`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const likeAndDislikePost = async (body, id) => {
    try {
        const { data } = await axios.put(`${BASE_URL}posts/${id}/like`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};

export const likeAndDislikeComment = async (body, id) => {
    try {
        const { data } = await axios.put(
            `${BASE_URL}comments/${id}/like`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }
        );
        return data;
    } catch (error) {
        console.log('Resposta de erro:', error);
    }
};
