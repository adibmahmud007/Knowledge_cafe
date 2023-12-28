import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id,title, cover, author, author_img, reading_time, posted_date, hashtag } = blog;
    return (
        <div className='mb-20 border-b-2'>
            <img className='mt-3 mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-6'>
                <div className='flex space-x-4'>
                    <img className='w-18 h-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg font-bold  '>{author}</h3 >
                        <p className='text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-lg'>{reading_time} min read

                        <button className='ml-2 text-xl'
                            onClick={() => handleAddToBookmark(blog)}
                        >
                            <FaBookmark></FaBookmark>
                        </button>
                    </span>
                </div>
            </div>
            <h2 className='text-2xl mb-4'>{title}</h2>
            <p className='mb-4'>
                {
                    hashtag.map(hash => <span  key={hash.id}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button
                onClick={()=> handleMarkAsRead(id,reading_time)}
                className='text-blue-800 font-bold underline mb-5 '>
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