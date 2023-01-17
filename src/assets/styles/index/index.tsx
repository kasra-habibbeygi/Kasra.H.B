import styled from '@emotion/styled';

type ImageFieldTypes = {
    backgroundImage: string;
};

export const MainField = styled.main(props => ({
    display: 'flex',
    alignItems: 'center',
    gap: '300px',
    height: '100vh',
    padding: '40px',

    '& .yellow_line': {
        backgroundColor: props.theme.colors.primary,
        position: 'fixed',
        height: '200%',
        width: '1500px',
        transform: 'rotate(-15deg)',
        left: '-1100px',
        top: '-20%',
        zIndex: '-1'
    }
}));

export const ImageField = styled.div<ImageFieldTypes>(props => ({
    minWidth: '650px',
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
