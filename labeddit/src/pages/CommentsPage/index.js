/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { urlPosts } from '../../constants/constants';
import { CreateComment } from '../../services/api';
import { useForm } from '../../hooks/useForm';
import { Card, Error, Header, Loading } from '../../components';
import {
    BtnCreateComment,
    ContainerAlertCommentPage,
    ContainerCommentsPage,
    ContainerContentCommentsPage,
    ContainerFormsCommentsPage,
    DivisorComments,
    TextareaCreateComment,
} from './syled';
import { Alert } from '@mui/material';

export const CommentsPage = () => {
    const [form, setForm, onChange, resetForm] = useForm({
        content: '',
    });
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
        isCommentPage,
        setIsCommentPage,
        isSignupPage,
        setIsSignupPage,
        isFeedOrCommentsPage,
        setIsFeedOrCommentsPage,
    } = context;

    const path = window.location.pathname;

    useEffect(() => {
        if (path.includes('comments')) {
            setIsCommentPage(true);
        }
    }, [isUpdate]);

    useEffect(() => {
        if (path.includes('signup')) {
            setIsSignupPage(true);
        } else {
            setIsSignupPage(false);
        }
    }, [isUpdate]);

    useEffect(() => {
        if (path.includes('feed') || path.includes('comments')) {
            setIsFeedOrCommentsPage(true);
        } else {
            setIsFeedOrCommentsPage(false);
        }
    }, [isUpdate]);

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

    const handleSubmit = async () => {
        try {
            const body = {
                content: form.content,
            };
            const response = await CreateComment(body, id, setErrorMessage);
            response && resetForm();
            setIsUpdate(!isUpdate);
        } catch (error) {}
    };

    return (
        <ContainerCommentsPage>
            <Header
                isCommentPage={isCommentPage}
                isSignupPage={isSignupPage}
                isFeedOrCommentsPage={isFeedOrCommentsPage}
            />
            <ContainerContentCommentsPage>

                {isLoading ? (
                    <Loading />
                ) : isError ? (
                    <Error />
                ) : (
                    <div>
                        <Card
                            creator={
                                posts && posts.creator && posts.creator.nickname
                            }
                            id={posts.id}
                            content={posts.content}
                            boolenIsCurrentUser={posts.isCurrentUserComment}
                            likesCount={posts.likesCount}
                            dislikesCount={posts.dislikesCount}
                            postsCount={posts.postsCount}
                            listContent={posts}
                            commentsCount={posts.commentsCount}
                            isCardMain={true}
                        />
                    </div>
                )}

                <ContainerFormsCommentsPage>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <TextareaCreateComment
                            placeholder='Adicionar comentário'
                            value={form.content}
                            onChange={onChange}
                            name='content'
                        />
                        <br />
                        {errorMessage && (
                            <ContainerAlertCommentPage>
                                <Alert severity='warning'>{errorMessage}</Alert>
                            </ContainerAlertCommentPage>
                        )}
                        <BtnCreateComment type='submit'>
                            Responder
                        </BtnCreateComment>
                        <DivisorComments />
                    </form>
                </ContainerFormsCommentsPage>
                {isLoading ? (
                    <Loading />
                ) : isError ? (
                    <Error />
                ) : (
                    <div>
                        {posts.comments &&
                            posts.comments.map((comment) => (
                                <div key={comment.id}>
                                    <Card
                                        creator={comment.creator.nickname}
                                        id={comment.id}
                                        content={comment.content}
                                        boolenIsCurrentUser={
                                            comment.isCurrentUserComment
                                        }
                                        likesCount={comment.likesCount}
                                        dislikesCount={comment.dislikesCount}
                                        listContent={posts}
                                    />
                                </div>
                            ))}{' '}
                    </div>
                )}
            </ContainerContentCommentsPage>
        </ContainerCommentsPage>
    );
};
