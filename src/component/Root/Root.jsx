import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <h3>Hello from Root</h3>
            <NavBar></NavBar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;