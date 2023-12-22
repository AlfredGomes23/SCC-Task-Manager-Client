/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import bg from '../assets/banner-bg.png';
import { Link } from 'react-router-dom';
import { TiChevronRightOutline } from "react-icons/ti";
const Banner = () => {
    return (
        <div className='rounded-lg overflow-hidden bg-fixed bg-contain md:bg-cover h-[calc(100vh-100px)] flex items-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className="mx-auto rounded-lg overflow-hidden h-fit flex flex-col justify-center p-3 lg:p-5 md:w-1/2 space-y-5 glass" data-aos="slide-down">
                <p className='text-xl font-pacifico'>Welcome to,</p>
                <h2 className='font-doodle text-3xl md:text-4xl lg:text-5xl text-center'>SCC Task Manager</h2>
                <TypeAnimation
                    sequence={[
                        'Organize Your To-Do List.',
                        1500,
                        'Organize Your Daily Life.',
                        1500
                    ]}
                    repeat={Infinity}
                    speed={5}
                    className='text-xl md:text-2xl font-pacifico text-center' />
                <Link to='/login' className="btn btn-outline btn-sm md:btn-md flex gap-0 w-fit mx-auto indicator">
                    Let's Explore<TiChevronRightOutline className='text-xl' />
                    <span className="indicator-item badge badge-success">It's Free</span>
                </Link>
            </div>
        </div>
    );
};

export default Banner;