import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { Signup } from '../../services/api';

export const SignupPage = () => {
    const navigator = useNavigate();

    const [form, onChange, resetForm] = useForm({
        nickname: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const body = {
                nickname: form.nickname,
                email: form.email,
                password: form.password,
            };

            const response = await Signup(body);

            response.message &&
                console.log(
                    'Mensagem de resposta do signup:',
                    response.message
                );

            response.token &&
                (() => {
                    console.log('Token de resposta do signup:', response.token);
                    localStorage.setItem('token', response.token);
                    goToFeedPage(navigator);
                })();
        } catch (error) {
            console.log('Resposta de erro:', error);

            error.response &&
                console.log('Dados de resposta de erro:', error.response.data);

            error.response?.data?.[0]?.message &&
                console.log(
                    'Mensagem de erro:',
                    error.response.data[0].message
                );
        }
    };

    return (
        <div>
            <p>SignupPage</p>

            <button
                type="button"
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
                    name="nickname"
                    value={form.nickname}
                    onChange={onChange}
                    placeholder="Apelido"
                    required
                    type="text"
                />

                <br />

                <label>E-mail</label>
                <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="E-mail"
                    required
                    type="email"
                />

                <br />
                <label>Senha</label>
                <input
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder="Senha"
                    required
                    type="text"
                />

                <br />
                <br />
                <button type={'submit'}>Cadastrar</button>
                <br />
                <button type="button" onClick={resetForm}>
                    Resetar Formulário
                </button>
            </form>
        </div>
    );
};
