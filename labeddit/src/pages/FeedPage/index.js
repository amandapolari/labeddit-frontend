import { useNavigate } from 'react-router';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { Logout, urlPosts } from '../../constants/constants';
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { CreatePost, DeletePost, editPost } from '../../services/api';
import GlobalContext from '../../contexts/GlobalContext';
import { Error, Loading } from '../../components';
import { goToDetailsPage } from '../../routes/coordinator';

export const FeedPage = () => {
    const navigator = useNavigate();
    useProtectPage(navigator);

    const [form, onChange, resetForm] = useForm({
        content: '',
    });

    const [editingContent, setEditingContent] = useState(''); // Novo estado para o conteúdo durante a edição

    const context = useContext(GlobalContext);
    const {
        dataReceivedFromApi,
        setDataReceivedFromApi,
        posts,
        setPosts,
        isUpdate,
        setIsUpdate,
    } = context;

    const [data, isLoading, isError] = useRequestData(urlPosts, isUpdate);

    const [isEditing, setIsEditing] = useState(false);

    const [idPostToEdit, setIdPostToEdit] = useState('');

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

            const response = await CreatePost(body);

            response && resetForm();

            setIsUpdate(!isUpdate);

            // console.log('Resposta do post:', response);

            // response.message &&
            //     console.log('Mensagem de resposta do post:', response.message);

            // console.log('Resposta do post:', response);
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
        setEditingContent(postToEdit.content); // Inicializar o conteúdo do formulário de edição
    };

    const handleEdit = async (postId) => {
        try {
            const body = {
                content: editingContent, // Usar o estado de edição
            };

            await editPost(body, postId);

            setIsEditing(false);
            setIdPostToEdit('');
            setIsUpdate(!isUpdate);
            setEditingContent(''); // Limpar o conteúdo de edição após a edição
        } catch (error) {
            console.log('Erro ao salvar a edição:', error);
        }
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
                            {/* <p>CONTEUDO: {post.content}</p> */}
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
                                            value={editingContent} // Usar o valor de edição
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
                            <p> COMENTÁRIOS: {post.commentsCount}</p>
                            <p>{post.id}</p>
                            <button
                                onClick={() => {
                                    goToDetailsPage(navigator, post.id);
                                }}
                            >
                                + DETALHES
                            </button>
                            <hr />
                        </div>
                    );
                })
            )}
        </div>
    );
};
