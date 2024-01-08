import { Router } from './routes';
import GlobalState from './contexts/GlobalState';

const App = () => {
    return (
        <GlobalState>
            <Router />
            <p>Projeto funcionando!</p>
        </GlobalState>
    );
};

export default App;
