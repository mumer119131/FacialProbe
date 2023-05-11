import React, {useState, useEffect} from 'react'
import LOGO from '../../assets/fb_logo.png'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiSketchup} from 'react-icons/si'
import {RiTeamFill} from 'react-icons/ri'
import {GrGallery} from 'react-icons/gr'
import {GrTechnology} from 'react-icons/gr'
import {AiFillInfoCircle} from 'react-icons/ai'
const Navbar = () => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <nav className={`flex fixed w-full top-0 z-10 p-6 items-center justify-center gap-6 ${scrollNav ? 'glassmorphism' : ''}`} id='home'>
                <ul className='gap-4 hidden md:flex md:gap-1'>
                    <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                        <Link to="/sketcher">Sketcher</Link>
                    </li>
                    <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                        <Link to="/team">Team</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-1'>
                    <img src={LOGO} width="40" height="40" />
                    <h2 className='text-2xl font-bold'>Facial Probe</h2>
                </div>
                <ul className='gap-4 hidden md:flex md:gap-1'>
                    <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                        <Link to="/technologies">Technologies</Link>
                    </li>
                    <li className='hover:bg-primary hover:text-white py-2 px-4 rounded-full transition ease-in-out'>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <nav className={`flex min-w-[330px] fixed left-[50%] translate-x-[-50%] rounded-full w-[90vw] bottom-2 z-10 p-6 items-center justify-around gap-2 glassmorphism`} id='home'>
                <ul className='gap-4 flex justify-between w-full md:hidden md:gap-1'>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/"><AiFillHome className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/sketcher"><SiSketchup  className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/team"><RiTeamFill  className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/gallery"><GrGallery className='text-xl' /></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/technologies"><GrTechnology className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/about"><AiFillInfoCircle className='text-xl' /></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar