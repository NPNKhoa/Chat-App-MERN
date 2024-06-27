import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast";

const useSearchUsers = (searchQuery) => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const searchUsers = useCallback(async () => {
        setLoading(true);
        try {
            let url = 'http://localhost:5000/v1/users';

            if(searchQuery) {
                url += `?fullname=${encodeURIComponent(searchQuery)}`;
            }

            const res = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await res.json();

            if(!data?.data) {
                throw new Error(data?.message);
            }

            setUsers(data?.data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [searchQuery]);

    useEffect(() => {
      searchUsers();
    }, [searchQuery, searchUsers,]);

    return { loading, users, };
};

export default useSearchUsers;