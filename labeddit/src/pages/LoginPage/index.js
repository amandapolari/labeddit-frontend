/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import { Login } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';

export const LoginPage = () => {
    const context = useContext(GlobalContext);
    const { errorMessage, setErrorMessage } = context;

    const navigator = useNavigate();

    const [form, setForm, onChange, resetForm] = useForm({
        email: '',
        password: '',
    });

    const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);

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
        } catch (error) {
            // console.log('Resposta de erro:', error);
        }
    };

    return (
        <div>
            <h1>LoginPage</h1>

            {errorMessage}

            <br />
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
