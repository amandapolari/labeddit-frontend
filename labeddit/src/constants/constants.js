// Colocar aqui a base url da API após o deploy
export const BASE_URL = 'http://localhost:3003/';

export const PATH = window.location.pathname;

export const urlPosts = 'posts';

export const Logout = (navigator) => {
    localStorage.removeItem('token');
    navigator('/');
};
