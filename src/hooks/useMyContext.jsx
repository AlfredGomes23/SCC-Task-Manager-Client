import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useMyContext = () => {
    const all = useContext(AuthContext);
    return all;
};

export default useMyContext;