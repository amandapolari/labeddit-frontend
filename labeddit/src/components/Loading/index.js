import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { ContainerLoading } from './styled';

export const Loading = () => {
    return (
        <ContainerLoading>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color='inherit' />
            </Stack>
        </ContainerLoading>
    );
};
