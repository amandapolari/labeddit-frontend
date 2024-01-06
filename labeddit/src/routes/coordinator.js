export const goToLoginPage = (navigator) => {
    navigator('/');
};

export const goToSignupPage = (navigator) => {
    navigator('/signup');
};

export const goToFeedPage = (navigator) => {
    navigator('/feedpage');
};

export const goToDetailsPage = (navigator, id) => {
    navigator(`/details/${id}`);
};

export const goToErrorsPage = (navigator) => {
    navigator('*');
};
