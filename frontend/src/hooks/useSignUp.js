import useAuthContext from "../context/useAuthContext";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const useSignUp = () => {
    const { t, } = useTranslation();

    const { setAuthUser, } = useAuthContext();

    const signUp = async ({ fullname, username, password, confirmPassword, gender, }) => {
        if(!fullname || !username || !password || !confirmPassword || !gender) {
            toast.error(t('missing-field-error-label'));
            return;
        }
        try {
            const res = await fetch(`http://localhost:5000/v1/auth/signup`, {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fullname,
                username,
                password,
                confirmPassword,
                gender,
              }),
            });

            const data = await res.json();

            if(data.error) {
                throw new Error(data.error);
            }

            if(!data.data) {
                throw new Error(data.message);
            }

            console.log(data.data);
            localStorage.setItem('chat-user', JSON.stringify(data.data));
            setAuthUser(data.data);
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    return { signUp, };
};

export default useSignUp;