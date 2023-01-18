import React, { FC, ReactNode } from 'react';

//Component
import Navbar from './navbar';
import Setting from './setting';

interface componentTypes {
    children: ReactNode;
}

const LayoutProvider: FC<componentTypes> = ({ children }) => {
    return (
        <main>
            <Navbar />
            <Setting />
            {children}
        </main>
    );
};

export default LayoutProvider;
