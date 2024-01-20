import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({ children }) => {
    const [dataReceivedFromApi, setDataReceivedFromApi] = useState();
    const [posts, setPosts] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessagePost, setErrorMessagePost] = useState('');
    const [errorMessageComment, setErrorMessageComment] = useState('');
    const [isCommentPage, setIsCommentPage] = useState(false);
    const [isSignupPage, setIsSignupPage] = useState(false);
    const [isFeedOrCommentsPage, setIsFeedOrCommentsPage] = useState(false);

    const datas = {
        dataReceivedFromApi,
        setDataReceivedFromApi,
        posts,
        setPosts,
        isUpdate,
        setIsUpdate,
        errorMessage,
        setErrorMessage,
        errorMessagePost,
        setErrorMessagePost,
        errorMessageComment,
        setErrorMessageComment,
        isCommentPage,
        setIsCommentPage,
        isSignupPage,
        setIsSignupPage,
        isFeedOrCommentsPage,
        setIsFeedOrCommentsPage,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
