import { FaEnvelope, FaUser } from "react-icons/fa"
import { LiaFlagUsaSolid } from "react-icons/lia"
import {Link} from 'react-router-dom'
import Icon from "../components/Icon";

const TopHeader = () => {
    return (
        <>


        <div className="hidden lg:block border-b md:overflow-auto overflow-hidden overflow-x-auto  py-2 bg-gray-100">
            <div className="w-10/12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">

                        <div>
                            <span className="text-sm flex items-center gap-1">
                                <FaEnvelope/> hello@example.com
                            </span>
                        </div>

                        <div className="text-sm pl-4 border-l">
                            Free Shipping for all order of $99.
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <Icon/>
                        <Link className="flex items-center border-l gap-1 px-4 text-sm decoration-0 hover:text-rose-600">
                            <LiaFlagUsaSolid className="text-red-600 text-3xl"/>English
                        </Link>

                        <Link className="flex items-center border-l text-sm text-black px-4 gap-1 decoration-0">
                            <FaUser className="" size={15}/>Login
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default TopHeader