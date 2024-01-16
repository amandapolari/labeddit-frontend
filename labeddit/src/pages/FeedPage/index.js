/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { Logout, urlPosts } from '../../constants/constants';
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import {
    CreatePost,
    DeletePost,
    EditPost,
    LikeAndDislikePost,
} from '../../services/api';
import GlobalContext from '../../contexts/GlobalContext';
import { Error, Loading } from '../../components';
import { goToCommentsPage } from '../../routes/coordinator';

export const FeedPage = () => {
    const navigator = useNavigate();
    useProtectPage(navigator);

    const context = useContext(GlobalContext);
    const {
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
    } = context;

    const [form, onChange, resetForm] = useForm({
        content: '',
    });

    useEffect(() => {
        setErrorMessage('');
    }, [form]);

    const [editingContent, setEditingContent] = useState('');

    const [data, isLoading, isError] = useRequestData(urlPosts, isUpdate);

    const [isEditing, setIsEditing] = useState(false);

    const [idPostToEdit, setIdPostToEdit] = useState('');

    const [idPostMessageError, setIdPostMessageError] = useState('');

    useEffect(() => {
        if (posts.length === 0 && !isLoading && !isError && data) {
            setDataReceivedFromApi(data);
            setPosts(data);
        } else {
            setPosts(data);
        }
    }, [
        data,
        dataReceivedFromApi,
        setDataReceivedFromApi,
        isError,
        isLoading,
        posts.length,
        setPosts,
        isUpdate,
    ]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = {
                content: form.content,
            };

            const response = await CreatePost(body, setErrorMessage);

            response && resetForm();

            setIsUpdate(!isUpdate);
        } catch (error) {}
    };

    const handleDeletePost = async (postId) => {
        try {
            const response = await DeletePost(postId);

            console.log('Resposta do delete:', response);

            setIsUpdate(!isUpdate);
        } catch (error) {
            console.log('Resposta de erro:', error);
            error.response &&
                console.log('Dados de resposta de erro:', error.response.data);
            error.response?.data?.[0]?.message &&
                console.log(
                    'Mensagem de erro:',
                    error.response.data[0].message
                );
        }
    };

    const handleEditButtonClick = (postId) => {
        const postToEdit = posts.find((post) => post.id === postId);
        setIsEditing(true);
        setIdPostToEdit(postId);
        setEditingContent(postToEdit.content);
    };

    const handleEdit = async (postId) => {
        try {
            const body = {
                content: editingContent,
            };

            await EditPost(body, postId);

            setIsEditing(false);
            setIdPostToEdit('');
            setIsUpdate(!isUpdate);
            setEditingContent('');
        } catch (error) {
            console.log('Erro ao salvar a edição:', error);
        }
    };

    const handleLike = async (postId) => {
        const body = { like: true };
        await LikeAndDislikePost(body, postId, setErrorMessagePost);
        setIsUpdate(!isUpdate);
        setIdPostMessageError(postId);
        setTimeout(() => {
            setErrorMessagePost('');
            setIdPostMessageError('');
        }, 3000);
    };

    const handleDislike = async (postId) => {
        const body = { like: false };
        await LikeAndDislikePost(body, postId, setErrorMessagePost);
        setIsUpdate(!isUpdate);
        setIdPostMessageError(postId);
        setTimeout(() => {
            setErrorMessagePost('');
            setIdPostMessageError('');
        }, 3000);
    };

    return (
        <div>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    Logout(navigator);
                }}
            >
                Sair
            </button>
            <br />
            <p>FeedPage</p>

            {errorMessage && <p>{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Escreva seu post"
                    value={form.content}
                    onChange={onChange}
                    name="content"
                />
                <br />
                <button type="submit">Postar</button>
            </form>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : (
                posts &&
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <hr />
                            {/* {console.log(post)} */}
                            <p>
                                CRIADOR DO POST:
                                {post && post.creator && post.creator.nickname}
                            </p>
                            {idPostToEdit === post.id && isEditing
                                ? ''
                                : post.content}
                            {post.isCurrentUserPost ? (
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleDeletePost(post.id);
                                    }}
                                >
                                    Excluir
                                </button>
                            ) : (
                                ''
                            )}

                            {post.isCurrentUserPost && (
                                <button
                                    onClick={() =>
                                        handleEditButtonClick(post.id)
                                    }
                                >
                                    Editar
                                </button>
                            )}

                            {idPostToEdit === post.id && isEditing ? (
                                <div>
                                    <form
                                        onSubmit={(event) => {
                                            event.preventDefault();
                                            handleEdit(post.id);
                                        }}
                                    >
                                        <textarea
                                            value={editingContent}
                                            onChange={(event) =>
                                                setEditingContent(
                                                    event.target.value
                                                )
                                            }
                                            name="content"
                                        />
                                        <br />
                                        <button type="submit">Salvar</button>
                                    </form>
                                </div>
                            ) : (
                                ''
                            )}
                            <p> LIKES: {post.likesCount}</p>
                            <p> DISLIKES: {post.dislikesCount}</p>
                            <button onClick={() => handleLike(post.id)}>
                                Like
                            </button>
                            <button onClick={() => handleDislike(post.id)}>
                                Dislike
                            </button>

                            {post.isCurrentUserPost &&
                                idPostMessageError === post.id &&
                                errorMessagePost && <p>{errorMessagePost}</p>}

                            <p> COMENTÁRIOS: {post.commentsCount}</p>
                            <button
                                onClick={() => {
                                    goToCommentsPage(navigator, post.id);
                                }}
                            >
                                Comentários
                            </button>
                            <hr />
                        </div>
                    );
                })
            )}
        </div>
    );
};
