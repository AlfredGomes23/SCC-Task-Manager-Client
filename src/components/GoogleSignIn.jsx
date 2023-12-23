/* eslint-disable react/prop-types */
import { useState, } from "react";
import useMyContext from "../hooks/useMyContext";
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";



const GoogleSignIn = ({ from }) => {
    const { user, signin } = useMyContext();
    const [signingIn, setSigningIn] = useState(false);
    const navigate = useNavigate();

    const handleSignIN = async () => {
        await setSigningIn(true);
        //signIn
        signin().then(res => {
            //check and store in db
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Welcome back, ${res.user.displayName}`,
                showConfirmButton: false,
                timer: 1000
            });
            navigate(from, { replace: true });
        }).catch(err => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2000
            });
        })
    }

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