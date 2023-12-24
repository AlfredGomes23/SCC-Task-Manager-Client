/* eslint-disable react/no-unescaped-entities */

import { Link, NavLink } from 'react-router-dom';
import useMyContext from '../hooks/useMyContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useMyContext();
    // console.log(user);
    //logout
    const handleLogOut = () => {
        logOut() && Swal.fire({
            position: "center",
            icon: "success",
            title: "Logout Successful",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="navbar bg-base-300 rounded-2xl flex flex-col lg:flex-row">
            <div className="flex-1">
                <Link to='/' className="text-4xl md:text-5xl font-doodle text-accent mx-auto">SCC Task Manager</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-1 flex- flex-row justify-center items-center">
                    <li><NavLink to='/'>Home</NavLink></li>
                    {user?.email &&
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                    {/* <li><NavLink to='/todays-task'>Today's Tasks</NavLink></li> */}
                    <li><NavLink to='/about-us'>About Us</NavLink></li>
                    {user?.email ? <>
                        <div className="avatar dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="w-12 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-fit">
                                <li><Link to='/profile'>{user?.displayName}</Link></li>
                                <li><button onClick={handleLogOut} className='btn btn-sm'>LogOut</button></li>
                            </ul>
                        </div>
                    </> : <>
                        <li><NavLink to='/register' className='btn btn-sm'>Register</NavLink></li>
                        <li><NavLink to='/login' className='btn btn-sm'>Login</NavLink></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;