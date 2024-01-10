/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useRequestData = (path) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}${path}`, {
                    headers: {
                        // Authorization: localStorage.getItem('token'),
                        Authorization:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1ZDQ0NWM1LWFkMWUtNGY2YS05ZDgwLTI2NzJjN2FiZDlmZCIsIm5pY2tuYW1lIjoiQW1hbmRhIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzA0NzM1ODcyLCJleHAiOjE3MDkwNTU4NzJ9.dEeIamznJtwVp8XYZ3cewu0A89_DZ-olnSk5dfb8_Nw',
                    },
                });
                response.data.results
                    ? setData(response.data.results)
                    : setData(response.data);
                // console.log(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchData();
    }, [path]);

    return [data, isLoading, isError];
};

export default useRequestData;
