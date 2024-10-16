import PropTypes from 'prop-types';
const Title = ({title}) => {
    return (
    <>
    <button className="text-black  font-bold text-3xl py-4  title  border-green-500 border-b-4 relative whitespace-nowrap">
        {title}
    </button>
    </>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title