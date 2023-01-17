import type { AppProps } from 'next/app';
import React, { FC, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { wrapper } from '../state-manager/store';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';

// Config
import { darkTheme } from '../configs/theme';

// Assets
import '../assets/styles/globals/fontawsome.css';
import '../assets/styles/globals/general.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [theme, setTheme] = useState<string>('dark');

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'dark');
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <Global
                styles={{
                    body: {
                        backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF'
                    }
                }}
            />
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
