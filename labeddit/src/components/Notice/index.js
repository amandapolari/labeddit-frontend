import { NoticeContainerComponent } from './styled';
import CircularProgress from '@mui/material/CircularProgress';

export const Notice = () => {
    return (
        <NoticeContainerComponent>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient
                        id='my_gradient'
                        x1='0%'
                        y1='0%'
                        x2='0%'
                        y2='100%'
                    >
                        <stop offset='0%' stopColor='#FF6489' />
                        <stop offset='100%' stopColor='#F9B24E' />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress
                sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
            />
        </NoticeContainerComponent>
    );
};
