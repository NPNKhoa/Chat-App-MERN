import { useState } from "react";

const usePasswordValidation = () => {
    const [error, setError] = useState('');

    const validatePassword = (inputValue) => {
        if(inputValue.length < 6) {
            setError('password-length-error-label');
        }
        else {
            setError('');
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        validatePassword(value);
    }

    return {
        error,
        handleChange,
    }
};

export default usePasswordValidation;