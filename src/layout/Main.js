import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';
import './Main.css'


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='game'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;