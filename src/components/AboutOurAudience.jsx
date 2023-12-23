/* eslint-disable react/no-unescaped-entities */
import { TiChevronRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";



const AboutOurAudience = () => {
    return (
        <div className="text-center my-3 px-10 md:px-32 py-10 bg-base-200 rounded-xl">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold">Who Benefits from Our Platform?</h2>
            <div className="divider divider-accent md:w-2/3 mx-auto"></div>
            <p className="text-xl">Our versatile Task Management Platform is designed to empower individuals across various professions. Whether you're a developer, corporate professional, banker, or part of any dynamic field, our platform is tailored to enhance your productivity and organization.</p>

            <h3 className="text-accent text-2xl mt-5">Developers 🚀:</h3>
            <p className="lg:px-24">Effortlessly manage your project tasks, deadlines, and collaborations. Stay focused on coding while we handle the task management for you.</p>

            <h3 className="text-accent text-2xl mt-5">Corporate Professionals 💼:</h3>
            <p className="lg:px-24">Streamline team collaboration and project tracking. Our platform ensures that your team stays organized and efficient, bringing projects to successful completion.</p>

            <h3 className="text-accent text-2xl mt-5">Bankers 🏢:</h3>
            <p className="lg:px-24">Stay on top of financial tasks and project management. Our platform provides a centralized hub for managing tasks related to finance and banking operations.</p>

            <div className="mt-5">
                <p className="text-accent text-xl lg:px-40">Our aim is to simplify any professional's workflow and help to achieve daily goals. Explore the benefits today!</p>
                {/* buttons */}
                <div className="flex gap-10 justify-center mt-5">
                    <Link to='/about-us' className="btn  btn-outline">Explore More</Link>
                    <Link to='/login' className="btn  btn-outline place-items-center indicator">
                        Get Started <TiChevronRightOutline className='text-xl' />
                        <span className="indicator-item badge badge-accent text-white btn-accent">It's Free</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutOurAudience;