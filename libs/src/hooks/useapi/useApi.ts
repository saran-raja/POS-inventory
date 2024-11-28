import { useCallback, useState } from 'react';
import axios from 'axios';

export const UseApi = ({
  url,
  method = 'get',
  headers = {},
}: {
  url: string;
  method?: string;
  headers?: object;
}) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  const fetchData = useCallback(
    async (data = {}) => {
      setState((prevState) => ({ ...prevState, isLoading: true, error: null }));
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          ...headers,
        },
      };

      await new Promise((resolve) => setTimeout(resolve, 500));

      try {
        let response;

        switch (method) {
          case 'delete':
            response = await axios.delete(url, { ...config, data });
            break;
          case 'post':
            response = await axios.post(url, data, config);
            break;
          case 'put':
            response = await axios.put(url, data, config);
            break;
          case 'get':
          default:
            response = await axios.get(url, config);
            break;
        }
        if (response && response.data) {
          setState({ data: response.data, isLoading: false, error: null });
        } else {
          throw new Error('No response data received');
        }
      } catch (error: any) {
        const errorMsg =
          error.response?.data?.error || 'An unexpected error occurred';
        console.error('Error fetching data:', error);
        setState({ isLoading: false, data: null, error: errorMsg });
      }
    },
    [url, method, headers]
  );

  return { stateData: state, fetchData };
};

export default UseApi;
