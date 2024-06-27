// import useGetConversations from '../../../../hooks/useGetConversations';
import PropTypes from 'prop-types';
import Conversation from '../Conversation';

const ContactList = ({ conversations, loading, }) => {
  // const { loading, conversations } = useGetConversations();

  return (
    <div className='my-4 h-full overflow-auto'>
      {loading ? (
        <div className='flex justify-center items-center h-full'>
          <span className='loading loading-spinner text-info w-1/5'></span>
        </div>
      ) : (
        conversations?.map((conversation) => (
          <Conversation key={conversation?._id} conversation={conversation} />
        ))
      )}
    </div>
  );
};

ContactList.propTypes = {
  conversations: PropTypes.array.isRequired,
  loading: PropTypes.bool,
}

export default ContactList;
