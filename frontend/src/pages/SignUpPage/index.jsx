import { TextField, Button, } from "@mui/material";
import { Link, } from "react-router-dom";
import GenderCheckBox from "./components/GenderCheckBox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import usePasswordValidation from "../../hooks/usePasswordValidation";
import useConfirmPassValidation from "../../hooks/useConfirmPassValidation";
import useSignUp from "../../hooks/useSignUp";

const SignUpPage = () => {
  const { t, } = useTranslation();

  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
  });

  const { error, handleChange, } = usePasswordValidation();
  const { confirmPassErr, handleChangeConfirmPass } = useConfirmPassValidation(inputs.password);
  const { signUp, } = useSignUp();

  const handleGenderChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signUp(inputs);
  }

  return (
    <div className='w-screen'>
      <form
        className='w-1/2 mx-auto py-4 pb-8 px-4 bg-blue-50 rounded-md flex flex-col'
        onSubmit={handleSignUp}>
        <h2 className='mb-7 text-center text-2xl'>
          {t('regitser-page-title')}
        </h2>
        <TextField
          required
          id='outlined-fullname'
          sx={{ margin: '8px 0' }}
          label={t('fullname-label')}
          size='small'
          value={inputs.fullname}
          onChange={(e) => {
            setInputs({ ...inputs, fullname: e.target.value });
          }}
        />
        <TextField
          required
          id='outlined-username'
          sx={{ margin: '8px 0' }}
          label={t('username-label')}
          size='small'
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
        />
        <div className='flex justify-between'>
          <TextField
            required
            id='outlined-password-input'
            sx={{ margin: '8px 0', width: '45%' }}
            label={t('password-label')}
            size='small'
            type='password'
            value={inputs.password}
            error={!!error}
            helperText={t(error)}
            onChange={(e) => {
              setInputs({ ...inputs, password: e.target.value });
              handleChange(e);
            }}
          />
          <TextField
            required
            id='outlined-confirm-password-input'
            sx={{ margin: '8px 0', width: '45%' }}
            label={t('confirm-password-label')}
            type='password'
            size='small'
            value={inputs.confirmPassword}
            error={!!confirmPassErr}
            helperText={t(confirmPassErr)}
            onChange={(e) => {
              setInputs({ ...inputs, confirmPassword: e.target.value });
              handleChangeConfirmPass(e);
            }}
          />
        </div>
        <GenderCheckBox
          selectedGender={inputs.gender}
          onGenderChange={handleGenderChange}
        />
        {/* Develop upload avatar feture */}
        <Button
          variant='contained'
          sx={{ marginTop: '16px' }}
          onClick={handleSignUp}>
          {t('register-btn-label')}
        </Button>
        <div className='mt-3 ms-auto'>
          {t('had-account-label') + ' '}
          <Link to={'/login'} className='text-blue-500 hover:text-blue-300'>
            {t('login-label')}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;