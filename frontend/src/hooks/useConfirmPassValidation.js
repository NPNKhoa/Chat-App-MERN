import { useState } from "react";

const useConfirmPassValidation = (password) => {
    const [confirmPassErr, setconfirmPassErr] = useState('');

    const validatePassword = (inputValue) => {
        if(inputValue.length < 6) {
            setconfirmPassErr('password-length-error-label');
        }
        else if (inputValue !== password) {
          setconfirmPassErr('difference-pass-label');
        } else {
          setconfirmPassErr('');
        }
    }

    const handleChangeConfirmPass = (e) => {
      const value = e.target.value;
      validatePassword(value);
    };

    return {
      confirmPassErr,
      handleChangeConfirmPass,
    };
};

export default useConfirmPassValidation;