const ChatHeader = () => {
    return (
      <div className='flex justify-between items-center p-3'>
        <div className='flex items-center'>
          <div className='avatar online'>
            <div className='w-12 rounded-full'>
              <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
            </div>
          </div>
          <h3 className='font-medium text-lg ps-2'>Duyen Le</h3>
        </div>
        <div></div>
      </div>
    );
};

export default ChatHeader;