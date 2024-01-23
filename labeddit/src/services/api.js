import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../constants/constants';

const handleRequestError = (error, setErrorMessage) => {
    if (error instanceof AxiosError) {
        const arrayOfErrors = error.response.data;

        if (Array.isArray(arrayOfErrors)) {
            const messagesOfErrors = arrayOfErrors.map(
                (error) => error.message
            );

            const messageOfError = messagesOfErrors.join('. \n');

            setErrorMessage(messageOfError);
        } else {
            setErrorMessage(error.response.data);
        }
    } else {
        console.error('Erro inesperado:', error);
    }
};

export const Login = async (body, setErrorMessage) => {
    try {
        const { data } = await axios.post(`${BASE_URL}users/login`, body);
        // console.log('Resposta de sucesso:', data);
        console.log(data);
        return data;
    } catch (error) {
        handleRequestError(error, setErrorMessage);
        console.log('Resposta de erro:', error);
    }
};

export const Signup = async (body, setErrorMessage) => {
    try {
        const { data } = await axios.post(`${BASE_URL}users/signup`, body);
        return data;
    } catch (error) {
        handleRequestError(error, setErrorMessage);
    }
};

export const CreatePost = async (body, setErrorMessage) => {
    try {
        const { data } = await axios.post(`${BASE_URL}posts`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        handleRequestError(error, setErrorMessage);
    }
};

export const CreateComment = async (body, id, setErrorMessage) => {
    try {
        const { data } = await axios.post(`${BASE_URL}comments/${id}`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        handleRequestError(error, setErrorMessage);
    }
};

export const LikeAndDislikePost = async (body, id, setErrorMessage) => {
    try {
        const { data } = await axios.put(`${BASE_URL}posts/${id}/like`, body, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return data;
    } catch (error) {
        handleRequestError(error, setErrorMessage);
    }
};

export const LikeAndDislikeComment = async (body, id, setErrorMessage) => {
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
        handleRequestError(error, setErrorMessage);
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

export const EditPost = async (body, id) => {
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

export const EditComment = async (body, id) => {
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
