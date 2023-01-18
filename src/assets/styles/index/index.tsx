import styled from '@emotion/styled';

type ImageFieldTypes = {
    backgroundImage: string;
};

export const MainField = styled.section(props => ({
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    padding: '40px',

    '& .yellow_line': {
        backgroundColor: props.theme.colors.primary,
        position: 'fixed',
        height: '200%',
        width: '100%',
        transform: 'rotate(-15deg)',
        left: '-83%',
        top: '-20%',
        zIndex: '-1'
    }
}));

export const ImageField = styled.div<ImageFieldTypes>(props => ({
    minWidth: '33%',
    height: '100%',
    borderRadius: '30px',
    background: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 0 7px rgb(0 0 0 / 90%)'
}));

export const AboutMeField = styled.div(props => ({
    maxWidth: '600px',
    margin: '0 auto',

    h1: {
        color: props.theme.colors.primary,
        fontSize: '2.8rem',
        fontFamily: 'Poppins'
    },

    h2: {
        color: props.theme.colors.blackAndWhite,
        fontSize: '2.8rem',
        fontFamily: 'Poppins'
    },

    p: {
        color: props.theme.colors.blackAndWhite,
        margin: '15px 0 28px',
        lineHeight: '35px'
    },

    '& .header': {
        paddingLeft: '70px',
        position: 'relative',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            top: '29px',
            height: '4px',
            width: '40px',
            borderRadius: '10px',
            background: props.theme.colors.primary
        }
    }
}));

export const ButtonField = styled.button(props => ({
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: '600',
    border: `2px solid ${props.theme.colors.primary}`,
    fontFamily: 'Poppins',
    fontSize: '1.1rem',
    paddingRight: '60px',
    width: '250px',
    height: '55px',

    i: {
        position: 'absolute',
        right: '-1px',
        top: '-1px',
        bottom: '0',
        width: '55px',
        height: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1rem',
        color: '#fff',
        borderRadius: '50px',
        backgroundColor: props.theme.colors.primary
    },

    '&::before': {
        zIndex: '-1',
        content: '""',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        transform: 'translateX(100%)',
        transition: 'all .3s ease-out',
        borderRadius: '50px',
        backgroundColor: props.theme.colors.primary
    },

    ':hover': {
        '&::before': {
            transform: 'translateX(0%)'
        }
    }
}));
