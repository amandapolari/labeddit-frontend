/* eslint-disable no-unused-vars */
import {
    ContainerAlert,
    ContainerButtons,
    ContainerContentCard,
    ContainerDeleteAndEdit,
    ContainerGoToComments,
    ContainerImgComments,
    ContainerLikesAndDislikes,
    ContainerTextContent,
    ContentText,
    IconVectorDown,
    IconVectorUp,
    ImageComment,
    TextAlert,
    TextCreatorContent,
} from './syled';

import images from '../../assets/importImages';
import { useContext } from 'react';
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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Alert, Grid } from '@mui/material';
import { theme } from '../../styles';

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

    const balancePositive = likesCount - dislikesCount;

    return (
        <ContainerContentCard>
            <TextCreatorContent>Enviado por: {creator}</TextCreatorContent>

            {idPostToEdit === id && isEditing ? (
                ''
            ) : (
                <ContainerTextContent
                    onClick={(event) => {
                        event.preventDefault();
                        isFeedpage && goToCommentsPage(navigator, id);
                    }}
                >
                    <ContentText>{content}</ContentText>
                </ContainerTextContent>
            )}

            <ContainerButtons>
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

                <ContainerLikesAndDislikes>
                    <IconVectorUp
                        src={images.vector_up}
                        onClick={(event) => {
                            event.preventDefault();
                            isFeedpage
                                ? handleLike(id, true, LikeAndDislikePost)
                                : handleLike(id, true, LikeAndDislikeComment);
                        }}
                    />
                    <p>{balancePositive < 0 ? 0 : balancePositive}</p>

                    <IconVectorDown
                        src={images.vector_down}
                        onClick={(event) => {
                            event.preventDefault();
                            isFeedpage
                                ? handleLike(id, false, LikeAndDislikePost)
                                : handleLike(id, false, LikeAndDislikeComment);
                        }}
                    />
                </ContainerLikesAndDislikes>

                {commentsCount !== undefined ? (
                    <ContainerImgComments>
                        <ImageComment
                            onClick={() => {
                                goToCommentsPage(navigator, id);
                            }}
                            src={images.comment_icon}
                        />
                        <p>{commentsCount}</p>
                    </ContainerImgComments>
                ) : (
                    ''
                )}

                {boolenIsCurrentUser ? (
                    <ContainerDeleteAndEdit>
                        <Grid item sx={{ color: theme.palette.gray[2] }}>
                            <ModeEditOutlineOutlinedIcon
                                onClick={(event) => {
                                    event.preventDefault();
                                    isFeedpage
                                        ? handleEditButtonClickPost(
                                              id,
                                              listContent
                                          )
                                        : handleEditButtonClickComment(
                                              id,
                                              listContent
                                          );
                                }}
                            />
                        </Grid>
                        <Grid item sx={{ color: theme.palette.gray[2] }}>
                            <DeleteOutlinedIcon
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleDelete(
                                        id,
                                        path.includes('feedpage')
                                            ? DeletePost
                                            : DeleteComment
                                    );
                                }}
                            />
                        </Grid>
                    </ContainerDeleteAndEdit>
                ) : (
                    ''
                )}

                {boolenIsCurrentUser &&
                    idPostMessageError === id &&
                    errorMessagePost && (
                        <ContainerAlert>
                            <Alert severity='warning'>{errorMessagePost}</Alert>
                        </ContainerAlert>
                    )}
            </ContainerButtons>
        </ContainerContentCard>
    );
};
