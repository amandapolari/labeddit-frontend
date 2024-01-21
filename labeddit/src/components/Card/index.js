/* eslint-disable no-unused-vars */
import {
    ContainerButtons,
    ContainerContentCard,
    IconVectorDown,
    IconVectorUp,
    ImageComment,
    TextCreatorContent,
} from './syled';

import images from '../../assets/importImages';
import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    DeleteComment,
    DeletePost,
    EditComment,
    EditPost,
    LikeAndDislikeComment,
    LikeAndDislikePost,
} from '../../services/api';
import { useForm } from '../../hooks/useForm';
import { goToCommentsPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export const Card = ({
    creator,
    id,
    content,
    boolenIsCurrentUser,
    likesCount,
    dislikesCount,
    commentsCount,
    listContent,
}) => {
    const context = useContext(GlobalContext);
    const {
        handleDelete,
        idPostToEdit,
        isEditing,
        editingContent,
        setEditingContent,
        handleEdit,
        handleLike,
        idPostMessageError,
        errorMessagePost,
        handleEditButtonClickPost,
        handleEditButtonClickComment,
    } = context;

    const [form, setForm, onChange, resetForm] = useForm({
        content: '',
    });

    const navigator = useNavigate();

    const path = window.location.pathname;

    const isFeedpage = path.includes('feedpage');

    return (
        <ContainerContentCard>
            <hr />
            <TextCreatorContent>{creator}</TextCreatorContent>
            {idPostToEdit === id && isEditing ? '' : content}
            {boolenIsCurrentUser ? (
                <div>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            handleDelete(
                                id,
                                path.includes('feedpage')
                                    ? DeletePost
                                    : DeleteComment
                            );
                        }}
                    >
                        Excluir
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            isFeedpage
                                ? handleEditButtonClickPost(id, listContent)
                                : handleEditButtonClickComment(id, listContent);
                        }}
                    >
                        Editar
                    </button>
                </div>
            ) : (
                ''
            )}

            {idPostToEdit === id && isEditing ? (
                <div>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleEdit(
                                id,
                                path.includes('feedpage')
                                    ? EditPost
                                    : EditComment
                            );
                        }}
                    >
                        <textarea
                            value={editingContent}
                            onChange={(event) =>
                                setEditingContent(event.target.value)
                            }
                            name='content'
                        />
                        <br />
                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            ) : (
                ''
            )}

            <IconVectorUp
                src={images.vector_up}
                onClick={(event) => {
                    event.preventDefault();
                    isFeedpage
                        ? handleLike(id, true, LikeAndDislikePost)
                        : handleLike(id, true, LikeAndDislikeComment);
                }}
            />
            <p>{likesCount}</p>

            <IconVectorDown
                src={images.vector_down}
                onClick={(event) => {
                    event.preventDefault();
                    isFeedpage
                        ? handleLike(id, false, LikeAndDislikePost)
                        : handleLike(id, false, LikeAndDislikeComment);
                }}
            />
            <p>{dislikesCount}</p>

            {boolenIsCurrentUser &&
                idPostMessageError === id &&
                errorMessagePost && <p>{errorMessagePost}</p>}

            {commentsCount ? (
                <div>
                    <p> COMENTÁRIOS: {commentsCount}</p>
                    <button
                        onClick={() => {
                            goToCommentsPage(navigator, id);
                        }}
                    >
                        Comentários
                    </button>
                </div>
            ) : (
                ''
            )}

            <hr />
        </ContainerContentCard>
    );
};
