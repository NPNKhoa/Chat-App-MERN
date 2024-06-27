import PropTypes from 'prop-types';
import useConversation from '../../../../zustand/useConversation';

const Conversation = ({ conversation, }) => {
  const { selectedConversation, setSelectedConversation, } = useConversation();

  const isSelected = selectedConversation?._id === conversation?._id;

  return (
    <div
      className={
        `flex gap-3 items-center justify-start p-2 hover:cursor-pointer hover:bg-blue-300 
        ${isSelected ? 'bg-blue-300' : ''}`
      }
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src={conversation?.profilePicture} />
        </div>
      </div>
      <div className='w-2/3'>
        {/* call api and put data here */}
        <h3 className='font-medium text-lg'>{conversation?.fullname}</h3>
        <span className='w-3/4 text-slate-600'>Sender: </span>
        <p className='inline-block text-slate-600'>Hello</p>
      </div>
    </div>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.any,
}

export default Conversation;