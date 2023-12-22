import { useState } from "react";
import { useForm } from "react-hook-form";
import login from '../assets/login.gif'
import { Link } from "react-router-dom";


const LoginPage = () => {
    const [loggingIn, setLoggingIn] = useState(false);
    const [err, setErr] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setLoggingIn(true);
        console.log(data);
        setLoggingIn(false);
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col md:flex-row">
                <div className="hidden md:block">
                    <img src={login} alt="login" className="w-80" />
                </div>
                <div className="card shrink-0 max-w-sm shadow-2xl bg-base-200">
                    <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* email */}
                        <div className="form-control indicator">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Email Address:</span>
                            <input
                                type="email"
                                {...register("email",
                                    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                placeholder="Your@email.address"
                                className="input input-bordered" required/>
                        </div>
                        {/* password */}
                        <div className="form-control indicator mt-5">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Password:</span>
                            <input
                                type="password"
                                {...register("password",
                                    { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/ })}
                                placeholder="Pa55w0rd"
                                className="input input-bordered" required/>
                        </div>
                        {/* error */}
                        <div className="max-w-lg ">
                            {err ? <p className="text-center text-error font-semibold">{err}</p> : ''}
                        </div>
                        <div className="form-control mt-5">
                            {loggingIn ?
                                <button className="btn btn-accent text-white text-xl mx-auto">
                                    Logging In<span className="loading loading-dots text-white"></span>
                                </button> :
                                <input type="submit" value="Login" className="btn btn-accent text-white text-xl mx-auto" />}
                        </div>
                    </form>
                    <p className="text-center mb-5">Already have an account?
                        <Link to='/login' className='link text-[#3027e2] font-bold underline ml-1'>Login here</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;