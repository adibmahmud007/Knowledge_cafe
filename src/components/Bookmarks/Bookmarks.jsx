import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
       <div className='md:w-1/3 p-2'>
         <div>
             <h3 className='bg-purple-200 border-2 border-purple-700 p-5 text-center font-bold rounded-lg ml-3'>Total Reading Time: {readingTime}</h3>
        </div>
        <div className=" ml-3 mt-3 bg-slate-200 text-center rounded-md py-3">
           
            <h2 className='text-2xl mt-5 my-6'>Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
       </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;