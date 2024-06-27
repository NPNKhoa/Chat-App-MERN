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

    const handleEnterPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        handleSendMessage(e);
      }
    };

    return (
      <form
        className='w-full flex items-center justify-between p-4'
        onSubmit={handleSendMessage}>
        <TextField
          id='input-message'
          className='w-full'
          placeholder={t('input-message-here-label')}
          multiline
          variant='outlined'
          size='small'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleEnterPress}
        />
        <IconButton aria-label='send-message' onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </form>
    );
};

export default ChatInput;