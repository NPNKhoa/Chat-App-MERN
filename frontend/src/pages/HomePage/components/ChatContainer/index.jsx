import { Divider } from "@mui/material";
import ChatHeader from "../ChatHeader";
import ChatArea from "../ChatArea";
import ChatInput from "../MessageInput";

const ChatContainer = () => {
    return (
        <div className="flex flex-col w-3/4">
            <ChatHeader />
            <Divider />
            <ChatArea />
            <ChatInput />
        </div>
    );
};

export default ChatContainer;