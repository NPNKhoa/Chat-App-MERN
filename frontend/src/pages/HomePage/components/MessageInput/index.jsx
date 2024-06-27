import { IconButton, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import SendIcon from '@mui/icons-material/Send';
import useSendMessage from "../../../../hooks/useSendMessage";
import { useState } from "react";

const ChatInput = () => {
    const { t, } = useTranslation();

    const [message, setMessage] = useState('');

    const { sendMessage, } = useSendMessage();

    const handleSendMessage =async (e) => {
      e.preventDefault();
      if(!message) return;
      await sendMessage(message);
      setMessage('');
    }

    return (
      <div className='w-full flex items-center justify-between p-4'>
        <TextField
          id='input-message'
          className='w-full'
          placeholder={t('input-message-here-label')}
          multiline
          variant='outlined'
          size='small'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton aria-label='send-message' onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    );
};

export default ChatInput;