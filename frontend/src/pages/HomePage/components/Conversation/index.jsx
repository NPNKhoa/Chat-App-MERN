const Conversation = () => {
    return (
      <div className='flex items-center justify-between my-2'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
        <div className='w-2/3'>
          {/* call api and put data here */}
          <h3 className='font-medium text-lg'>Duyen Le</h3>
          <span className='w-3/4 text-slate-600'>Sender: </span>
          <p className='inline-block text-slate-600'>Hello</p>
        </div>
      </div>
    );
};

export default Conversation;