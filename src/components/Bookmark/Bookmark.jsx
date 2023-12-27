import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div >
            <h3 className='text-xl bg-white text-black p-4 m-7 rounded-md' >{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;