import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({ children }) => {
    const [dataReceivedFromApi, setDataReceivedFromApi] = useState();
    const [posts, setPosts] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessagePost, setErrorMessagePost] = useState('');
    const [errorMessageComment, setErrorMessageComment] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // const filteredPosts = async (text) => {
    //     const postsFiltered = posts.map((post) => {
    //         return post.content.includes(text);
    //     });
    // };

    // mudança de tema:
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setIsUpdate(!isUpdate);
    };
    //

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
        darkMode,
        setDarkMode,
        toggleDarkMode,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
