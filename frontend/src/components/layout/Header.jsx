import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BasicButton from '../ui/BasicButton';
import Searchbar from './Searchbar';
import Menu from './Menu';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.user);
    const theme = "dark";
    const pathname = location.pathname;
    
    if (pathname === "/login" || pathname === "/register") return null;

    return (
        <header className='w-full relative transition-all duration-500 z-50 border-borderColor false top-0'>
            <div className="flex justify-between items-center xl:w-2/3 lg:w-4/5 w-full py-4 lg:px-0 lg:mx-auto md:px-8 px-4">
                <h1 className='font-bold text-sm sm:text-xl flex'>
                    <span className='text-primary-logo'>Real</span>
                    <span className='text-secondary-logo'>Estate</span>
                </h1>
                <div className="md:block hidden">
                    {location.pathname !== "/" && <Searchbar onWelcome={false} />}
                </div>
                <Menu />
                <div className="md:flex hidden gap-2">
                    {currentUser ? (
                        <UserMenu />
                    ) : (
                        <BasicButton variant="outlined"
                            onClick={() => { navigate("/login"); }}
                            className={
                                theme === "dark" ||
                                    location.pathname === "/"
                                    ? "border-2 text-white border-white hover:text-primary hover:bg-white hover:border-white bg-transparent"
                                    : "border-2 text-primary bg-transparent border-primary hover:text-white hover:bg-primary hover:border-primary"
                            }
                        >
                            Login
                        </BasicButton>
                    )}
                    <BasicButton variant="contained"
                        onClick={() => { navigate("/create-listing"); }}
                    >
                        New Listing
                    </BasicButton>
                </div>
            </div>
        </header>
    )
}

export default Header