import React, { FC, ReactNode } from 'react';
import './layout.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <div className="wrapper">{children}</div>
        </div>
    );
};

export default Layout;
