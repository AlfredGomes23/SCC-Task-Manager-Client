/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import bg from '../assets/banner-bg.png';
import { Link } from 'react-router-dom';
import { TiChevronRightOutline } from "react-icons/ti";
const Banner = () => {
    return (
        <div className='rounded-lg overflow-hidden bg-fixed bg-cover h-[calc(100vh-100px)] flex items-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className="mx-auto rounded-lg overflow-hidden h-fit flex flex-col justify-center p-3 lg:p-5 w-1/2 space-y-3 glass" data-aos="slide-down">
                <p className='text-xl font-pacifico'>Welcome to,</p>
                <h2 className='font-doodle text-5xl text-center'>SCC Task Manager</h2>
                <TypeAnimation
                    sequence={[
                        'Organize Your To-Do List.',
                        1000,
                        'Organize Your Daily Life.',
                        1000
                    ]}
                    repeat={Infinity}
                    speed={5}
                    className='text-2xl font-pacifico text-end' />
                <Link to='/login' className="btn btn-outline flex gap-0 w-fit mx-auto">
                    Let's Explore<TiChevronRightOutline className='text-xl' />
                </Link>
            </div>
        </div>
    );
};

export default Banner;