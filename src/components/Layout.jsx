import React from 'react';
import Hearder from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './login/Footer';

const Layout = () => {
    return (
        <div>
            <Hearder/>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;