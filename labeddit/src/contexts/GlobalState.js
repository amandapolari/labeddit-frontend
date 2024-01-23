/* eslint-disable no-unused-vars */
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
    const [isCardMain, setIsCardMain] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [idPostToEdit, setIdPostToEdit] = useState('');
    const [editingContent, setEditingContent] = useState('');
    const [idPostMessageError, setIdPostMessageError] = useState('');
    const [isErrorPage, setIsErrorPage] = useState(false);

    const handleEdit = async (itemId, editFunction) => {
        try {
            const body = {
                content: editingContent,
            };
            const response = await editFunction(body, itemId);
            console.log(response);
            setIsEditing(false);
            setIdPostToEdit('');
            setIsUpdate(!isUpdate);
            setEditingContent('');
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditButtonClickPost = (itemId, posts) => {
        // console.log('itemId:', itemId, 'posts:', posts);
        const postToEdit = posts.find((post) => post.id === itemId);
        // console.log('postToEdit:', postToEdit);
        setIsEditing(true);
        setIdPostToEdit(itemId);
        setEditingContent(postToEdit.content);
    };

    const handleEditButtonClickComment = (itemId, comments) => {
        const commentToEdit = posts.comments.find(
            (comment) => comment.id === itemId
        );
        setIsEditing(true);
        // setIdCommentToEdit(itemId);
        setIdPostToEdit(itemId);
        setEditingContent(commentToEdit.content);
    };

    const handleDelete = async (itemId, deleteFunction) => {
        try {
            const response = await deleteFunction(itemId);
            setIsUpdate(!isUpdate);
            console.log(response);
        } catch (error) {
            console.log(error);
            // talvez uma lógica pra mostrar o erro PARA usuário aqui!
        }
    };

    const handleLike = async (itemId, likeValue, likeOrDislikeFunction) => {
        const body = { like: likeValue };
        const response = await likeOrDislikeFunction(
            body,
            itemId,
            setErrorMessagePost
        );
        // console.log(response);
        setIsUpdate(!isUpdate);
        setIdPostMessageError(itemId);
        setTimeout(() => {
            setErrorMessagePost('');
            setIdPostMessageError('');
        }, 3000);
    };

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
        handleDelete,
        handleEdit,
        handleEditButtonClickPost,
        handleEditButtonClickComment,
        isEditing,
        setIsEditing,
        idPostToEdit,
        setIdPostToEdit,
        editingContent,
        setEditingContent,
        idPostMessageError,
        setIdPostMessageError,
        handleLike,
        isCardMain,
        setIsCardMain,
        isErrorPage,
        setIsErrorPage,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
