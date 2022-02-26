import { useState } from 'react';
import { HiMenu, HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo2.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}

        </li>
    )

}

const Navbar = () => {
    const [toggleMenu, setToggleMenue] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Patient", "about us"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />

                ))}
                <li className="bg-[#008080] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#009999]">
                    Login 
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                  ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenue(false)} />
                  : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenue(true)} />}
                {toggleMenu && (
                  <ul
                    className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                    "
                  >
                    <li className="text-xl w-full my-2">
                        <AiOutlineClose onClick={() => setToggleMenue(false)} />
                    </li>
                    {["Doctor", "Patient"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />

                ))}
                  </ul>
                    
                )}
            </div>
        </nav>
        
    );
}

export default Navbar;