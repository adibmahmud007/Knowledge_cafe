import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between pt-3 border-b-2 max-w-6xl mx-auto pb-3'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;