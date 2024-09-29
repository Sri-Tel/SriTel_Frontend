import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiRequestParams {
  token: string;
  apiUrl: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any; // Optional for POST/PUT requests
}

const useApiRequest = ({ token, apiUrl, method, data }: ApiRequestParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        };

        let res;
        switch (method) {
          case 'GET':
            res = await axios.get(apiUrl, config);
            break;
          case 'POST':
            res = await axios.post(apiUrl, data, config);
            break;
          case 'PUT':
            res = await axios.put(apiUrl, data, config);
            break;
          case 'DELETE':
            res = await axios.delete(apiUrl, config);
            break;
          default:
            throw new Error('Invalid method');
        }

        setResponse(res.data);
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    makeRequest();
  }, [apiUrl, method, data, token]);

  return { response, error, loading };
};

export default useApiRequest;
