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
