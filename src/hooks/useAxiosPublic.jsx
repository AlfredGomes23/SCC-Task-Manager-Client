import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: 'https://server-scc-task-manager.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;