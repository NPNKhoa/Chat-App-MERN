import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { useState } from 'react';

const LoginPage = () => {
  const { t, } = useTranslation();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { login, } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  }

  return (
    <div className='w-screen'>
      <form
        className='w-1/2 mx-auto py-6 pb-10 px-4 bg-blue-50 rounded-md flex flex-col'
        onSubmit={handleSubmit}
      >
        <h2 className='mb-12 text-center text-3xl'>{t('login-page-title')}</h2>
        <TextField
          required
          id='outlined-required'
          sx={{ margin: '8px 0' }}
          label={t('username-label')}
          size='small'
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
        />
        <TextField
          required
          id='outlined-password-input'
          sx={{ margin: '8px 0' }}
          label={t('password-label')}
          type='password'
          autoComplete='current-password'
          size='small'
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
        />
        <Button
          variant='contained'
          sx={{ marginTop: '16px' }}
          onClick={handleSubmit}>
          {t('login-btn-label')}
        </Button>
        <div className='mt-3 ms-auto'>
          {t('no-account-label') + ' '}
          <Link to={'/signup'} className='text-blue-500 hover:text-blue-300'>
            {t('register-label')}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
