import toast from "react-hot-toast";
import useAuthContext from "../context/useAuthContext";
import { useTranslation } from "react-i18next";

const useLogin = () => {
    const { t, } = useTranslation();
    const { setAuthUser, } = useAuthContext();

    const login = async ({ username, password, }) => {
        if (!username || !password) {
            toast.error(t('missing-field-error-label'));
            return;
        }
        try {
            const res = await fetch(
              'http://https://chat-app-mern-wnvj.onrender.com/v1/auth/login',
              {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username,
                  password,
                }),
              }
            );

            const data = await res.json();

            if(data.error) {
                throw new Error(data.error);
            }

            if(!data.data) {
                throw new Error(data?.message);
            }

            localStorage.setItem('chat-user', JSON.stringify(data.data));
            setAuthUser(data.data);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return { login, };
};

export default useLogin;