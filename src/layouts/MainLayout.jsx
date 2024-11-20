import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
             <Toaster />
            {/* Navbar */}
            <div className='h-[125px]'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-310px)]  container mx-auto '>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;