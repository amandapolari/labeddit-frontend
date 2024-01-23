/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import { Login } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';
import images from '../../assets/importImages';
import {
    Alert,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import {
    ButtonCreateAccount,
    ButtonLoginPage,
    ContainerAlertLogin,
    ContainerButtonsLogin,
    ContainerContentLogin,
    ContainerForms,
    ContainerLogoAndTitle,
    ContainerPageLogin,
    DivisorLoginPage,
    Hr,
    ImageLogo,
    SubtitleLogin,
} from './syled';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {
    const navigator = useNavigate();
    const context = useContext(GlobalContext);
    const { errorMessage, setErrorMessage } = context;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [form, setForm, onChange, resetForm] = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        setErrorMessage('');
    }, [form]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = {
                email: form.email,
                password: form.password,
            };

            const response = await Login(body, setErrorMessage);
            if (response.message && response.token) {
                (() => {
                    localStorage.setItem('token', response.token);
                    goToFeedPage(navigator);
                })();
            }
        } catch (error) {}
    };

    return (
        <ContainerPageLogin>
            <ContainerLogoAndTitle>
                <ImageLogo alt='logo da labeddit' src={images.logo_and_title} />
                <SubtitleLogin>
                    O projeto de rede social da Labenu
                </SubtitleLogin>
            </ContainerLogoAndTitle>

            <ContainerForms>
                <ContainerContentLogin>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ width: '80vw' }} variant='outlined'>
                            <InputLabel htmlFor='outlined-adornment-email'>
                                E-mail
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-email'
                                type='text'
                                name='email'
                                value={form.email}
                                onChange={onChange}
                                endAdornment={
                                    <InputAdornment position='end'></InputAdornment>
                                }
                                label='E-mail'
                            />
                        </FormControl>
                        <FormControl
                            sx={{ width: '80vw', marginTop: '1vh' }}
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

                        {errorMessage && (
                            <ContainerAlertLogin>
                                <Alert severity='warning'>{errorMessage}</Alert>
                            </ContainerAlertLogin>
                        )}

                        <ContainerButtonsLogin>
                            <ButtonLoginPage type='submit'>
                                Continuar
                            </ButtonLoginPage>

                            {/* <button type='button' onClick={resetForm}>
                    Resetar Formulário
                </button> */}
                            {/* 
                <h3>Conta de teste</h3>
                <p>amanda@gmail.com</p>
                <p>Amanda@123</p>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setForm({
                            email: 'amanda@gmail.com',
                            password: 'Amanda@123',
                        });
                    }}
                >
                    Autopreencher
                </button> */}

                            <DivisorLoginPage />

                            <ButtonCreateAccount
                                type='button'
                                onClick={() => {
                                    goToSignupPage(navigator);
                                }}
                            >
                                Crie uma conta!
                            </ButtonCreateAccount>
                        </ContainerButtonsLogin>
                    </form>
                </ContainerContentLogin>
            </ContainerForms>
        </ContainerPageLogin>
    );
};
