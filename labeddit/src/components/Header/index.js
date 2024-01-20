import {
    ButtonLogin,
    ButtonLogout,
    ContainerHeaderComponent,
    ImageClose,
} from './syled';
import images from '../../assets/importImages';

export const Header = ({
    isCommentPage,
    isSignupPage,
    isFeedOrCommentsPage,
}) => {
    return (
        <ContainerHeaderComponent>
            <ImageClose isCommentPage={isCommentPage} src={images.close_icon} />
            <img alt='logo da labeddit' src={images.logo} />
            <ButtonLogin isSignupPage={isSignupPage}>Entrar</ButtonLogin>
            <ButtonLogout isFeedOrCommentsPage={isFeedOrCommentsPage}>
                Logout
            </ButtonLogout>
        </ContainerHeaderComponent>
    );
};
