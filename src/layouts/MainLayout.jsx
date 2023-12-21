import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='font-inter max-w-7xl mx-auto'>
            <Navbar />
            <div className='my-3'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;