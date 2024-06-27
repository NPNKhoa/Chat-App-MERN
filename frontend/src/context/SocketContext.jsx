import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAuthContext from "./useAuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

const SocketContextProvider = ({ children, }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser, } = useAuthContext();

    useEffect(() => {
        if(authUser) {
            const socket = io('https://chat-app-mern-wnvj.onrender.com', {
              query: {
                userId: authUser._id,
              },
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        }
        else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers, }}>
            {children}
        </SocketContext.Provider>
    )
};

SocketContextProvider.propTypes = {
    children: PropTypes.any,
};

export { SocketContextProvider, };