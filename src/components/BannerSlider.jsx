import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cat } from '../assets/data'
const BannerSlider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                }
            }

        ]
    };

    return (
        <>
        <div className="w-10/12 m-auto">
        
        <Slider {...settings}>
            {Cat.map((val, key) => (
                <div className="relative py-4 mt-3 px-4" key={key}>

                    <div className="overflow-hidden">
                        <img src={val.img} alt="ee" className='w-full h-full'/>
                    </div>

                    <div className="absolute bottom-8 px-4 py-3 left-1/2 -translate-x-1/2 bg-white">
                        <p className="text-xl">
                            {val.title}
                        </p>
                    </div>

                </div>
            ))}
        </Slider>
        </div>
        
        </>
    )
}

export default BannerSlider