import { useState } from "react";
import { close , logo , menu } from '../assets'

import { navLinks } from "../constants/index.js";

export const Navbar = () => {
    const [ toggle , setToggle ] = useState ( false );
    return (
        <nav className="w-full flex py-6  z-10 justify-between items-center navbar">
        <img src={ logo } alt="logo" className="w-[124px] h-[32px]"/>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            { navLinks.map ( ( nav , index ) => ( <li key={ nav.id }
                                                      className={ `font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${ index === navLinks.length - 1 ? "0" : "mr-10" }` }>
                <a href={ `#${ nav.id }` }>{ nav.title }</a>
            </li> ) ) }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={ toggle ? close : menu } alt="toggle" className="w-[20px] h-[20px] object-contain "
                 onClick={ () => setToggle ( ( prev ) => ! prev ) }/>
            <div
                className={ `${ toggle ? 'flex' : 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar min-w-[240px]` }>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    { navLinks.map ( ( nav , index ) => ( <li key={ nav.id }
                                                              className={ `font-poppins font-normal cursor-pointer text-[16px] text-white  ${ index === navLinks.length - 1 ? "0" : "mb-4" }` }>
                        <a href={ `#${ nav.id }` } onClick={ () => setToggle ( false ) }>{ nav.title }</a>
                    </li> ) ) }

                </ul>
            </div>
        </div>
        <div className="fixed top-0 left-0 h-full w-screen -z-10" onClick={ () => setToggle ( false ) }>
        </div>
    </nav> )
}