import { useTranslation } from "react-i18next";
import useAuthContext from "../../../../context/useAuthContext";
import SmsIcon from '@mui/icons-material/Sms';

const NoConversation = () => {
    const { t, } = useTranslation();
    const { authUser, } = useAuthContext();

    return (
      <div className='w-full m-auto text-6xl text-center'>
        <h3 className='text-3xl'>
          {t('welcome-label')}, {authUser.fullname}✌️
        </h3>
        <p className="text-2xl">{t('no-conversation-message')}</p>
        <SmsIcon fontSize="large" />
      </div>
    );
};

export default NoConversation;