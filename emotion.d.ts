/* eslint-disable no-unused-vars */
import '@emotion/react';

declare module '@emotion/react' {
    interface Theme {
        mode: string;
        palette: {
            color: {
                test: string;
            };
        };
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        mode: string;
        palette: {
            color: {
                test: string;
            };
        };
    }
}
