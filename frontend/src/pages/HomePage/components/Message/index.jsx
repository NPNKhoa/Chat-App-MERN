const Message = () => {
    return (
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-bubble'>Hello!</div>
        <div className='chat-footer opacity-50'>
          <time className='text-xs opacity-50'>12:45</time>
        </div>
      </div>
    );
};

export default Message;