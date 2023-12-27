import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id,title, cover, author, author_img, reading_time, posted_date, hashtag } = blog;
    return (
        <div className='mb-20 border-b-2'>
            <img className='w-full mt-3 mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-6'>
                <div className='flex space-x-4'>
                    <img className='w-14 h-15' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl  '>{author}</h3 >
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read

                        <button className='ml-2'
                            onClick={() => handleAddToBookmark(blog)}
                        >
                            <FaBookmark></FaBookmark>
                        </button>
                    </span>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p className='mb-4'>
                {
                    hashtag.map(hash => <span key={hash.id}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button
                onClick={()=> handleMarkAsRead(id,reading_time)}
                className='text-blue-800 font-bold underline mb-5'>
                Mark As Read
            </button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired

}
export default Blog;