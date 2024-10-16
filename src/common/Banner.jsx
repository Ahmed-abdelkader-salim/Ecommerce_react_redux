import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
const Banner = ({title,link}) => {
    return (
        <>
        <section className="breadcrumb bg-center bg-cover">
            <div className="container m-auto py-12">
            <div className="flex justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">{title}</h2>

                    <div className="mt-">
                        <Link to={'/'} className='text-white text-lg hover:text-green-500'>Home</Link>
                        <span className="mx-2 text-white">/</span>
                        <span className="text-white">{link}</span>
                    </div>
                </div>
            </div>

            </div>
        </section>
        </>
    )
}

Banner.propTypes = {
    title:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired,
}

export default Banner