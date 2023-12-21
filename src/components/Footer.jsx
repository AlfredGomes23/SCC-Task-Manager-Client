import { Link } from "react-router-dom";
import { FaFacebookF, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer items-center p-2 gap-2 bg-base-300 rounded-2xl ">
            <aside className="items-center grid-flow-col mx-auto">
                <Link to='/' className="text-3xl font-doodle text-accent mx-auto">SCC Task Manager</Link>
            </aside>
            <p className="mx-auto">Copyright © 2023 - All right reserved</p>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-auto">
                <Link to='https://twitter.com/' className="text-2xl"><FaSquareXTwitter /></Link>
                <Link to='https://www.youtube.com/' className="text-2xl"><FaYoutube /></Link>
                <Link to='https://www.facebook.com/' className="text-2xl"><FaFacebookF /></Link>
            </nav>
        </footer>
    );
};

export default Footer;