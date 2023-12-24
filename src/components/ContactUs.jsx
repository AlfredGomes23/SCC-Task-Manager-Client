/* eslint-disable react/no-unescaped-entities */
import { TiChevronRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MdLocationOn, MdOutlineContactMail, MdOutlineEmail } from "react-icons/md";
import { FaBusinessTime, FaFacebookF, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";

const ContactUs = () => {
    return (
        <div className="my-3 px-10 md:px-32 py-10 bg-base-200 rounded-xl">
            {/* header */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center items-center gap-3">
                Contact Us <MdOutlineContactMail className="text-accent" />
            </h2>
            <div className="divider divider-accent md:w-2/3 mx-auto"></div>
            <p className="text-center text-xl">We're excited to connect with you! Whether you have questions about our services, want to discuss potential collaborations, or simply want to say hello, we're here for you.</p>
            {/* contact details */}
            <h3 className="text-2xl underline text-center mt-7 mb-3">How to Reach Us:</h3>
            <p className="flex justify-center items-center text-xl mb-5">
                <MdOutlineEmail className="text-accent text-2xl mr-1" />
                Email Us:
                <Link to='mailto:alfredgomes23@gmail.com' className="link text-[#3027e2] ml-5">info@scctm.com</Link>
            </p>
            <p className="flex justify-center items-center text-xl">
                <TbSocial className="text-2xl mr-1 text-accent" />
                Our Social Media:
                <Link to='https://twitter.com/' className="text-2xl ml-5 mr-3 text-[#3027e2]"><FaSquareXTwitter /></Link>
                <Link to='https://www.youtube.com/' className="text-2xl text-[#3027e2]"><FaYoutube /></Link>
                <Link to='https://www.facebook.com/' className="text-2xl ml-3 text-[#3027e2]"><FaFacebookF /></Link>
            </p>

            {/* address */}
            <h3 className="text-center text-2xl underline mt-7 mb-5"> Our Address:</h3>
            <p className="flex justify-center items-center text-center text-xl">
                <MdLocationOn className="text-2xl text-accent" />
                Motijheel, Dhaka-1000, Bangladesh
            </p>
            <p className="text-center text-xl mt-3 mb-7">If you prefer face-to-face conversations, our office doors are always open. Feel free to drop by during our business hours.</p>

            {/* office hours */}
            <div className="border-2 border-accent  rounded-lg w-96 mx-auto mb-7">
                <h3 className="flex justify-center items-center text-2xl underline mt-7 mb-5">
                    <FaBusinessTime className="text-accent mr-1 " />
                    Business Hours:
                </h3>
                <p className="text-center text-xl mt-3 mb-3">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-center text-xl mt-3 mb-3">Saturday: 10:00 AM - 2:00 PM (By Appointment Only)</p>
                <p className="text-center text-xl mt-3 mb-3">Sunday: Closed</p>
            </div>

            {/* last words */}
            <p className="text-3xl text-warning text-center">We look forward to hearing from you and can't wait to assist you on your journey.</p>
            <p className="text-3xl text-success text-center mt-3 mb-10">Let's build something amazing together!</p>

            {/* button */}
            <Link to='/login' className="btn btn-accent text-white place-items-center indicator mx-auto flex">
                Get Started <TiChevronRightOutline className='text-xl' />
                <span className="indicator-item badge badge-outline text-neutral">It's Free</span>
            </Link>


        </div >
    );
};

export default ContactUs;