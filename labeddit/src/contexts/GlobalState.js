import GlobalContext from './GlobalContext';
import { useEffect, useState } from 'react';

const GlobalState = ({ children }) => {
    const [example, setExample] = useState([]);

    useEffect(() => {
        setExample(['name1', 'name2', 'name3', 'name4']);
    }, []);

    const datas = {
        example,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
