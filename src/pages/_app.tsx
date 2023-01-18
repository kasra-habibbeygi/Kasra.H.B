import type { AppProps } from 'next/app';
import React, { FC, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { wrapper } from '../state-manager/store';

// Config
import { darkTheme } from '../configs/theme';

// Assets
import '../assets/styles/globals/fontawsome.css';
import '../assets/styles/globals/general.css';

//Component
import LayoutProvider from '../components/layout/layout-provider';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [theme, setTheme] = useState<string>('dark');

    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'dark');
        }

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
            <LayoutProvider>
                <Component {...pageProps} />
            </LayoutProvider>
        </ThemeProvider>
    );
};

export default wrapper.withRedux(App);
