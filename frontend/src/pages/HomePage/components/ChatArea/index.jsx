import { useEffect, useRef } from "react";
import useGetMessages from "../../../../hooks/useGetMessages";
import Message from "../Message";
import useListenMessage from "../../../../hooks/useListenMessages";

const ChatArea = () => {
  const { messages, } = useGetMessages();
  const containerRef = useRef(null);

  useListenMessage();

  useEffect(() => {
    if(containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages])

  return (
    <div
      ref={containerRef}
      className='p-4 overflow-auto bg-sky-100 h-5/6'
    >
      {messages?.map((message) => (
        <Message
          key={message?._id}
          message={message}
        />
      ))}
    </div>
  );
};

export default ChatArea;