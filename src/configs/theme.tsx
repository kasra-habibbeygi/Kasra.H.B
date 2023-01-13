export const theme = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                color: {
                    test : 'red'
                }
            }
            : {
                color: {
                    test : 'red'                    
                }
            })
    }
});
