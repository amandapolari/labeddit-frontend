/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';
import { urlPosts } from '../../constants/constants';
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { CreatePost } from '../../services/api';
import GlobalContext from '../../contexts/GlobalContext';
import { Card, Error, Header, Loading, PostCard } from '../../components';
import {
    BtnCreatePost,
    ContainerAlertFeedpage,
    ContainerContentFeedpage,
    ContainerFeedpage,
    ContainerFormsFeedpage,
    DivisorFeed,
    TextareaCreatePost,
} from './syled';
import { Alert } from '@mui/material';

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
        isCommentPage,
        setIsCommentPage,
        isSignupPage,
        setIsSignupPage,
        isFeedOrCommentsPage,
        setIsFeedOrCommentsPage,
    } = context;

    const [form, setForm, onChange, resetForm] = useForm({
        content: '',
    });

    useEffect(() => {
        setErrorMessage('');
    }, [form]);

    const path = window.location.pathname;

    useEffect(() => {
        if (path.includes('comments')) {
            setIsCommentPage(true);
        } else {
            setIsCommentPage(false);
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

    const [data, isLoading, isError] = useRequestData(urlPosts, isUpdate);

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

    return (
        <ContainerFeedpage>
            <Header
                isCommentPage={isCommentPage}
                isSignupPage={isSignupPage}
                isFeedOrCommentsPage={isFeedOrCommentsPage}
            />
            <ContainerContentFeedpage>
                <ContainerFormsFeedpage>
                    <form onSubmit={handleSubmit}>
                        <TextareaCreatePost
                            placeholder='Escreva seu post...'
                            value={form.content}
                            onChange={onChange}
                            name='content'
                        />

                        {errorMessage && (
                            <ContainerAlertFeedpage>
                                <Alert severity='warning'>{errorMessage}</Alert>
                            </ContainerAlertFeedpage>
                        )}
                        <BtnCreatePost type='submit'>Postar</BtnCreatePost>
                    </form>
                    <DivisorFeed />
                </ContainerFormsFeedpage>
                {isLoading ? (
                    <Loading />
                ) : isError ? (
                    <Error />
                ) : (
                    posts &&
                    posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <Card
                                    creator={post.creator.nickname}
                                    id={post.id}
                                    content={post.content}
                                    boolenIsCurrentUser={post.isCurrentUserPost}
                                    likesCount={post.likesCount}
                                    dislikesCount={post.dislikesCount}
                                    commentsCount={post.commentsCount}
                                    listContent={posts}
                                />
                            </div>
                        );
                    })
                )}
            </ContainerContentFeedpage>
        </ContainerFeedpage>
    );
};
