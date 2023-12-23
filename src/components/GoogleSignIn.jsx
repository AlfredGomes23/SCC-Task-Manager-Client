/* eslint-disable react/prop-types */
import { useState, } from "react";
import useMyContext from "../hooks/useMyContext";
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";



const GoogleSignIn = ({ from }) => {
    const { signin } = useMyContext();
    const [signingIn, setSigningIn] = useState(false);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleSignIN = () => {
        setSigningIn(true);
        try {
            //signIn
            signin().then(async resp => {
                //check and store in db
                await axiosPublic.get(`/user?email=${resp.user.email}`).then(res => {
                    if (res.data.new) {
                        //save new user in db
                        axiosPublic.post('/users', {
                            name: resp.user.displayName,
                            email: resp.user.email,
                            photoURL: resp.user.photoURL
                        }).then(() => {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Registration Completed,
                                ❁❁ Welcome ❁❁, ${resp.user.displayName}`,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            navigate(from, { replace: true });
                        })
                    } else {
                        //old user
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `SignIn Successful.
                            Welcome Back, ${resp.user.displayName}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    }
                });
            });
        } catch (err) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2500
            });
        }
        setSigningIn(false)
    };

    return (<div className="mb-5 flex items-center gap-5 mx-auto">
        <p className="text-xl font-semibold">Continue With:</p>
        {signingIn ?
            <button className="btn btn-outline btn-accent">
                <FcGoogle className="text-2xl animate-spin" />
            </button> :
            <button onClick={handleSignIN} className="btn btn-outline btn-accent">
                <FcGoogle className="text-2xl" />
            </button>}
    </div>);
};

export default GoogleSignIn;