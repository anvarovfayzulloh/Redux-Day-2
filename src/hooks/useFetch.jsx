import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (query) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            if (query) {
                try {
                    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?${query}`);
                    setData(response.data);
                } catch (error) {
                    setData(null);
                }
            }
        };

        loadData();
    }, [query]);

    return { data };
};

export { useFetch };