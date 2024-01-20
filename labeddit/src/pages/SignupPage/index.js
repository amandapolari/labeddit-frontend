/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { Signup } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { Header, ThemeSelector } from '../../components';
import { ContainerPageSignup } from './syled';

export const SignupPage = () => {
    const context = useContext(GlobalContext);
    const {
        errorMessage,
        setErrorMessage,
        isCommentPage,
        setIsCommentPage,
        isUpdate,
        setIsUpdate,
        isSignupPage,
        setIsSignupPage,
        isFeedOrCommentsPage,
        setIsFeedOrCommentsPage,
    } = context;
    const navigator = useNavigate();

    const [form, setForm, onChange, resetForm] = useForm({
        nickname: '',
        email: '',
        password: '',
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

    const [isChecked, setIsChecked] = useState(false);

    const [messageCheckbox, setMessageCheckbox] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setMessageCheckbox('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isChecked) {
            setMessageCheckbox('Você precisa aceitar os termos de uso!');
            return;
        }

        try {
            const body = {
                nickname: form.nickname,
                email: form.email,
                password: form.password,
            };
            const response = await Signup(body, setErrorMessage);

            if (response.message && response.token) {
                (() => {
                    localStorage.setItem('token', response.token);
                    goToFeedPage(navigator);
                })();
            }
        } catch (error) {}
    };

    return (
        <ContainerPageSignup>
            <Header
                isCommentPage={isCommentPage}
                isSignupPage={isSignupPage}
                isFeedOrCommentsPage={isFeedOrCommentsPage}
            />
            {/* <ThemeSelector /> */}

            <p>SignupPage</p>

            <br />

            {errorMessage && <p>{errorMessage}</p>}

            <button
                type='button'
                onClick={() => {
                    goToLoginPage(navigator);
                }}
            >
                Entrar
            </button>
            <br />
            <br />

            <form onSubmit={handleSubmit}>
                <label>Apelido</label>
                <input
                    type='text'
                    name='nickname'
                    value={form.nickname}
                    onChange={onChange}
                />

                <br />

                <label>E-mail</label>
                <input
                    type='text'
                    name='email'
                    value={form.email}
                    onChange={onChange}
                />

                <br />
                <label>Senha</label>
                <input
                    type='text'
                    name='password'
                    value={form.password}
                    onChange={onChange}
                />

                <br />

                <div>
                    <label>
                        Concordo com os termos de uso
                        <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </label>

                    {messageCheckbox && <p>{messageCheckbox}</p>}
                </div>
                <br />
                <button type={'submit'}>Cadastrar</button>
                <br />
                <button type='button' onClick={resetForm}>
                    Resetar Formulário
                </button>
            </form>
        </ContainerPageSignup>
    );
};
