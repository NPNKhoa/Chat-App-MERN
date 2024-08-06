import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
    const { messages, setMessages, selectedConversation, } = useConversation();

    const sendMessage = async (message) => {
        try {
            const res = await fetch(
              `${process.env.REACT_APP_API_URL}/v1/messages/send/${selectedConversation?._id}`,
              {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  message,
                }),
              }
            );

            const data = await res.json();
            if(!data?.data) {
                throw new Error(data?.message);
            }
            setMessages([...messages, data?.data]);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return { sendMessage };
};

export default useSendMessage;