import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components';

import {
    LoginPage,
    SignupPage,
    FeedPage,
    DetailsPage,
    ErrorsPage,
} from '../pages';
import { PATH } from '../constants/constants';

export const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            {PATH !== '/' ? <Header /> : ''}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/feedpage" element={<FeedPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="*" element={<ErrorsPage />} />
            </Routes>
        </BrowserRouter>
    );
};
