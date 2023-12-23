import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useMyContext from "../hooks/useMyContext";
import Swal from 'sweetalert2'
import GoogleSignIn from "../components/GoogleSignIn";

const Register = () => {
    const { user, createUser, updateUser } = useMyContext();
    const [registering, setRegistering] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();

    //register
    const onSubmit = (data) => {
        setRegistering(true);
        //create user
        createUser(data.email, data.password)
            .then(() => {
                //set name & url
                updateUser(data.name, data.photoURL)
                    .then(res => {
                        console.log(user);
                        //store in dB
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Congrats😀,Registration Completed.",
                            text: `Welcome to SCC Task Manager, ${res.displayName}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });                        
                    })
                    .catch(e => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: `${e.message}`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                    })
            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2000
                });
            })
        setRegistering(false);
    }
    return (
        <div className="hero min-h-fit">
            <div className="hero-content flex-col">
                <div className="card shrink-0 w-full px-5 shadow-2xl bg-base-200 rounded-xl">
                    <h1 className="text-4xl text-accent text-center mt-5 font-doodle">Register now!</h1>
                    <div className="divider divider-accent w-full md:w-1/2 mx-auto"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* name & url */}
                        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
                            <div className="form-control indicator">
                                <span className="indicator-item indicator-center badge text-accent font-bold">Your Name:</span>
                                <input
                                    type="text"
                                    {...register("name")}
                                    placeholder="YourName"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control indicator">
                                <span className="indicator-item indicator-center badge text-accent font-bold">Your Photo Url:</span>
                                <input
                                    type="text"
                                    {...register("photoURL")}
                                    placeholder="URL"
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>
                        {/* email & password */}
                        <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10">
                            <div className="form-control indicator">
                                <span className="indicator-item indicator-center badge text-accent font-bold">Email Address:</span>
                                <input
                                    type="email"
                                    {...register("email",
                                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                    placeholder="Your@email.address"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control indicator">
                                <span className="indicator-item indicator-center badge text-accent font-bold">Password:</span>
                                <input
                                    type="password"
                                    {...register("password",
                                        { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/ })}
                                    placeholder="Pa55w0rd"
                                    className="input input-bordered" />
                            </div>
                        </div>
                        {/* error */}
                        <div className="max-w-lg ">
                            {errors.password && <p className="text-center text-error font-semibold">Password MUST contain Minimum 6 characters Including at least a Upper, a Lower case letter, also a Number</p>}
                        </div>
                        <div className="form-control mt-6">
                            {registering ?
                                <button className="btn btn-accent text-white text-xl btn-wide mx-auto">
                                    Registering<span className="loading loading-dots text-white"></span>
                                </button> :
                                <input type="submit" value="Register" className="btn btn-accent text-white text-xl btn-wide mx-auto" />}
                        </div>
                    </form>
                    <GoogleSignIn from={from} />
                    <p className="text-center mb-5">Already have an account?
                        <Link to='/login' className='link text-[#3027e2] font-bold underline ml-1'>Login here</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default Register;