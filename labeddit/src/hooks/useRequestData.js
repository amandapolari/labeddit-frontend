import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useRequestData = (path, isUpdate) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTimeout(async () => {
                    const response = await axios.get(`${BASE_URL}${path}`, {
                        headers: {
                            Authorization: localStorage.getItem('token'),
                        },
                    });

                    // console.log('dados da API:', response.data);
                    response.data.results
                        ? setData(response.data.results)
                        : setData(response.data);
                    setIsLoading(false);
                }, 250);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchData();
    }, [path, isUpdate]);

    return [data, isLoading, isError];
};

export default useRequestData;
