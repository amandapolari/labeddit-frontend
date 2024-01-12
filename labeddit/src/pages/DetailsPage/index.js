import { useNavigate, useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { urlPosts } from '../../constants/constants';
import { CreateComment } from '../../services/api';
import { useForm } from '../../hooks/useForm';
import { Error, Loading } from '../../components';

export const DetailsPage = () => {
    const navigator = useNavigate();
    useProtectPage(navigator);

    const params = useParams();
    const id = params.id;
    const urlDetails = `${urlPosts}/${id}`;

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

    const [data, isLoading, isError] = useRequestData(urlDetails, isUpdate);

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

    return (
        <div>
            <p>DetailsPage</p>
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
                                <p>{comment.creator.nickname}</p>
                                {comment.content}
                                <p>LIKE: {comment.likesCount}</p>
                                <p>DISLIKE: {comment.dislikesCount}</p>
                                <hr />
                            </div>
                        ))}{' '}
                </div>
            )}
        </div>
    );
};
