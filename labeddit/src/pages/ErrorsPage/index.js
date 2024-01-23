import { Header } from '../../components';
import { Alert, Typography } from '@mui/material';
import { ErrorContainer, MessageError } from './styled';

export const ErrorsPage = () => {
    return (
        <div>
            <Header isErrorPage={true} />
            <ErrorContainer>
                <Typography variant='h5' color='error' gutterBottom>
                    Página não encontrada
                </Typography>
                <MessageError>
                    <Alert severity='error'>
                        A página que você está procurando não foi encontrada.
                    </Alert>
                </MessageError>
            </ErrorContainer>
        </div>
    );
};
