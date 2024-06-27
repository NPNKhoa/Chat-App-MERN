import { useEffect } from "react";
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast";

const useGetMessages = () => {
    const { messages, setMessages, selectedConversation, } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch(
                  `https://chat-app-mern-wnvj.onrender.com/v1/messages/${selectedConversation?._id}`,
                  {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                );

                const data = await res.json();
                if(!data?.data) {
                    throw new Error(data?.message);
                }
                setMessages(data?.data);
            } catch (error) {
                toast(error.message);
            }
        }

        if(selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, };
};

export default useGetMessages;