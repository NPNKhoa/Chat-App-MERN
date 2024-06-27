import { useEffect } from "react";
import { useSocketContext } from "../context/useSocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off('newMessage');
    }, [socket, messages, setMessages]);
};

export default useListenMessage;