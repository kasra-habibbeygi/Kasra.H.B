import Link from 'next/link';
import React from 'react';

// Assets
import * as S from './navbar.styles';

const Navbar = () => {
    return (
        <S.NavbarField>
            <ul>
                <li>
                    <Link href='#'>
                        <i className='fa-sharp fa-solid fa-house-chimney'></i>
                        <h3>Home</h3>
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        <i className='fa-solid fa-user'></i>
                        <h3>About</h3>
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        <i className='fa-regular fa-code'></i>
                        <h3>Portfolio</h3>
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        <i className='fa-solid fa-envelope'></i>
                        <h3>Contact</h3>
                    </Link>
                </li>
            </ul>
        </S.NavbarField>
    );
};

export default Navbar;
