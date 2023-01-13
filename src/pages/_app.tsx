import type { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { wrapper } from '../state-manager/store';

// Config
import { theme } from '../configs/theme';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const darkModeTheme = createTheme(theme('light'));

    return (
        <ThemeProvider theme={darkModeTheme}>
            <Toaster
                position='bottom-right'
                containerStyle={{
                    width: '42px',
                    zIndex: 9999
                }}
            />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default wrapper.withRedux(App);
