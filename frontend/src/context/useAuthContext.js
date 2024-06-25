import { useContext } from "react"
import { AuthContext, } from "./AuthContext"

const useAuthContext = () => {
    return useContext(AuthContext);
};

export default useAuthContext;