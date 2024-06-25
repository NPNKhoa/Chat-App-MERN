import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const AuthLayout = ({ children, }) => {
  const { t, } = useTranslation();

  return (
    <div className='p-1 h-screen flex flex-col items-center justify-center'>
      <div className='w-full'>
        <img
          src='/images/logo-chat.png'
          alt='logo'
          className='w-1/12 mx-auto my-2 mb-0'></img>
        <h1 className='mb-7 text-center font-bold uppercase text-4xl text-blue-500'>
          {t('welcome-message')}
        </h1>
      </div>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.any,
}

export default AuthLayout;