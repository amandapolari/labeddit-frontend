/* eslint-disable no-unused-vars */
// Exemplo de estrutura:

import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({ children }) => {
    const [example, setExample] = useState([]);

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
