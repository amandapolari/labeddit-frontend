/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { goToFeedPage } from '../../routes/coordinator';
import { Signup } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { Header } from '../../components';
import {
    BtnCreateAccount,
    ContainerCheckbox,
    ContainerContentSignup,
    ContainerFormsSignup,
    ContainerPageSignup,
    ContainerTermsOfUse,
    InputCheckbox,
    LabelInputCheckbox,
    MessageAlertCheckbox,
    MessageAlertInputs,
    TextApresentation,
} from './syled';
import {
    Alert,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { theme } from '../../styles';

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

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailRegex.test(form.email)) {
            setErrorMessage('Por favor, adicione um e-mail válido');
            return;
        }

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
            <ContainerContentSignup>
                <TextApresentation>
                    Olá, boas vindas ao LabEddit ;)
                </TextApresentation>

                {errorMessage && (
                    <MessageAlertInputs>
                        <Alert severity='warning'>{errorMessage}</Alert>
                    </MessageAlertInputs>
                )}

                <ContainerFormsSignup>
                    <form onSubmit={handleSubmit}>
                        <FormControl
                            sx={{ width: '100%', marginTop: '1vh' }}
                            variant='outlined'
                        >
                            <InputLabel htmlFor='outlined-adornment-nickname'>
                                Apelido
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-nickname'
                                type='text'
                                label='Apelido'
                                name='nickname'
                                value={form.nickname}
                                onChange={onChange}
                            />
                        </FormControl>
                        <FormControl
                            sx={{ width: '100%', marginTop: '1vh' }}
                            variant='outlined'
                        >
                            <InputLabel htmlFor='outlined-adornment-email'>
                                E-mail
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-email'
                                type='email'
                                label='E-mail'
                                name='email'
                                value={form.email}
                                onChange={onChange}
                            />
                        </FormControl>
                        <FormControl
                            sx={{ width: '100%', marginTop: '1vh' }}
                            variant='outlined'
                        >
                            <InputLabel htmlFor='outlined-adornment-password'>
                                Senha
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-password'
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={form.password}
                                onChange={onChange}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge='end'
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Senha'
                            />
                        </FormControl>
                        {messageCheckbox && (
                            <MessageAlertCheckbox>
                                <Alert severity='warning'>
                                    {messageCheckbox}
                                </Alert>
                            </MessageAlertCheckbox>
                        )}
                        <ContainerTermsOfUse>
                            Ao continuar, você concorda com o nosso{' '}
                            <b style={{ color: theme.palette.blue[1] }}>
                                Contrato de Usuário
                            </b>{' '}
                            e nossa{' '}
                            <b style={{ color: theme.palette.blue[1] }}>
                                Política de Privacidade .
                            </b>
                            <ContainerCheckbox>
                                <InputCheckbox
                                    type='checkbox'
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <LabelInputCheckbox>
                                    Eu concordo em receber emails sobre coisas
                                    legais no Labeddit
                                </LabelInputCheckbox>
                            </ContainerCheckbox>
                        </ContainerTermsOfUse>

                        <BtnCreateAccount type={'submit'}>
                            Cadastrar
                        </BtnCreateAccount>

                        {/* <button type='button' onClick={resetForm}>Resetar Formulário</button> */}
                    </form>
                </ContainerFormsSignup>
            </ContainerContentSignup>
        </ContainerPageSignup>
    );
};
