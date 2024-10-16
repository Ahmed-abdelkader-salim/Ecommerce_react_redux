import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import {IoChevronDown} from 'react-icons/io5'
import {Link} from 'react-router-dom';
import {navbar} from '../assets/data';
import {subPages} from '../assets/data';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import { useSelector } from 'react-redux';

const MidHeading = () => {
    const[isOpenNav, setIsOpenNav] = useState(false);

    const openNav = () => {
        setIsOpenNav(!isOpenNav);
    }
    const {totalItems} =  useSelector((state) => state.cart) 
    return (
    
        <>


            <div className="sticky  top-0 w-full bg-white z-20 ">
                <div className="container mx-auto py-3">
                    <div className="flex items-center justify-between">
                        <div className="block lg:hidden" onClick={openNav}>
                            <RxHamburgerMenu/>
                        </div>
                        <div>
                        <img src={logo} alt="logo"/>
                        </div>


                        <div className={`fixed top-0 left-0 h-full bg-white w-64 z-30 transfrom ${isOpenNav ? 'translate-x-0' : '-translate-x-full'}  lg:static lg:translate-x-0 lg:flex lg:items-center transition-transform  duration-300 ease-in-out -translate-x-0`}>
                            <div className="p-5 block lg:hidden" onClick={openNav}>
                                <IoClose className='text-2xl'/>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-6 capitalize">
                                {navbar.slice(0, 5).map((val, key) => (
                                    <div className="group relative px-4 font-bold uppercase" key={key}>
                                        {val.page ? <>
                                        
                                        <div className="flex items-center gap-2">
                                            <Link   to={val.path}>
                                            {val.nav}
                                            </Link>
                                            <button>
                                                <IoChevronDown/>
                                            </button>
                                        </div>
                                        <div className="absolute top-full w-max opacity-0 group-hover:opacity-100">
                                            <ul>
                                                {subPages.map((subPage, subKey) => (
                                                <li key={subKey} className='px-5 py-3 text-white shadow-md text-sm bg-green-700'>
                                                    
                                                <Link to={subPage.path} className='text-white'>{subPage.name}</Link>    
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        </> : <>
                                        
                                        <Link className='text-sm text-hover-color' to={val.path}>{val.nav}</Link>
                                        </>}
                                    </div>
                                ))}
                            </div>


                        </div>
                        <div className="flex items-center gap-4">
                        <FaSearch className='hover-text-green-500 text-gray-500'/>
                        <div className="relative">
                        <FaHeart/>    
                        <span className='absolute -top-2 left-3 h-4 w-4 bg-green-600 text-white grid place-items-center rounded-full text-xs'>
                            0
                        </span>    
                        </div> 
                        <div className="relative">
                        <GiShoppingBag/>    
                        <span className='absolute -top-2 left-3 h-4 w-4 bg-green-600 text-white grid place-items-center rounded-full text-xs'>
                            {totalItems}
                        </span> 
                        </div>   
                        </div>            

                    </div>
                </div>
            </div>

    
        
        </>
    )
}

export default MidHeading