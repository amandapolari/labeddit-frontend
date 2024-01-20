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
                onClick={() => {
                    goToLoginPage(navigator);
                }}
                isSignupPage={isSignupPage}
            >
                Entrar
            </ButtonLogin>
            <ButtonLogout isFeedOrCommentsPage={isFeedOrCommentsPage}>
                Logout
            </ButtonLogout>
        </ContainerHeaderComponent>
    );
};
