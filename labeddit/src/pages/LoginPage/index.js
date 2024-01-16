/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import { Login } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';

export const LoginPage = () => {
    const navigator = useNavigate();
    const context = useContext(GlobalContext);
    const { errorMessage, setErrorMessage } = context;

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
        <div>
            <h1>LoginPage</h1>

            {errorMessage && <p>{errorMessage}</p>}

            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                    />
                </label>
                <br />
                <button type="submit">Enviar</button>
                <br />
                <button type="button" onClick={resetForm}>
                    Resetar Formulário
                </button>

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
                </button>

                <br />
                <br />

                <button
                    type="button"
                    onClick={() => {
                        goToSignupPage(navigator);
                    }}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
};
