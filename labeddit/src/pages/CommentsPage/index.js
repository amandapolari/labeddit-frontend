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
    } = context;

    const [form, onChange, resetForm] = useForm({
        content: '',
    });

    // Novo estado para o conteúdo durante a edição:
    const [editingContent, setEditingContent] = useState('');

    // Novo estado para o controle da edição:
    const [isEditing, setIsEditing] = useState(false);

    // Novo estado para o id do post durante a edição:
    const [idCommentToEdit, setIdCommentToEdit] = useState('');

    const [data, isLoading, isError] = useRequestData(urlComments, isUpdate);

    useEffect(() => {
        if (posts.length === 0 && !isLoading && !isError && data) {
            setDataReceivedFromApi(data);
            setPosts(data);
        } else {
            // setPosts(dataReceivedFromApi);
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

            const response = await CreateComment(body, id);

            response && resetForm();

            setIsUpdate(!isUpdate);

            // console.log('Resposta do post:', response);

            // response.message &&
            //     console.log(
            //         'Mensagem de resposta do comentário:',
            //         response.message
            //     );

            // console.log('Resposta do post:', response);
        } catch (error) {
            console.log('Resposta de erro:', error);
            error.response &&
                // console.log('Dados de resposta de erro:', error.response.data);
                error.response?.data?.[0]?.message &&
                console.log(
                    'Mensagem de erro:',
                    error.response.data[0].message
                );
        }
    };

    const handleDeleteComment = async (id) => {
        try {
            const response = await DeleteComment(id);

            setIsUpdate(!isUpdate);

            console.log('Resposta do post:', response);

            // response.message &&
            //     console.log(
            //         'Mensagem de resposta do comentário:',
            //         response.message
            //     );

            // console.log('Resposta do post:', response);
        } catch (error) {
            console.log('Resposta de erro:', error);
            error.response &&
                // console.log('Dados de resposta de erro:', error.response.data);
                error.response?.data?.[0]?.message &&
                console.log(
                    'Mensagem de erro:',
                    error.response.data[0].message
                );
        }
    };

    const handleEditButtonClick = (commentId) => {
        // const commentToEdit = posts.find((post) => post.id === commentId);
        const commentToEdit = posts.comments.find(
            (comment) => comment.id === commentId
        );
        setIsEditing(true);
        setIdCommentToEdit(commentId);
        setEditingContent(commentToEdit.content); // Inicializar o conteúdo do formulário de edição
    };

    const handleEdit = async (commentId) => {
        try {
            const body = {
                content: editingContent, // Usar o estado de edição
            };

            await EditComment(body, commentId);

            setIsEditing(false);
            setIdCommentToEdit('');
            setIsUpdate(!isUpdate);
            setEditingContent(''); // Limpar o conteúdo de edição após a edição
        } catch (error) {
            console.log('Erro ao salvar a edição:', error);
        }
    };

    const handleLike = async (commentId) => {
        const body = { like: true };
        await LikeAndDislikeComment(body, commentId);
        setIsUpdate(!isUpdate);
    };

    const handleDislike = async (commentId) => {
        const body = { like: false };
        await LikeAndDislikeComment(body, commentId);
        setIsUpdate(!isUpdate);
    };

    return (
        <div>
            <p>Comments Page</p>
            {/* {posts && console.log(posts)} */}
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
                                                value={editingContent} // Usar o valor de edição
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
                                <hr />
                            </div>
                        ))}{' '}
                </div>
            )}
        </div>
    );
};
