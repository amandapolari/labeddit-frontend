import React from 'react';
import { Alert, Typography } from '@mui/material';
import { MessageError } from '../../pages/ErrorsPage/styled';
import { ErrorContainerComponent } from './styled';

export const Error = () => {
    return (
        <div>
            <ErrorContainerComponent>
                <Typography variant='h5' color='error' gutterBottom>
                    Página não encontrada
                </Typography>
                <MessageError>
                    <Alert severity='error'>
                        A página que você está procurando não foi encontrada.
                    </Alert>
                </MessageError>
            </ErrorContainerComponent>
        </div>
    );
};
