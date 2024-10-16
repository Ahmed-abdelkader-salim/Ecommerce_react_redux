import Banner from '../common/Banner';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Cat} from '../assets/data';
import {Link} from 'react-router-dom'
import LatestProducts from '../components/LatestProducts';
import Trending from '../components/Trending';
import { useState } from 'react';
const Shop = () => {

    const[value, setValue] = useState(10);

    const onChange = (newVal) => {
        setValue(newVal);
    }

    return (
        <>
        <Banner title={"Shop"} link={'shop'}/>

        <div className="w-10/12 m-auto mt-12">
            <div className="block md:flex lg:flex">
                <div className="w-full md:w-1/4">
                    <div className="sidebar">
                        <div className="sidebar_item mb-4">
                            <h4 className='text-2xl font-bold mb-4'>Department</h4>
                            {Cat.map((val, key) => (
                                <li className='list-none py-3' key={key}>
                                    <Link to='' className='text-black'>{val.title}</Link>
                                </li>
                            ))}
                        </div>
                        <div className="sidebar_item w-4/5">
                            <h4 className='text-2xl font-bold mb-4'>Price</h4>
                            <Slider min={0} max={100} value={value} onChange={onChange}/>
                            <strong>${0} - ${value}</strong>
                        </div>
                        <div className="sidebar_item w-4/5 mt-4">
                            <LatestProducts/>
                        </div>

                    </div>

                </div>


                <div className="w-full md:w-3/4">
                    <Trending maxValue={value}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop