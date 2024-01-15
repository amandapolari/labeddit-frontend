import { useNavigate } from 'react-router';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { Logout, urlPosts } from '../../constants/constants';
import { useContext, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { CreatePost, DeletePost } from '../../services/api';
import GlobalContext from '../../contexts/GlobalContext';
import { Error, Loading } from '../../components';
import { goToDetailsPage } from '../../routes/coordinator';

export const FeedPage = () => {
    const navigator = useNavigate();
    useProtectPage(navigator);

    const [form, onChange, resetForm] = useForm({
        content: '',
    });

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

    // const handleEditPost = async (body, postId) => {
    //     try {
    //         const response = await editPost(body, postId);

    //         console.log('Resposta do delete:', response);

    //         setIsUpdate(!isUpdate);
    //     } catch (error) {
    //         console.log('Resposta de erro:', error);
    //         error.response &&
    //             console.log('Dados de resposta de erro:', error.response.data);
    //         error.response?.data?.[0]?.message &&
    //             console.log(
    //                 'Mensagem de erro:',
    //                 error.response.data[0].message
    //             );
    //     }
    // };

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
                            <p>CONTEUDO: {post.content}</p>
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
                            {/* {post.isCurrentUserPost ? (
                                <button>Editar</button>
                            ) : (
                                ''
                            )} */}
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
