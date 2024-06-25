import PropTypes from 'prop-types';

const ChatLayout = ({ children }) => {
    return (
        <div className='flex w-screen h-screen items-center justify-center'>
            {children}
        </div>
    );
};

ChatLayout.propTypes = {
  children: PropTypes.any,
};

export default ChatLayout