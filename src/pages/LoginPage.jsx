import { useState } from "react";
import { useForm } from "react-hook-form";
import loginGif from '../assets/login.gif'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import Swal from 'sweetalert2'
import GoogleSignIn from "../components/GoogleSignIn";


const LoginPage = () => {
    const { login } = useMyContext();
    const [loggingIn, setLoggingIn] = useState(false);
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();
    //login
    const onSubmit = (data) => {
        setLoggingIn(true);
        //login
        login(data.email, data.password).then(res => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Login Successful.
                Welcome Back, ${res.user.displayName}`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
        }).catch(err => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2500
            });
        })
        setLoggingIn(false);
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col md:flex-row">
                <div className="hidden md:block">
                    <img src={loginGif} alt="login" className="w-80" />
                </div>
                <div className="card shrink-0 max-w-sm shadow-2xl bg-base-200">
                    <h1 className="text-4xl text-accent text-center mt-5 font-doodle">Login now!</h1>
                    <div className="divider divider-accent w-full md:w-2/3 mx-auto"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* email */}
                        <div className="form-control indicator">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Email Address:</span>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Your@email.address"
                                className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control indicator mt-5">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Password:</span>
                            <input
                                type="password"
                                {...register("password")}
                                placeholder="Pa55w0rd"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            {loggingIn ?
                                <button className="btn btn-accent text-white text-xl mx-auto">
                                    Logging In<span className="loading loading-dots text-white"></span>
                                </button> :
                                <input type="submit" value="Login" className="btn btn-accent text-white text-xl mx-auto" />}
                        </div>
                    </form>
                    <GoogleSignIn from={from} />
                    <p className="text-center mb-5">New here?
                        <Link to='/register' className='link text-[#3027e2] font-bold underline ml-1'>Register now!</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;