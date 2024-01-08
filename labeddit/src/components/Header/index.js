import { ButtonLogin, HeaderStyled } from './syled';
import images from '../../assets/importImages';

export const Header = () => {
    return (
        <HeaderStyled>
            {/* <ButtonLogin variant="header">Labeddit</ButtonLogin> */}
            <img alt="logo da labeddit" src={images.logo} />
            <ButtonLogin variant="header">Login</ButtonLogin>
        </HeaderStyled>
    );
};
