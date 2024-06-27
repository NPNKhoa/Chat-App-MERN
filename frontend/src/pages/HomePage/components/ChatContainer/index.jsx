import { Divider } from "@mui/material";
import ChatHeader from "../ChatHeader";
import ChatArea from "../ChatArea";
import ChatInput from "../MessageInput";
import useConversation from "../../../../zustand/useConversation";
import NoConversation from "../NoConversation";
import { useEffect } from "react";

const ChatContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="flex flex-col w-3/4 h-full">
            {selectedConversation ? (
                <>
                    <ChatHeader />
                    <Divider />
                    <ChatArea />
                    <ChatInput />
                </>
            ) : (
                <NoConversation />
            )}
        </div>
    );
};

export default ChatContainer;