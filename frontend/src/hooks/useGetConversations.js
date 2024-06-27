import { useEffect, useState, useCallback } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConversation = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/v1/users', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (!data?.data) {
        throw new Error(data?.message);
      }

      // Only update state if the data has changed
      setConversations((prevConversations) => {
        if (JSON.stringify(prevConversations) !== JSON.stringify(data.data)) {
          return data.data;
        }
        return prevConversations;
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getConversation();
  }, [getConversation]);

  return { loading, conversations };
};

export default useGetConversations;
