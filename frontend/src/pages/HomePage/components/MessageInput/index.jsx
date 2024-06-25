import { IconButton, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
    const { t, } = useTranslation();
    return (
      <div className='w-full flex items-center justify-between p-4'>
        <TextField
          id='input-message'
          className='w-full'
          placeholder={t('input-message-here-label')}
          multiline
          variant='outlined'
          size='small'
        />
        <IconButton aria-label='send-message'>
          <SendIcon color="error" />
        </IconButton>
      </div>
    );
};

export default ChatInput;