// Colocar aqui a base url da API após o deploy
export const BASE_URL = 'https://labeddit-backend-kul7.onrender.com/';

export const PATH = window.location.pathname;

export const urlPosts = 'posts';

export const urlComments = 'comments';

export const Logout = (navigator) => {
    localStorage.removeItem('token');
    navigator('/');
};
