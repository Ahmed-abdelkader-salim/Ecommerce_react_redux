import {Trend} from '../assets/data';
import Title from '../common/Title';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoGitCompareSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlicer';
import banner1 from '../assets/img/banner/banner-1.jpg';
import banner2 from '../assets/img/banner/banner-2.jpg';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const Trending = ({maxValue}) => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        const qty = 1;
        let totalPrice = qty * product.price;

        const tempProduct = {
            ...product,
            quantity: 1,
            totalPrice,
        };

        dispatch(addToCart(tempProduct))

    };

    const [trendItem, setTrendItem] = useState(Trend);
    const [ActiveItem, setActiveItem] = useState("all");

    const Filters = (item) => {
        setActiveItem(item);
        let filterItems = Trend;

        if(item !== 'all'){
            filterItems = filterItems.filter((data) => data.category === item);
        }
        if(maxValue){
            filterItems = filterItems.filter((data) => data.price <= maxValue);
        }

        setTrendItem(filterItems);

    }

    useEffect(()=> {
        Filters(ActiveItem)
    },[maxValue])
    const location = useLocation();
    return (
        <>
            <div className={`${location === "/" ?  "w-10/12 m-auto pb-16" : "w-full"}`}>
                <div className="flex justify-center flex-col items-center">
                    <Title title={"Trending Products"} />

                    <ul className={`${location.pathname === "/" ? "flex  justify-center w-full mt-4 text-center" : "hidden"}`}>
                        <li className={`px-4 py-1 ${ActiveItem === 'all' ? 'active' : ''}`} onClick={() => Filters('all') }>
                            <span  className='cursor-pointer'>All</span >
                        </li>
                        <li className={`px-4 py-1 ${ActiveItem === 'oranges' ? 'active' : ''}`} onClick={() => Filters('oranges') }>
                            <span  className='cursor-pointer'>Oranges</span >
                        </li>
                        <li className={`px-4 py-1 ${ActiveItem === 'freashmeat' ? 'active' : ''}`} onClick={() => Filters('freashmeat') }>
                            <span  className='cursor-pointer'>Freash Meat</span >
                        </li>
                        <li className={`px-4 py-1 ${ActiveItem === 'vegetables' ? 'active' : ''}`} onClick={() => Filters('vegetables') }>
                            <span  className='cursor-pointer'>Vegetables</span >
                        </li>
                        <li className={`px-4 py-1 ${ActiveItem === 'fastfood' ? 'active' : ''}`} onClick={() => Filters('fastfood') }>
                            <span className='cursor-pointer' >Fastfood</span >
                        </li>
                    </ul>

                </div>
                <div className={`${location.pathname === "/" ? "grid grid-cols-4 mt-4 gap-4": "grid grid-cols-3 mt-4 gap-4 "}`}>
                {trendItem.map((val, key) => (
                    <div  key={key}>

            
                        <div className="relative py-4 mt-3 px-4 group">

                            <div className="overflow-hidden">
                                <img src={val.img} alt="ee" className='w-full h-full  hover:scale-110 transition-all ease-in-out duration-300'/>
                            </div>


                            <div className="absolute text-white bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className='bg-green-500 rounded-full mr-1 p-2'><FaHeart/></button>
                                <button className='bg-green-500 rounded-full mr-1 p-2'><IoGitCompareSharp/></button>
                                <button className='bg-green-500 rounded-full mr-1 p-2' onClick={() => handleAddToCart(val)}><FaShoppingCart/></button>
                            </div>

                        </div>
                        <div className='text-center mt-2'>
                            <h3 className="text-xl font-semibold">{val.title}</h3>
                            <strong>${val.price}</strong>

                        </div>
                    </div>
                ))}
                </div>

            </div>
        
        <div className={`${location.pathname === '/' ? "w-10/12 m-auto grid grid-cols-2 gap-6 py-10" : "hidden"}`}>

                <div className="child">
                    <img src={banner1} alt="" />
                </div>
                <div className="child">
                    <img src={banner2} alt="" />
                </div>

                
        </div>
        </>
    )
}

Trending.propTypes = {
    maxValue:PropTypes.number.isRequired,
}

export default Trending