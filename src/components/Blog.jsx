import { IoIosCalendar } from 'react-icons/io';
import Title from '../common/Title';
import {blogs} from '../assets/data';
import { FaRegComment } from 'react-icons/fa';
const Blog = () => {
    return (
        <>
        <div className='w-10/12 m-auto mt-16'>
            <div className="mx-2 text-center my-16">
                <Title title={"From the Blog"}/>
            </div>

            <div className="lg:flex my-10">
                {blogs.map((val, key) => (
                    <div className="relative mb-5" key={key}>
                        <div className="mx-2">
                            <div className="md:h-72">
                                <img src={val.img} alt="" />
                            </div>

                            <div className="flex gap-4 mb-1">
                                <p className='flex items-center gap-1 text-gray-500'>
                                    <IoIosCalendar/> {val.date}
                                </p>
                                <p className='flex items-center gap-1 text-gray-500'>
                                    <FaRegComment/> {val.comment}
                                </p>
                            </div>
                                <h3 className='my-2 md:text-xl font-semibold'>{val.title}</h3>
                                <p className='text-gray-500'>{val.description}</p>


                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Blog