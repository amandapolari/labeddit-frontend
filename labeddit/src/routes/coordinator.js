export const goToLoginPage = (navigator) => {
    navigator('/');
};

export const goToSignupPage = (navigator) => {
    navigator('/signup');
};

export const goToFeedPage = (navigator) => {
    navigator('/feedpage');
};

export const goToCommentsPage = (navigator, id) => {
    navigator(`/comments/${id}`);
};

export const goToErrorsPage = (navigator) => {
    navigator('*');
};
