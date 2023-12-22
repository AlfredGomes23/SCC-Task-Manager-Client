/* eslint-disable react/no-unescaped-entities */
import { MdOutlineContactPhone } from "react-icons/md";
import { TiChevronRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="my-3 px-10 md:px-32 py-10 bg-base-200 rounded-xl space-y-7">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">Learn More About SCC Task Manager</h2>
            <div className="divider divider-accent md:w-2/3 mx-auto"></div>
            <p className="text-center text-xl">Welcome to SCC Todo Manager, a robust Task Management Platform designed to revolutionize the way you organize and accomplish tasks. Here's why you should explore more:</p>

            <h3 className="text-2xl underline text-accent">Key Features:</h3>
            <p>1. Effortless Task Creation: Create tasks with ease using our intuitive and user-friendly interface. Add titles, descriptions, deadlines, and priority levels effortlessly.</p>
            <p>2. Dynamic Task Lists: Organize your tasks seamlessly with dynamic lists - from 'To-Do' to 'Ongoing' and 'Completed.' Utilize drag-and-drop functionality for a personalized task management experience.</p>
            <p>3. User Authentication: Securely log in, register, and manage your profile. Enjoy the benefits of personalized dashboards, profile pictures, and task details.</p>

            <h3 className="text-2xl underline text-accent"> Additional Features:</h3>

            <p>1. Task Editing Functionality: Edit and update task details easily. Adapt to changing requirements with our task editing functionality.</p>

            <p>2. User-Friendly Interface: Experience a responsive design across all devices. SCC Todo Manager ensures a seamless user experience on phones, tablets, and PCs.</p>

            <p>3. Toast Notifications: Enjoy toast notifications for quick updates and alerts, enhancing your task management experience.</p>
            <div>

                <p className="text-3xl text-warning text-center">Ready to transform your task management journey?</p>
                <p className="text-3xl text-success text-center mt-3 mb-10">Explore SCC Task Manager and take control of your workflow.</p>
                {/* buttons */}
                <div className="flex gap-10 justify-center ">
                    <Link to='/about-us' className="btn btn-accent btn-outline indicator">
                        Contact Us <MdOutlineContactPhone className='text-xl' />
                        <span className="indicator-item indicator-start badge badge-accent btn-accent">Feel Free</span>
                    </Link>
                    <Link to='/login' className="btn btn-accent btn-outline place-items-center indicator">
                        Get Started <TiChevronRightOutline className='text-xl' />
                        <span className="indicator-item badge badge-accent btn-accent">It's Free</span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;