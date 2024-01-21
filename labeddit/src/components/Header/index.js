import {
    ButtonLogin,
    ButtonLogout,
    ContainerHeaderComponent,
    ImageClose,
    ImageLogo,
} from './syled';
import images from '../../assets/importImages';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../constants/constants';

export const Header = ({
    isCommentPage,
    isSignupPage,
    isFeedOrCommentsPage,
}) => {
    const navigator = useNavigate();
    return (
        <ContainerHeaderComponent>
            <ImageClose isCommentPage={isCommentPage} src={images.close_icon} />
            <ImageLogo alt='logo da labeddit' src={images.logo} />
            <ButtonLogin
                onClick={(event) => {
                    event.preventDefault();
                    goToLoginPage(navigator);
                }}
                isSignupPage={isSignupPage}
            >
                Entrar
            </ButtonLogin>
            <ButtonLogout
                onClick={(event) => {
                    event.preventDefault();
                    Logout(navigator);
                }}
                isFeedOrCommentsPage={isFeedOrCommentsPage}
            >
                Logout
            </ButtonLogout>
        </ContainerHeaderComponent>
    );
};

/*
            <button
                onClick={(event) => {
                    event.preventDefault();
                    Logout(navigator);
                }}
            >
                Sair
            </button>
*/
