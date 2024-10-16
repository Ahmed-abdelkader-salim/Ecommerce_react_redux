import LatestProducts from './LatestProducts';
import ReviewProducts from './ReviewProducts';
import TopRatedProducts from './TopRatedProducts';
const BlogWrap = () => {
    return (
        <>
        <div className="w-10/12 blog_warapper m-auto mt-16">
            <div className="lg:w-full">
                <div className="lg:flex gap-4">
                    <LatestProducts/>
                    <TopRatedProducts/>
                    <ReviewProducts/>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogWrap