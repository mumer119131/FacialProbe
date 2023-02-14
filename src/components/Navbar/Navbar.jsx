import React from 'react'
import LOGO from '../../assets/fb_logo.png'
const Navbar = () => {
    return (
        <nav className='flex p-6 items-center justify-center gap-6 ' id='home'>
            <ul className='gap-4 hidden md:flex md:gap-1'>
                <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                    <a href="#home">Home</a>
                </li>
                <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                    <a href="#sketcher">Sketcher</a>
                </li>
                <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                    <a href="#team">Team</a>
                </li>
            </ul>
            <div className='flex items-center gap-1'>
                <img src={LOGO} width="40" height="40" />
                <h2 className='text-2xl font-bold'>Facial Probe</h2>
            </div>
            <ul className='gap-4 hidden md:flex md:gap-1'>
                <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                    <a href="#gallery">Gallery</a>
                </li>
                <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                    <a href="#technologies">Technologies</a>
                </li>
                <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                    <a href="#about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar