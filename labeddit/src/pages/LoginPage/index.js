import { useForm } from '../../hooks/useForm';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import { Login } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigator = useNavigate();

    const [form, setForm, onChange, resetForm] = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = {
                email: form.email,
                password: form.password,
            };

            const response = await Login(body);
            // console.log('Resposta do login:', response);
            // console.log(response.message);
            // console.log(response.token);

            // localStorage.setItem('token', response.token);
            // goToFeedPage(navigator);

            // Verificar e imprimir a mensagem de resposta
            // response.message &&
            //     console.log('Mensagem de resposta do login:', response.message);

            // Verificar e imprimir o token de resposta
            response.token &&
                (() => {
                    // console.log('Token de resposta do login:', response.token);
                    localStorage.setItem('token', response.token);
                    goToFeedPage(navigator);
                })();
        } catch (error) {
            // console.log('Resposta de erro:', error);
            // console.log(error.response.data);
            // console.log(error.response.data[0].message);

            // console.log('Resposta de erro:', error);

            // error.request.response && console.log(error.request.response);

            // Verificar e imprimir os dados de resposta de erro
            error.response &&
                console.log('Dados de resposta de erro:', error.response.data);

            // error.response.data && console.log(error.response.data);
            // error.response.data[0].message && console.log(error.response.data[0].message);

            // Verificar e imprimir a mensagem de erro
            error.response?.data?.[0]?.message &&
                console.log(
                    'Mensagem de erro:',
                    error.response.data[0].message
                );
        }
    };

    return (
        <div>
            <h1>LoginPage</h1>

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
                    onClick={() => {
                        setForm({
                            email: 'amanda@gmail.com',
                            password: 'Amanda@123',
                        });
                    }}
                >
                    Autopreencher
                </button>
            </form>
        </div>
    );
};
