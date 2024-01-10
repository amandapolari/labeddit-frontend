import { useNavigate } from 'react-router';
import { useProtectPage } from '../../hooks/useProtectPage';
import useRequestData from '../../hooks/useRequestData';

export const FeedPage = () => {
    // Protege a página de usuários não logados:
    const navigator = useNavigate();
    useProtectPage(navigator);

    const url = `posts`;
    const [data, isLoading, isError] = useRequestData(url);

    console.log('dados:', data);
    console.log('carregando:', isLoading);
    console.log('erro: ', isError);

    return (
        <div>
            <p>FeedPage</p>
        </div>
    );
};
