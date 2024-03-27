import Alert from '@mui/material/Alert';
import { Loading } from '../Loading';
import { NoticeContainerComponent } from './styled';

export const Notice = () => {
    // console.log(theme.palette.orange[1]);
    // <LinearProgress color={theme.palette.orange[1]} />

    return (
        <NoticeContainerComponent>
            <Alert severity='warning'>
                Acessando banco de dados. Isso pode levar alguns segundos, não
                se preocupe.
                <Loading />
            </Alert>
        </NoticeContainerComponent>
    );
};
