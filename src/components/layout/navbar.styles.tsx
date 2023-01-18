import styled from '@emotion/styled';

export const NavbarField = styled.nav(props => ({
    position: 'fixed',
    right: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    paddingRight: '30px',

    ul: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        flexDirection: 'column'
    },

    a: {
        position: 'relative',

        '&:hover': {
            i: {
                backgroundColor: props.theme.colors.primary
            },

            h3: {
                opacity: '1',
                pointerEvents: 'initial',
                right: '27px',
                borderRadius: '30px 0 0 30px'
            }
        }
    },

    i: {
        width: '50px',
        height: '50px',
        backgroundColor: props.theme.colors.background,
        color: props.theme.colors.blackAndWhite,
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50px',
        position: 'relative',
        zIndex: '1',
        transition: 'all linear 0.2s'
    },

    h3: {
        opacity: '0',
        pointerEvents: 'none',
        position: 'absolute',
        fontSize: '1rem',
        borderRadius: '30px',
        width: 'max-content',
        height: '50px',
        backgroundColor: props.theme.colors.primary,
        top: '0',
        right: '0',
        color: 'white',
        fontFamily: 'Poppins',
        padding: '0 30px 0 25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '300',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        transition: 'all linear 0.2s'
    }
}));
