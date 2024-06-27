import useConversation from "../../../../zustand/useConversation";

const ChatHeader = () => {
  const { selectedConversation, } = useConversation();

  return (
    <div className='flex justify-between items-center p-3'>
      <div className='flex items-center'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={selectedConversation?.profilePicture} />
          </div>
        </div>
        <h3 className='font-medium text-lg ps-2'>
          {selectedConversation?.fullname}
        </h3>
      </div>
      <div></div>
    </div>
  );
};

export default ChatHeader;