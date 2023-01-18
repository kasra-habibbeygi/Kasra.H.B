import styled from '@emotion/styled';

export const SettingField = styled.div(props => ({
    position: 'fixed',
    top: '0',
    right: '0',
    padding: '10px 30px 0 0 ',
    display: 'flex',
    gap: '10px',

    i: {
        width: '50px',
        height: '50px',
        backgroundColor: props.theme.colors.background,
        color: props.theme.colors.blackAndWhite,
        fontSize: '1.3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50px',
        position: 'relative',
        zIndex: '1',
        transition: 'all linear 0.2s',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: props.theme.colors.activeBackground
        }
    }
}));
