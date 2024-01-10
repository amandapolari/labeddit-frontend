import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}users/login`, body);
    return data;
};

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/user/signup`, body);
    return data;
};
