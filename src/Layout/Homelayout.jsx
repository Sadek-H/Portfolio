import React from 'react';

import { Outlet } from 'react-router';

import Navbar from '../Pages/Navbar';
import Footer from '../Components/Footer';


const Homelayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;