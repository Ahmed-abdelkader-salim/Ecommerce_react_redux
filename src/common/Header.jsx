import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import {Link, useLocation} from 'react-router-dom';
import {Cat} from '../assets/data';
import banner from '../assets/img/hero/banner.jpg'
const Header = () => {
    const location = useLocation();

    const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);

    const toggleDropMenu = () => {
        setDropDownMenuOpen(!dropDownMenuOpen);
    }

    useEffect(() => {
        if(window.location.pathname === '/'){
            setDropDownMenuOpen(true);
        }else{
            setDropDownMenuOpen(false);

        }
    }, [location])


    return (
        <>
        <div className="w-10/12 m-auto">   
            <div className="lg:flex items-start gap-4">

                <div className="lg:w-1/4 z-10  border">
                    <div onClick={() => toggleDropMenu()} className="flex items-center justify-evenly text-white bg-green-700 p-3">
                        <GiHamburgerMenu />

                        <div>
                            <span className='cursor-pointer font-extrabold text-xl whitespace-nowrap'>All Categories</span>
                        </div>
                        <button className='bg-transparent text-white' style={{outline:'none', border:'0',}}>
                            {dropDownMenuOpen ? <IoChevronDown/> :  <IoChevronUp/>}
                        </button>
                    </div>

                    <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${dropDownMenuOpen ? 'mx-h-96' : 'max-h-0'}`}>
                        <ul>
                            {Cat.map((val, i) => (
                                <li key={i} className='py-3 bg-white shadow-md px-5 hover:text-green-500'>
                                    <Link className='text-black text-decoration-none font-bold'>{val.category}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className=" lg:w-3/4">
                    <div className="lg:flex items-center mb-3">
                        <div className="flex gap-3  items-center justify-evenly text-black p-3 border">
                            <div>
                                <span className='font-bold whitespace-nowrap'>
                                    All Categories 
                                </span>
                            </div>
                            <IoChevronDown className='cursor-pointer'/>
                        </div>
                
                        <div className='w-full'>
                            <input type="text"  className='w-full border p-3 focus:outline-none' placeholder='what do you need ?' />
                        </div>
                        <button className='border text-white p-3 bg-green-600 font-extrabold'>
                            Search
                        </button>
                    </div>


                    <div className={`relative ${location.pathname === '/' ? '' : 'hidden'}`}>
                        <div className="lg:w-1/3 absolute top-48 lg:-translate-y-1/2 left-10 text-white">
                            <h4 className='text-xl   font-bold text-green-500'>FRUIT FREASH</h4>
                            <h1 className="fw-bold text-4xl  text-black mb-2 mt-2">
                                Vegetables 100% Organic
                            </h1>
                            <p className='text-gray-400'>Free Pickup and Delivery Avilable</p>
                            <button className='bg-btn-color px-4 py-3 mt-3 text-white font-extrabold bg-green-600'>Shop Now</button>
                        </div>

                        <div>
                            <img src={banner} alt="banner img"  className='w-full'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Header