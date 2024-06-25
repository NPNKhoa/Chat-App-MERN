import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthContextProvider = ({ children, }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.any,
};

export { AuthContextProvider, };