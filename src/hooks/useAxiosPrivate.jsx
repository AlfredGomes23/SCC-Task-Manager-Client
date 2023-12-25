import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: 'https://server-scc-task-manager.vercel.app'
});

const useAxiosPrivate = () => {
    return axiosPrivate;
};

export default useAxiosPrivate;