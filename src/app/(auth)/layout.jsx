import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayoutPage = ({ children }) => {
    return (
        <div className={`${montserrat.className} bg-[#F3F3F3]`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayoutPage;