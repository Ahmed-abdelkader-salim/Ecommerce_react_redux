import Title from '../common/Title';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrendSlider } from '../assets/data'
import { useLocation } from 'react-router-dom';


const LatestProducts = () => {
    var settings = {
        rows:3,
        adaptiveHeight: true,
    };

    const location = useLocation();
    return (
        
        <>
        <div className={`${location.pathname === "/" ? "lg:w-1/3" : "w-full"}`}>
            <div className="no-line">

                <Title title={"Latest Products"}/>
            </div>

            <div className="mt-8 trend">
                <Slider {...settings}>
                    {TrendSlider.map((val, key) => (
                        <div className="flex gap-4 items-center mb-3" key={key}>
                            <div className="overflow-hidden w-32 h-20">
                                <img src={val.img} className='w-full  object-cover h-full' alt="" />
                            </div>

                            <div className='flex-1'>
                                <h3 className='text-sm font-semibold'>{val.title}</h3>
                                <strong className='text-lg'>${val.price}</strong>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    )
}

export default LatestProducts