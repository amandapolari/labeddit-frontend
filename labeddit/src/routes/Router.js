import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import { PATH } from '../constants/constants';

import {
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage,
    ErrorsPage,
} from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            {PATH !== '/' ? <Header /> : ''}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/feedpage" element={<FeedPage />} />
                <Route path="/comments/:id" element={<CommentsPage />} />
                <Route path="*" element={<ErrorsPage />} />
            </Routes>
        </BrowserRouter>
    );
};
