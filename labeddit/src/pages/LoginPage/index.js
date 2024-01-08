import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

export const LoginPage = () => {
    const context = useContext(GlobalContext);
    console.log(context);

    return (
        <div>
            <p>LoginPage</p>
        </div>
    );
};
