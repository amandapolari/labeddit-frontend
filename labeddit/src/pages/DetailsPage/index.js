import { useNavigate } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';

export const DetailsPage = () => {
    const navigator = useNavigate();
    useProtectPage(navigator);
    return (
        <div>
            <p>DetailsPage</p>
        </div>
    );
};
