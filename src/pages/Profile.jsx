import useMyContext from "../hooks/useMyContext";
import moment from 'moment'

const Profile = () => {
    const { user, loading } = useMyContext();

    if (loading) return <span className="loading loading-bars loading-lg flex justify-center items-center text-center text-accent"></span>;

    return (
        <div className="bg-base-200 rounded-lg">
            <h1 className="text-4xl text-center text-accent pt-3 underline">Your Profile</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-3 flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl">Name: {user?.displayName}</h2>
                    <p className="text-2xl md:text-3xl">Email: {user?.email}</p>
                    <p className="text-2xl md:text-3xl text-accent">Registered: {moment(user?.metadata.creationTime).format("Do MMM YY")}</p>
                </div>
                <img className="w-1/2 md:w-1/4  mx-auto my-5 rounded-full" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;