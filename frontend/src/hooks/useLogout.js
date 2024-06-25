import toast from 'react-hot-toast';
import useAuthContext from '../context/useAuthContext';

const useLogout = () => {
    const { setAuthUser, } = useAuthContext();

    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5000/v1/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            if(data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem('chat-user');
            setAuthUser(null);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return { logout, };
};

export default useLogout;