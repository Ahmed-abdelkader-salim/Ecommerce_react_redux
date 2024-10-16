import { GrLinkNext } from "react-icons/gr"
import { navbar } from "../assets/data"
import { Link } from "react-router-dom"
import Icon from "../components/Icon"

const Footer = () => {
    return (
        <div className="footer bg-gray-100">
            <div className="m-auto container py-16">
                <div className="lg:flex gap-8">
                    <div className="lg:w-1/4">
                    <h3 className=" text-black mb-8 text-xl font-bold">About Us</h3>
                    <p className="text-black">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sed dolor,
                        sapiente pariatur cum, consectetur, fugit at ea quis accusantium culpa numquam
                        tempora? At recusandae quidem,
                        officia illo repellendus eaque.
                    </p>
                    </div>

                    <div className="lg:w-1/4">
                        <h3 className=" text-black mb-8 text-xl font-bold">Newsletter</h3>
                        <p className="text-black mb-4">
                            Lorem ipsum, dolor sit amet cog elit. Deserunt sed dolor,
                            lendus eaque.
                        </p>

                        <div className="relative">
                            <input type="text" placeholder="Enter Email..." className="w-full p-2 focus:outline-none" />
                        
                            <div className="absolute right-0 h-full top-0 grid place-items-center px-3 bg-green-600 text-white">
                                <GrLinkNext/>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-1/4">
                    <h3 className=" text-black mb-8 text-xl font-bold">Useful Links</h3>
                    {navbar.map((val, key) => (
                        
                        <div className="text-black" key={key}>
                            <Link  className="text-hover-color text-sm" to={val.path}>{val.nav}</Link>
                        </div>
                    ))}
                    </div>


                    <div className="lg:w-1/4">
                    <h3 className=" text-black mb-8 text-xl font-bold">Follow Us</h3>
                    <p className="text-black">
                    let&apos;s Be Social
                    <span className="flex mt-4 gap-2">
                        <Icon/>
                    </span>
                    </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer