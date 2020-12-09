import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const useRequest = (apiUrl: string) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        let ignore = false;
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios(apiUrl);
                if (!ignore) setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
        return (() => { ignore = true; });
    }, [apiUrl]);
    return { data, loading, error };
};

export default useRequest;