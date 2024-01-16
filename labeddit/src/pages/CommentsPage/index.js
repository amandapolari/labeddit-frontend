/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { urlPosts } from '../../constants/constants';
import {
    CreateComment,
    DeleteComment,
    EditComment,
    LikeAndDislikeComment,
} from '../../services/api';
import { useForm } from '../../hooks/useForm';
import { Error, Loading } from '../../components';

export const CommentsPage = () => {
    const navigator = useNavigate();
    useProtectPage(navigator);

    const params = useParams();
    const id = params.id;
    const urlComments = `${urlPosts}/${id}`;

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
        errorMessageComment,
        setErrorMessageComment,
    } = context;

    const [form, onChange, resetForm] = useForm({
        content: '',
    });

    const [editingContent, setEditingContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [idCommentToEdit, setIdCommentToEdit] = useState('');
    const [idCommentMessageError, setIdCommentMessageError] = useState('');
    const [data, isLoading, isError] = useRequestData(urlComments, isUpdate);

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

    useEffect(() => {
        setErrorMessage('');
    }, [form]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = {
                content: form.content,
            };
            const response = await CreateComment(body, id, setErrorMessage);
            response && resetForm();
            setIsUpdate(!isUpdate);
        } catch (error) {}
    };

    const handleDeleteComment = async (id) => {
        try {
            const response = await DeleteComment(id);

            setIsUpdate(!isUpdate);

            console.log('Resposta do post:', response);
        } catch (error) {}
    };

    const handleEditButtonClick = (commentId) => {
        const commentToEdit = posts.comments.find(
            (comment) => comment.id === commentId
        );
        setIsEditing(true);
        setIdCommentToEdit(commentId);
        setEditingContent(commentToEdit.content);
    };

    const handleEdit = async (commentId) => {
        try {
            const body = {
                content: editingContent,
            };

            await EditComment(body, commentId);

            setIsEditing(false);
            setIdCommentToEdit('');
            setIsUpdate(!isUpdate);
            setEditingContent('');
        } catch (error) {
            console.log('Erro ao salvar a edição:', error);
        }
    };

    const handleLike = async (commentId) => {
        const body = { like: true };
        await LikeAndDislikeComment(body, commentId, setErrorMessageComment);
        setIsUpdate(!isUpdate);
        setIdCommentMessageError(commentId);
        setTimeout(() => {
            setErrorMessageComment('');
            setIdCommentMessageError('');
        }, 3000);
    };

    const handleDislike = async (commentId) => {
        const body = { like: false };
        await LikeAndDislikeComment(body, commentId, setErrorMessageComment);
        setIsUpdate(!isUpdate);
        setIdCommentMessageError(commentId);
        setTimeout(() => {
            setErrorMessageComment('');
            setIdCommentMessageError('');
        }, 3000);
    };

    return (
        <div>
            <p>Comments Page</p>

            {errorMessage && <p>{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Escreva seu comentário"
                    value={form.content}
                    onChange={onChange}
                    name="content"
                />
                <br />
                <button type="submit">Responder</button>
            </form>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : (
                <div>
                    <p>
                        CRIADOR:{' '}
                        {posts && posts.creator && posts.creator.nickname}
                    </p>
                    <p>CONTEUDO: {posts && posts.content}</p>
                    <p>LIKES: {posts && posts.likesCount}</p>
                    <p>DISLIKES: {posts && posts.dislikesCount}</p>
                    <p>NÚMERO DE COMENTÁRIOS: {posts && posts.commentsCount}</p>
                    <p>COMENTÁRIOS:</p>
                    {posts.comments &&
                        posts.comments.map((comment) => (
                            <div key={comment.id}>
                                <hr />
                                <p>{comment && comment.creator.nickname}</p>
                                {idCommentToEdit === comment.id && isEditing
                                    ? ''
                                    : comment.content}
                                {comment.isCurrentUserPost ? (
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            handleDeleteComment(comment.id);
                                        }}
                                    >
                                        Excluir
                                    </button>
                                ) : (
                                    ''
                                )}

                                {comment.isCurrentUserPost && (
                                    <button
                                        onClick={() =>
                                            handleEditButtonClick(comment.id)
                                        }
                                    >
                                        Editar
                                    </button>
                                )}

                                {idCommentToEdit === comment.id && isEditing ? (
                                    <div>
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                handleEdit(comment.id);
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
                                            <button type="submit">
                                                Salvar
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    ''
                                )}

                                <p>LIKE: {comment.likesCount}</p>
                                <p>DISLIKE: {comment.dislikesCount}</p>
                                <button onClick={() => handleLike(comment.id)}>
                                    Like
                                </button>
                                <button
                                    onClick={() => handleDislike(comment.id)}
                                >
                                    Dislike
                                </button>
                                {comment.isCurrentUserComment &&
                                    idCommentMessageError === comment.id &&
                                    errorMessageComment && (
                                        <p>{errorMessageComment}</p>
                                    )}
                                <hr />
                            </div>
                        ))}{' '}
                </div>
            )}
        </div>
    );
};
