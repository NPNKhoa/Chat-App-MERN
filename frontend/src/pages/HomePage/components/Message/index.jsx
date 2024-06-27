import PropTypes from 'prop-types';
import useConversation from '../../../../zustand/useConversation';
import TimeChanger from '../../../../components/TimeChanger';
import useAuthContext from '../../../../context/useAuthContext';

const Message = ({ message, }) => {
  const { selectedConversation, } = useConversation();
  const { authUser, } = useAuthContext();

  const fromMe = authUser?._id === message?.senderId;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser?.profilePicture : selectedConversation?.profilePicture;
  const messageBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-500';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${messageBgColor} text-black font-medium`}>{message?.message}</div>
      <div className='chat-footer opacity-50'>
        {message?.createdAt ? (
          <TimeChanger isoString={message?.createdAt} />
        ) : (
          <time className='text-xs opacity-50'>✓✓sent</time>
        )}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
}

export default Message;